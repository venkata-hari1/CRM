import { Box, Button, Dialog, DialogActions, DialogContent, Divider, FormControl, FormLabel, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { Styles } from './Styles';
import { withStyles } from '@mui/styles';
import { withRouter } from '../../../Utils/withRouter';
import Range from "../../../Common/assets/images/Range.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AppDispatch } from '../../Redux/store/Store';
import { SalesData } from '../../Redux/Reducers/Seller';
import { SellerProperties } from '../../Redux/Reducers/Property';
import {ReactComponent as Search1} from '../../../assets/Search1.svg'
import { Property } from '../../Redux/Reducers/AdminReducer';
type IProps = {
value:boolean
admin:boolean
handleGetData:(data:any)=>void
handleClose:()=>void
classes: {
[type: string]: string;
};
open1:boolean;
navigate: Function;
dispatch: AppDispatch;
selector: string | unknown | null;
};

function HouseData({ classes,admin,handleGetData, navigate, dispatch, value,selector,open1,handleClose }: IProps) {
const[minPrice,setMinPrice]=useState<string | null>(null)
const[maxPrice,setMaxPrice]=useState<string | null>(null)
const [bedroom, setBedroom] = useState(0)
const[Category,setCategory]=useState<string | null>(null)
const[status,setStatus]=useState<string>('')
const [bathroom, setBathroom] = useState(0)
const[date,setDate]=useState<string>('')
const handleBathtInc = () => {
const add = bathroom+ 1
setBathroom(add)
}

const handleBathDec = () => {
const sub = bathroom  ? bathroom - 1 : 0
setBathroom(sub)
}

const handleBedtInc = () => {
const add = bedroom + 1
setBedroom(add)
}

const handleBedhDec = () => {
const sub = bedroom?bedroom - 1:0
setBedroom(sub)
}
const handleSelectStatus = (e: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const target = e.target as HTMLInputElement;
    setStatus(target.value)
  };
const handleApplyFilter=async()=>{
if(admin===true){
  const data1={
    bathrooms:bathroom,
    bedrooms:bedroom,
    Date:date,
    status:status,
    country:'',
    state:'',
    page:1,
    apartmentName:'', 
    orderBy:'', 
    sortBy:'',
    priceLessThan:minPrice,
    priceGreaterThan:maxPrice,
    category:Category
   
  }
  handleGetData({data:data1})
  const response=await dispatch(Property({data:data1}))
  const fulfilled=response.payload 
  if(fulfilled.status===true){
    handleClose()
  }
  else{
    setBedroom(0)
    setBathroom(0)
    setStatus('')
    setDate('')
    handleClose()
  }
}
else{
if(value===true){
  const data1={
    bathrooms:bathroom,
    bedrooms:bedroom,
    Date:date,
    status:status,
    country:'',
    state:'',
    page:1,
    pagesize:'5',
    priceLessThan:minPrice,
    priceGreaterThan:maxPrice,
    category:Category
  }
  handleGetData({data:data1})
  
  const response=await dispatch(SellerProperties({data:data1}))
  const fulfilled=response.payload 
  if(fulfilled.status===true){
    handleClose()
  }
  else{
    setBedroom(0)
    setBathroom(0)
    setStatus('')
    setDate('')
    handleClose()
  }
}
else{
  const data={
    page:1,
    bathrooms:bathroom,
    bedrooms:bedroom,
    Date:date,
    status:status,
    name:'',
    priceLessThan:minPrice,
    priceGreaterThan:maxPrice,
    category:Category
  }
  handleGetData({data:data})
  const response=await dispatch(SalesData({data:data}))
  const fulfilled=response.payload 
  if(fulfilled.status===true){
  
    handleClose()
  }
  else{
    setBedroom(0)
    setBathroom(0)
    setStatus('')
    setDate('')
    handleClose()
  }
}
}
}
const handleReset=()=>{
  setCategory('')
  setMaxPrice('')
  setMinPrice('')
  setBedroom(0)
    setBathroom(0)
    setStatus('')
    setDate('')
}
const handleSelectCategory=(data:{id:string,txt:string})=>{
setCategory(data.id)
}
const Type = [
  { id: "1", txt: 'Residential' },
  { id: "2", txt: 'Commercial'},
 
]

return (
<Dialog open={open1} onClose={handleClose}
 sx={{
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width:{lg:"26%",xs:'90%',md:'90%'}
    },
  },
}}
>
<DialogContent className={classes.dilogcontent}>
<Grid container>
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className={classes.filtertitle}>Filters</Box>
<Box className={classes.priceRangeBox}>
<Box className={classes.priceRange}>
<Typography className={classes.priceRangeTxt}>Category</Typography>
</Box>

<Box className={classes.rangeImgBox}>
{Type.map((data)=><Button size='small' key={data.id} onClick={()=>handleSelectCategory(data)} 
className={Category===data.id?classes.typebtns1:classes.typebtns}>
  {data.txt}
</Button>)}
</Box>
<Divider className={classes.divider}/>
</Box>

<Box className={classes.priceRange}>

<Typography className={classes.priceRangeTxt}>Price Range</Typography>

<Box className={classes.rangeImgBox}>
<Box>
<Typography className={classes.priceRangeTxt1}>Min Price</Typography>
<TextField type='number' value={minPrice} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMinPrice(e.target.value)} fullWidth className={classes.inputtextFiled} placeholder='Min Price' 
InputProps={{
  classes:{
    notchedOutline: classes.notchedOutline,
    input:classes.inputtext}
}}/>
</Box>  
<Box className={classes.left_text_Filed_container}>
<Typography className={classes.priceRangeTxt1}>Max Price</Typography>
<TextField type='number'  value={maxPrice} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMaxPrice(e.target.value)} fullWidth className={classes.inputtextFiled} placeholder='Max Price'
InputProps={{
  classes:{
    notchedOutline: classes.notchedOutline,
    input:classes.inputtext
  }
}}
/>
</Box>
</Box>
</Box>
<Box className={classes.featureMainBox}>
<Typography className={classes.priceRangeTxt}>Features</Typography>
<Box className={classes.rangeImgBox}>
<Typography className={classes.feature_text}>Bedroom</Typography>
<Box className={classes.btnBox}>
<RemoveIcon className={classes.minusIcon} onClick={handleBedhDec} />
<Typography className={classes.value}>{bedroom}</Typography>
<AddCircleOutlineIcon className={classes.minusIcon} onClick={handleBedtInc} />
</Box>
</Box>
<Box className={classes.rangeImgBox}>
<Typography className={classes.feature_text}>Bathroom</Typography>
<Box className={classes.btnBox}>
<RemoveIcon className={classes.minusIcon} onClick={handleBathDec} />
<Typography className={classes.value}>{bathroom}</Typography>
<AddCircleOutlineIcon className={classes.minusIcon} onClick={handleBathtInc} />
</Box>
</Box>
</Box>
{value?

<Box className={classes.priceRange12} >
<Typography className={classes.priceRangeTxt}>Apartment Name</Typography>
<TextField value={date} className={classes.inputTextFiled_text} placeholder='Search...' InputProps={{
  classes:{
    notchedOutline:classes.notchedOutline,
    input:classes.input
  },
  startAdornment:(
   
    <Search1/>
  )
}} onChange={(e)=>setDate(e.target.value)} fullWidth/>
</Box>:
<Box className={classes.priceRange12} >
<Typography className={classes.priceRangeTxt}>Date</Typography>
<TextField className={classes.dateTextFiled} type='date' size='small' value={date} onChange={(e)=>setDate(e.target.value)} 
InputProps={{
  classes:{
    input:classes.input12,
    notchedOutline:classes.notchedOutline1
  }
}}
fullWidth/>
</Box>}
<Divider className={classes.divider}/>
<Box className={classes.priceRange12}>
<Typography className={classes.priceRangeTxt}>Status</Typography>
<FormControl>
  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    {value?
    <React.Fragment>
    <FormControlLabel value="Sold" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Sold</Typography>} />
    <FormControlLabel value="Rented" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Rented</Typography>} />
    <FormControlLabel value="Active" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Active</Typography>} />
    <FormControlLabel value="Draft" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Draft</Typography>} />
    </React.Fragment>
    :<React.Fragment>
    <FormControlLabel value="Pending" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Pending</Typography>} />
    <FormControlLabel value="Rented" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Rented</Typography>} />
    <FormControlLabel value="Sold" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Sold</Typography>} />
    <FormControlLabel value="Active" onChange={handleSelectStatus} control={<Radio />} label={<Typography className={classes.status}>Active</Typography>} />
    </React.Fragment>}
  </RadioGroup>
   
</FormControl>  

</Box>
<Box className={classes.applyBtnBox}>
<Button variant='outlined' size='small'  className={classes.resetBtn} onClick={handleReset}>Reset</Button>
<Button variant='contained' size='small' className={classes.applyBtn} onClick={handleApplyFilter}>Apply</Button>
</Box>
</Grid>
</Grid>
</DialogContent>  
</Dialog> 
)
}
export default withRouter(withStyles(Styles)(HouseData));