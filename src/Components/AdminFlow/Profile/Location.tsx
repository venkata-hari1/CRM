import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Styles } from './Styles'
import { withStyles } from '@mui/styles'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useEffect, useState } from 'react';
import {ReactComponent as EditIcon} from '../../Common/assets/images/SvgEdit.svg'
import {ReactComponent as Delete} from '../../Common/assets/images/Delete1.svg'
import { withRouter } from '../../../Utils/withRouter';
import { NameRegex, PinCodeRegex, ToastError, ToastSuccess } from '../../../Utils/Validate';
import { AppDispatch } from '../../Redux/store/Store';
import Circular from '../../Common/Circular';
import { AddAddress, DeleteAddress, EditAddress, GetAddress, PrimaryAddress, getpincode } from '../../Redux/Reducers/LandingReducer';
type IProps = {
  classes: {
    [type: string]: string
  },
  dispatch: AppDispatch,
  selector: {
    LandingReducer: {
      addreesdata: {
        data: {
          id: number,
          country: string,
          primaryStatus:boolean,
          city: string,
          houseNumber: string,
          state: string,
          streetNumber: string,
          pincode: string
        }[]
      },
      pincodedata: {
        PostOffice: {
          Country: string,
          State: string,
          Division: string
        }[]
      }
    }
  }
}
type IState = {
  street: string,
  hno: string,
  city: string,
  state: string,
  pincode: string,
  country: string
}
function Location({ classes, dispatch, selector }: IProps) {
  const Pincodes: any = selector.LandingReducer.pincodedata
  let city:string=''
  let country:string=''
  let state:string=''
  for (let i = 0; i < Pincodes?.length; i++) {
    for (let j = 0; j < Pincodes[i]?.PostOffice?.length; j++) {
      city = Pincodes[i].PostOffice[j].Division
      country = Pincodes[i].PostOffice[j].Country
      state = Pincodes[i].PostOffice[j].State
    }
  }
  const[edit,setEdit]=useState<boolean>(true)
  const [view, setView] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const[dialog,setDialog]=useState<boolean>(false)
  const[dialogopen,setDialogOpen]=useState<boolean>(false)
  const [address, setAddress] = useState<IState>({
    street: '',
    hno: '',
    city: city ? city : '',
    state: '',
    pincode: '',
    country: ''
  })
  const [error, setError] = useState<IState>({
    street: '',
    hno: '',
    city: '',
    state: '',
    pincode: '',
    country: ''
  })

  const [selectedAddressId, setSelectedAddressId] = useState<string | number | null>(null); 
  const handleChangeAddress = (id:string | number) => {
    setSelectedAddressId(id); 
  };
  useEffect(() => {
    setAddress(prevAddress => ({
      ...prevAddress,
      country: country ? country : '',
      city: city ? city : '',
      state: state ? state : ''
    }));
    async function getData() {
      await dispatch(GetAddress())
    }
    getData()
  }, [dispatch,selectedAddressId,city,state,country]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    if (name == "state") {
      const regex = NameRegex
      if (!regex.test(value)) {
        setError((prev) => ({ ...prev, state: 'Invalid State' }))
      }
      else {
        setError((prev) => ({ ...prev, state: '' }))
      }
    }
    if (name == "city") {
      const regex = NameRegex
      if (!regex.test(value)) {
        setError((prev) => ({ ...prev, city: 'Invalid city' }))
      }
      else {
        setError((prev) => ({ ...prev, city: '' }))
      }
    }
    if (name == "country") {
      const regex = NameRegex
      if (!regex.test(value)) {
        setError((prev) => ({ ...prev, country: 'Invalid country' }))
      }
      else {
        setError((prev) => ({ ...prev, country: '' }))
      }
    }
    if (name == "pincode") {
      const regex = PinCodeRegex
      if (!regex.test(value)) {
        setError((prev) => ({ ...prev, pincode: 'Invalid Pincode' }))
      }
      else {
        setError((prev) => ({ ...prev, pincode: '' }))
      }
    }
    setAddress((prev) => ({ ...prev, [name]: value }))
  }
  const isFormComplete = () => {
    if (error.pincode === "" && address.pincode ) {
      return true
    }
    else {
      return false
    }
  }
const handleAddOpen=()=>{
  setOpen(true)
  setEdit(false)
}
  const handlePincode = async () => {
    setView(true)
    const data = {
      pincode: address.pincode
    }

    setAddress((prev) => ({ ...prev, pincode: data.pincode }))
    const response = await dispatch(getpincode({ data: data }))
    const fulfilled = response.payload
    if (fulfilled?.[0].Status === "Success") {
      setView(false)
    }
    else if (fulfilled?.[0].Status === "Error") {
      setView(false)
      ToastError("No records found")
    }


  }
  const handleSave = async () => {
    const data = {
      streetNumber: address.street,
      houseNumber: address.hno,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
    }
    const response = await dispatch(AddAddress({ data: data }))
    const fulfilled = response.payload
    if (fulfilled.status === true) {
      setOpen(false)
      setAddress(prevAddress => ({
        ...prevAddress,
        country: '',
        city:'',
        state:'',
        pincode:'',
        hno:''
      }));

      ToastSuccess(fulfilled.message)
    }
    else {
      ToastError(fulfilled.message)
    }
  }
  const handleEditOpen=(data:any)=>{
    localStorage.setItem("updateid",data.id)
    setEdit(true)
    setAddress(prevAddress => ({
      ...prevAddress,
      country: data.country ? data.country : '',
      city: data.city ? data.city : '',
      state: data.state ? data.state : '',
      pincode:data.pincode?data.pincode:'',
      street: data.streetNumber?data.streetNumber:'',
      hno: data.houseNumber?data.houseNumber:'',
    }));
    setOpen(true)
  }
  const handleUpdate = async () => {
    const data:any={}
    if(address.hno){
      data.houseNumber=address.hno
    }
    if (address.street) {
      data.streetNumber = address.street;
    }
    if(address.city){
      data.city=address.city
    }
    if(address.state){
      data.state=address.state
    }
    if(address.country){
      data.country=address.country
    }
  
    const response = await dispatch(EditAddress({ data: data }));
    const fulfilled = response.payload;
  
    if (fulfilled.status === true) {
      setOpen(false);
      ToastSuccess(fulfilled.message);
    } else {
      ToastError("Something went wrong");
    }
  };
  const handleDelete=async()=>{
   const response= await dispatch(DeleteAddress())
   const fulfilled=response.payload 
   if(fulfilled.status===true){
    setDialogOpen(false)
    ToastSuccess(fulfilled.message)
   }
   else{
    ToastError(fulfilled.message)
   }
  }
  const handleDeleteOpen=(id:number)=>{
    setDialogOpen(true)
    localStorage.setItem("updateid",id.toString())
  }
  const handlePrimaryAddress=async()=>{
     const data={
      id:selectedAddressId
     }
     const response=await dispatch(PrimaryAddress({data:data}))
     const fulfilled=response.payload 
     if(fulfilled.status===true){
      setSelectedAddressId(null)
      ToastSuccess("Primary address has been changed successfully.")
     }
     else{
      ToastError(fulfilled.message)
     }

  }
  const getAddress = selector.LandingReducer.addreesdata
  return (
    <Box>
      <Circular open={view} />
      <Dialog open={Boolean(selectedAddressId)}>
        <DialogTitle className={classes.dialogtitle}>Are you sure you want to select this address as the primary address?</DialogTitle>
        <DialogActions>
          <Button variant='contained' color='error' size='small' sx={{fontSize:'90%'}} onClick={handlePrimaryAddress}>Yes</Button>
          <Button variant='contained' color='primary' size='small' sx={{fontSize:'90%'}} onClick={() => setSelectedAddressId(null)}>No</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={dialogopen}>
        <DialogTitle className={classes.dialogtitle}>Are You Sure Want to Delete ?</DialogTitle>
        <DialogActions>
          <Button variant='contained' color='error' size='small' sx={{fontSize:'90%'}} onClick={handleDelete}>Yes</Button>
          <Button variant='contained' color='primary' size='small' sx={{fontSize:'90%'}} onClick={()=>setDialogOpen(false)}>No</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={open} onClose={
        () => setOpen(false)
      } fullWidth sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "300px",
            '@media screen and (max-resolution: 1dppx)': {
              width: "100%",
              maxWidth: "400px",
            }
          },
        },
      }} >
        <DialogTitle className={classes.dialogtitle}>Add New Address</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Typography className={classes.textFiled1}>Street No*</Typography>
            <TextField value={address.street} type='number' name='street' onChange={handleChange} placeholder='Enter Street No' InputProps={{
              classes: {
                input: classes.input12,
                notchedOutline: classes.notchedOutline
              }
            }} />
            {error.street && <Typography className={classes.validate}>{error.street}</Typography>}
            <Typography className={classes.textFiled1}>House/Flat No*</Typography>
            <TextField value={address.hno} name='hno' onChange={handleChange} placeholder='Enter Hose/Flat No' InputProps={{
              classes: {
                input: classes.input12,
                notchedOutline: classes.notchedOutline
              }
            }} />
            {error.hno && <Typography className={classes.validate}>{error.hno}</Typography>}

            <Typography className={classes.textFiled1}>Pincode*</Typography>
            <Box className={classes.pincodecontainer}>
              <TextField value={address.pincode} name='pincode' onChange={handleChange} placeholder='Enter Pin Code' InputProps={{
                classes: {
                  input: classes.input12,
                  notchedOutline: classes.notchedOutline
                }
              }} />
              <Button className={classes.pincodeadd} variant='contained' color='success' onClick={handlePincode}>Add</Button>
            </Box>
            {error.pincode && <Typography className={classes.validate}>{error.pincode}</Typography>}
            <Typography className={classes.textFiled1}>City*</Typography>
            <TextField value={address.city} name='city' disabled={true} onChange={handleChange} placeholder='Enter  City' InputProps={{
              classes: {
                input: classes.input12,
                notchedOutline: classes.notchedOutline1
              }
            }} />
            {error.city && <Typography className={classes.validate}>{error.city}</Typography>}
            <Typography className={classes.textFiled1}>State*</Typography>
            <TextField value={address.state} name='state' disabled={true} onChange={handleChange} placeholder='Enter State' InputProps={{
              classes: {
                input: classes.input12,
                notchedOutline: classes.notchedOutline1
              }
            }} />
            {error.state && <Typography className={classes.validate}>{error.state}</Typography>}
            <Typography className={classes.textFiled1}>Country*</Typography>
            <TextField value={address.country} name='country' disabled={true} onChange={handleChange} placeholder='Enter Country' InputProps={{
              classes: {
                input: classes.input12,
                notchedOutline: classes.notchedOutline1
              }
            }} />
            {error.country && <Typography className={classes.validate}>{error.country}</Typography>}
          </FormControl>
          <Box className={classes.locationbtns}>
            <Button className={classes.cancelbtn} onClick={() => setOpen(false)}>Cancel</Button>
            {edit?
            <Button className={classes.savebtn} disabled={!isFormComplete()} sx={{ background: !isFormComplete() ? "grey !important" : "" }} onClick={handleUpdate}>Update</Button>
            :
            
            <Button className={classes.savebtn} disabled={!isFormComplete()} sx={{ background: !isFormComplete() ? "grey !important" : "" }} onClick={handleSave}>Save</Button>}
          </Box>
        </DialogContent>

      </Dialog>
      
      <Box className={classes.flexBox1}>
      <Typography className={classes.location}>My Locations</Typography>
        <Button onClick={handleAddOpen} className={classes.buttonselect} startIcon={<AddCircleOutlineIcon />}>Add New Address</Button>
      </Box>
      <FormControl fullWidth>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
    value={selectedAddressId} 
    onChange={(event:React.ChangeEvent<HTMLInputElement>) => handleChangeAddress(event.target.value)} 
  >
    {getAddress?.data?.map((address) => {
  
      const addressValue = `${address.streetNumber===null || address.streetNumber===""?"":"Street " + address.streetNumber}${address.city===null || address.city===""?"":" ," + address.city}${ address.state===null || address.state===""?"":" ," + address.state}${address.country===null || address.country===""?"":" ," + address.country}${address.pincode===null?"":" ," + address.pincode}`;
      
      return (
        <Box className={classes.formRadioGroup}>
        <FormControlLabel
          key={address.id}
          value={address.id}
          checked={address.primaryStatus}
          control={<Radio/>}
          label={<Typography className={classes.address} sx={{padding:'15px'}}>{addressValue}</Typography>}
        />
        <Box className={classes.btncontainer}>
        <Button className={classes.editbtn} 
          size='small'
          onClick={()=>handleEditOpen(address)}
          endIcon={<EditIcon/>}>Edit</Button>
          <Button className={classes.deletebtn}  endIcon={<Delete style={{margin:'6px'}}/>} onClick={()=>handleDeleteOpen(address.id)}>Delete</Button>
        </Box>
        </Box>
      );
    })}
  </RadioGroup>
     </FormControl>

    </Box>
  )
}
export default withRouter(withStyles(Styles)(Location))
