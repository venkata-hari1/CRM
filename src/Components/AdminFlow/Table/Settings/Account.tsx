import React, { Fragment, useState } from 'react'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles'
import { withRouter } from '../../../../Utils/withRouter'
import { Alert, AlertTitle, Box, Button, CircularProgress, Dialog, DialogActions, DialogTitle, Divider, FormControl, FormControlLabel, Grid, List, ListItem, ListItemIcon, ListItemText, Radio, RadioGroup, Switch, TextField, Typography } from '@mui/material'
import ChagingMode from './ChagingMode'
import OtpVerfication from '../../../Authentication/OtpVerfication'
import { EmailRegex } from '../../../../Utils/Validate'
import { getAuth } from '../../../Redux/Reducers/LandingReducer'
import { AppDispatch } from '../../../Redux/store/Store'
import { DeleteAccount, Send_UpdateEmail_Otp } from '../../../Redux/Reducers/Authentication'
import { toast } from 'react-toastify'
type IProps={
    name:string
    classes:{
        [type:string]:string
    },
    navigate:Function
    dispatch:AppDispatch
}
function Account({classes,name,navigate,dispatch}:IProps) {
    const[display,setDisplay]=useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false);
    const[view,setView]=useState<boolean>(false)
    const[email,setEmail]=useState<string>('')
    const[progressbar,setProgressbar]=useState<boolean>(false)
    const[errorEmail,setErrorEmail]=useState<string>('')
    const [errorMessage,setErrorMessage]=useState<string>('')
    const radioFun=(e:React.ChangeEvent<HTMLInputElement>)=>{
      const value=e.target.value
     const role= localStorage.getItem('role')
      if(value==="seller" && role==="customer"){
        setDisplay(true)
        setTimeout(()=>{
            localStorage.setItem('AdminSellerIds',"2")
            localStorage.setItem('role','seller')
                navigate('/seller/property') 
        },2000)
      }
      if(value==="customer" && role==="seller"){
        setDisplay(true)
        setTimeout(()=>{
            const role=localStorage.getItem('role')
            localStorage.setItem('lookingupid',"1")
            localStorage.setItem('role','customer')
            navigate('/dashboard/rent')
          
        },2000)
      }
    }
    const handleUpdate=async()=>{
        setProgressbar(true)
        const data={
            email:email
        }
        const response=await dispatch(Send_UpdateEmail_Otp({data: data}))
        const fulfilled=response.payload 
        if(fulfilled.status===true){
        setProgressbar(false)
        setErrorMessage('')
        localStorage.setItem('email',email)
        dispatch(getAuth('updateemail'));
        setOpen(true);
        }
        else if(fulfilled.status===false){
            setProgressbar(false)
             setErrorMessage(fulfilled.message)
        }
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete=async()=>{
          
         const response=await dispatch(DeleteAccount())
         const fulfilled=response.payload 
         if(fulfilled.status===true){
            toast.success("Account Deleted", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            localStorage.clear()
            navigate('/')
            setTimeout(()=>{
                window.location.reload()
            },500)
           
         }
        }
    const handleOtpSendFunChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setErrorMessage('')
        const {value,name}=e.target
        if(name==='email'){
            const emailregex=EmailRegex
            if(!emailregex.test(value)){
                setErrorEmail('Invalid Email')
            }
            else{
                setErrorEmail('')
            }
        }
        setEmail(value)
      } 
    const CustomerText={id:1,primarytxt:'Delete Account',secondarytxt:'Delete your account and all the data'}
    
    const role=localStorage.getItem('role')
    return (
    <Fragment>
        <Dialog open={view}>
            <DialogTitle>
            <Alert severity="warning">
  <AlertTitle>Warning: This is permanent</AlertTitle>
  When you delete your account, all of your data will be erased.
</Alert>
</DialogTitle>
            <DialogActions>
                <Button variant='contained' color='error'  className={classes.btn} size='small' onClick={handleDelete}>Yes</Button>
                <Button variant='contained' color='primary' className={classes.btn} size='small' onClick={()=>setView(false)}>No</Button>
            </DialogActions>
        </Dialog>
        {progressbar&&<CircularProgress className={classes.progressbar}/>}
        <OtpVerfication Open={open} handleClose={handleClose} value="Account"/>
         {display&&<Box className={classes.changemode}>
         <ChagingMode/>
         <Typography className={classes.change}>Changing To {role==="seller"?"Customer":"Seller"} Mode</Typography>
         </Box>}
    <FormControl fullWidth className={classes.account}>
        <Box sx={{padding:'10px'}} marginX={1}>
        {errorMessage?<Alert className={classes.alertmessage} sx={{width:{lg:'84%',md:'100%',xs:'100%'}}} severity="error">{errorMessage}.</Alert>:
                            null}
        <Typography className={classes.account_email}>Email</Typography>
        <TextField placeholder='Enter Your Email' name='email' value={email} onChange={handleOtpSendFunChange} className={classes.TextField} InputProps={{
            classes:{input:classes.input,notchedOutline:classes.notchedOutline},
            endAdornment:(<Button className={classes.verify} onClick={handleUpdate}>Update</Button>)
        }}/>
         {errorEmail&&<Typography className={classes.validate}>{errorEmail}</Typography>}
        </Box>
        {name==="admin"?null:<Divider className={classes.divider}/>}
        {name==="admin"?null:<List>
            <ListItem>
                <ListItemText 
                primary={<Typography className={classes.deletetext}>{CustomerText.primarytxt}</Typography>}
                secondary={<Typography className={classes.deletetext1}>{CustomerText.secondarytxt}</Typography>}
                />
                <ListItemIcon>
                    {name==="admin"?<Switch/>:<Button className={classes.deleteAccount} onClick={()=>setView(true)}>Delete Account</Button>}
                </ListItemIcon>
            </ListItem>
        </List>}
        {name==="admin"?null:<Divider className={classes.divider}/>}
        {name==="admin"?null:
        <Grid container spacing={1} className={classes.accountgridbox}>
            <Grid item xs={6} lg={6} md={6}>
                <Box className={classes.accounttext}>
                    <Typography component={'span'}>Account Type</Typography>
                    <Typography component={'span'}>You can update your account type</Typography>
                </Box>
            </Grid>
            <Grid item xs={6} lg={6} md={6}>
                <FormControl>
                    <RadioGroup defaultValue={role}>
                        <FormControlLabel label={
                        <Box className={classes.accounttext1}>
                            <Typography component={'span'}>Customer Mode</Typography>
                            <Typography component={'span'}>Start as a 'Customer' for easy browsing. Explore listings tailored to you.</Typography>
                        </Box>} value="customer" control={<Radio className={classes.radio} onChange={radioFun}/>}/>
                        <FormControlLabel label={
                        <Box className={classes.accounttext1}>
                            <Typography component={'span'}>Seller Mode</Typography>
                            <Typography component={'span'}>Choose 'Seller' to reach more buyers. Sell your property efficiently with us.</Typography>
                        </Box>
                        } value="seller" control={<Radio className={classes.radio} onChange={radioFun}/>}/>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
        }
    </FormControl>
    </Fragment>
  )
}
export default withRouter(withStyles(Styles)(Account))
