import { Box, Button, FormControl, List, ListItem, ListItemIcon, ListItemText, TextField, Typography,Grid } from '@mui/material'
import React, { Fragment, useRef, useState } from 'react'
import EditIcon from '../../Common/assets/images/EditIcon.png'
import { withStyles } from '@mui/styles';
import { withRouter } from '../../../Utils/withRouter';
import { Styles } from '../Profile/Styles';
import { DateOfBirthRegex, NameRegex, PhoneRegex } from '../../../Utils/Validate';
import { UpdateProfile } from '../../Redux/Reducers/Settings';
import { AppDispatch } from '../../Redux/store/Store';
import { toast } from 'react-toastify';
import Profile_SideImage from '../../Common/assets/images/123.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type IProps = {
  classes: {
    [type: string]: string
  },
  dispatch:AppDispatch
  selector: {
    CustomerReducer: {
      user: {
        data: {
          name:string,
          mobile:string,
          photo:string,
          dateOfBirth : string
        }
      }
    }
  }
}
type IState={
  name:string,
  mobile:string,
  dataofbirth:string
}
function ProfileInformation({ classes, selector,dispatch }: IProps) {
  const User = selector.CustomerReducer.user
  const[previewfile,setPreviewFile]=useState<string | null>(null)
  const[disabled,setDisabled]=useState<number | null >(null)
  const[image,setImage]=useState<string | File>('')
  const fileRef=useRef<HTMLInputElement>(null)
  const [profile,setProfile]=useState<IState>({
    name:User?.data?.name,
    mobile:User?.data?.mobile,
    dataofbirth:User?.data?.dateOfBirth
  })
  const[error,setError]=useState<IState>({
    name:'',
    mobile:'',
    dataofbirth:''
  })
   const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const {name,value}=e.target 
     if(name==='name'){
        const regex=NameRegex 
        if(!regex.test(value)){
          setError((prev)=>({...prev,name:'Invalid Name'}))
        }
         else{
          setError((prev)=>({...prev,name:''}))
         }
     }
     if(name==='mobile'){
      const regex=PhoneRegex 
      if(!regex.test(value)){
        setError((prev)=>({...prev,mobile:'Invalid Mobile'}))
      }
       else{
        setError((prev)=>({...prev,mobile:''}))
       }
   }
   if(name==='dataofbirth'){
    const regex=DateOfBirthRegex
    if(!regex.test(value)){
      setError((prev)=>({...prev,dataofbirth:'Age must be in between 18 to 100.'}))
    }
     else{
      setError((prev)=>({...prev,dataofbirth:''}))
     }
   }
    setProfile((prev)=>({...prev,[name]:value}))
   }
  const handleRef=()=>{
    if(fileRef.current){
      fileRef.current.click()
    }
  }
  const handleFileUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      setPreviewFile(URL.createObjectURL(file))
      setImage(file)
    }
  }
 const isFormComplete=()=>{
  if(error.name==="" || error.mobile==="" || error.dataofbirth===""){
    
  }
 }
  const handleUpdate=async()=>{
    const formdata = new FormData()
    if(profile.name){
    formdata.append('name', profile.name)
    }
    else{
      formdata.append('name', User.data.name)
    }
    if(profile.mobile){
    formdata.append('mobile', profile.mobile)
    }
    else{
      formdata.append('mobile', User.data.mobile)
    }
    if(image){
    formdata.append('photo', image)
    }
    else{
      formdata.append('photo', User.data.photo)
    }
    if(profile.dataofbirth){
      formdata.append('dateOfBirth',profile.dataofbirth )
    }
    else{
      formdata.append('dateOfBirth', User.data.dateOfBirth)
    }
    const resposne = await dispatch(UpdateProfile({ data: formdata }))
    const fulfilled = resposne.payload
    if (fulfilled.status === true) {
      toast.success(fulfilled.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    }
    else {
      toast.error(fulfilled.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    }

  }
  const handleDelete=async()=>{
    const formdata=new FormData()
     formdata.append('deletePhoto', String(true))
    const resposne = await dispatch(UpdateProfile({ data: formdata }))
    const fulfilled = resposne.payload
    if (fulfilled.status === true) {
      toast.success("Profile picture deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    }
    else {
      toast.error(fulfilled.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    }
  }
  const handleEdit=(index:any)=>{
    setDisabled(index)
  }
  const token=localStorage.getItem('token')
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={12} lg={6}>
          <Box className={classes.profileinformation}>
            <Box className={classes.personalinformation} sx={{ width: '90%', marginLeft: '1%' }}>Personal Information</Box>
            <Box className={classes.listitems}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    {previewfile ? (
                      <Box src={previewfile} component={'img'} className={classes.image} />
                    ) : User?.data?.photo ? (
                      <Box src={`${User?.data?.photo}/${token}`} component={'img'} className={classes.image} />
                    ) : (
                      <AccountCircleIcon className={classes.accountcircle} />
                    )}

                  </ListItemIcon>
                  <ListItemText className={classes.listitemtext} primary={<Typography className={classes.personalinformation}>{User?.data?.name.length > 12 ? `${User?.data?.name?.slice(0, 12) + "..."}` : User?.data?.name}</Typography>}
                    secondary={<Box>
                      <Button className={classes.uploadphotos} onClick={handleRef}>Upload New Picture</Button>
                      <input
                        type='file'
                        ref={fileRef}
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                      />
                      <Button className={classes.delete} onClick={handleDelete}>Delete</Button>
                    </Box>}
                  />
                </ListItem>
              </List>
              <FormControl fullWidth>
                <TextField className={classes.textFiled} disabled={disabled === 1 ? false : true} placeholder='Enter Name' onChange={handleChange} value={profile.name} name='name' InputProps={{
                  classes: { input: classes.input },
                  endAdornment: (<Box src={EditIcon} onClick={() => handleEdit(1)} component={'img'} />)
                }} />
                {error.name && <Typography className={classes.validate}>{error.name}</Typography>}
                <TextField className={classes.textFiled} disabled={disabled === 2 ? false : true} placeholder='Enter Mobile Number' onChange={handleChange} value={profile.mobile} name='mobile' InputProps={{
                  classes: { input: classes.input },
                  endAdornment: (<Box src={EditIcon} onClick={() => handleEdit(2)} component={'img'} />)
                }} />
                {error.mobile && <Typography className={classes.validate}>{error.mobile}</Typography>}
                <Button className={classes.update} onClick={handleUpdate}>Update</Button>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
           <Box className={classes.imagecontainer}>
           <Box src={Profile_SideImage} component={'img'} className={classes.profile_sideimage} />
           </Box>
          
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(ProfileInformation))