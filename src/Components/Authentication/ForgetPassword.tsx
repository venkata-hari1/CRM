import React, { Fragment, useState } from 'react';
import { Alert, Box, Button, Divider, FormControl, Grid, TextField, Typography } from '@mui/material';
import Logo from '../Common/assets/images/logo1.png';
import OTPVerfication from './OtpVerfication';
import Property from './AuthenticationRightSection';
import { Styles } from './Styles';
import { withStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { withRouter } from '../../Utils/withRouter';
import { EmailRegex } from '../../Utils/Validate';
import Circular from '../Common/Circular';
import { AppDispatch } from '../Redux/store/Store';
type IProps={
    isDektop:any,
    dispatch:AppDispatch,
    navigate:Function,
    classes:{
        [type:string]:string
    }
}
const ForgetPassword = ({ navigate, classes,dispatch,isDektop }:IProps) => {
    const [value, setValue] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const[view,setView]=useState<boolean>(false)
    const[email,setEmail]=useState<string>('')
    const[errorEmail,setErrorEmail]=useState<string>('')
    const [errorMessage,setErrorMessage]=useState<string>('')
    const Auth = useSelector((state:{LandingReducer:{auth:string}}) => state.LandingReducer.auth);


  const handleOtpSendFunChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
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

    const handleSendOtp = async() => {
        setView(false)
        setOpen(true);
    
    };

    const handleClose = () => {
        setOpen(false);
    };
    const IsFormComplete=()=>{
        if(errorEmail==="" && email){
            return true
        }
        else{
            return false
        }
    }
    return (
        <Fragment>
             <Circular open={view}/>
            <OTPVerfication Open={open} handleClose={handleClose} />
        <Box className={classes.register_flex}>
            <Grid container className={classes.gridcontainer}>
                <Grid item xs={12} lg={6} md={12} order={2}>
                    <Box className={classes.register_conatiner}>
                        <Box className={classes.register_leftsection_text2}>
                            <Typography component={'div'}>Forgot Password</Typography>
                            {errorMessage?<Alert className={classes.alertmessage} sx={{width:{lg:'84%',md:'100%',xs:'100%'}}} severity="error">{errorMessage}.</Alert>:
                            <Typography component={'div'}>Enter the registered Email</Typography>}
                        </Box>
                        <Box className={classes.register_leftsection_formcontroler}>
                            <FormControl fullWidth>
                                <Typography component={'div'}>Email</Typography>
                                <TextField placeholder='Enter Registered Email' sx={{background:'#F4FAFF'}} name='email' value={email} onChange={handleOtpSendFunChange} InputProps={{
                                    classes:{
                                        input:classes.input,
                                        notchedOutline:classes.notchedOutline
                                    },

                                    // className:classes.inputFields
                                }} />
                                {errorEmail&&<Typography className={classes.validate}>{errorEmail}</Typography>}
                                <Button className={!IsFormComplete()?classes.register_signup12:classes.register_login} disabled={!IsFormComplete()} onClick={handleSendOtp}>Send OTP</Button>
                            </FormControl>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6} md={12} sx={{ background: isDektop?'white':'#F4FAFF' }}>
                <Box src={Logo} component={'img'} className={classes.register_headerlogo} onClick={() => navigate('/')} />
                <Divider /> 
                    {!isDektop&&<Property />}
                </Grid>
            </Grid>
        </Box>
        </Fragment>
    );
};

export default withRouter(withStyles(Styles)(ForgetPassword))
