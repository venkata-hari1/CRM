import React, { Fragment, useState } from 'react';
import { Alert, Box, Button, Divider, FormControl, Grid, TextField,Typography} from '@mui/material';
import Logo from '../Common/assets/images/logo1.png';
import { Styles } from './Styles';
import { withStyles } from '@mui/styles';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Property from './AuthenticationRightSection';
import { withRouter } from '../../Utils/withRouter';
import { AppDispatch } from '../Redux/store/Store';
import Circular from '../Common/Circular';
import { EmailRegex, PasswordRegex, PhoneRegex, checkPhoneRegx } from '../../Utils/Validate';
type IProps = {
  lsdesktop:any,
    navigate: Function,
    classes: {
        [type: string]: string
    },
    dispatch: AppDispatch
}
type IState = {
    email_mobile: string,
    password: string,
}

const Login = ({ navigate, classes,lsdesktop }: IProps) => {
    const [display, setDisplay] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [successMessage, setSuccessMessage] = useState<string>('')
    const[view,setView]=useState(false)
    const [auth, setAuth] = useState<IState>({
        email_mobile: '',
        password: ''
    })
    const [error, setError] = useState<IState>({
        email_mobile: '',
        password: '',
    })
 


    

    const handleLogin = async () => {
      setView(true)
      navigate('/admin/clients') 
    };
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if (name === "email_mobile") {
        if (value.match(checkPhoneRegx)) {
          if (value.length >= 9 && !PhoneRegex.test(value)) {
            setError((prev) => ({
              ...prev,
              email_mobile: "Invalid Phone Number",
            }));
          } else {
            setError((prev) => ({ ...prev, email_mobile: "" }));
          }
        } else {
         if(value !== ""){
          const emailLowerCase = value.toLowerCase();
          if (!EmailRegex.test(String(emailLowerCase))) {
            setError((prev) => ({ ...prev, email_mobile: "Invalid Email" }));
          } else {
            setError((prev) => ({ ...prev, email_mobile: "" }));
          }}
          else{
            setError((prev) => ({ ...prev, email_mobile: "" }));
          }
        }
      }
      if (name === "password") {
        const passwordRegex = PasswordRegex;

        if (!passwordRegex.test(value)) {
          setError((prevError) => ({
            ...prevError,
            password:
              "Password must be 8 characters long and include at least one special character, one upper case and lower case letters.",
          }));
        } else {
          setError((prevError) => ({ ...prevError, password: "" }));
        }
      }
      setAuth((prev) => ({ ...prev, [name]: value }));
    };
    const IsFormComplete = () => {
        const { email_mobile, password } = auth
        if (password && email_mobile && error.password === '' && error.email_mobile === "") {
            return true
        }
        else {
            return false
        }
    }

    const onKeyDownHandler = (event:{keyCode:number}) => {
        if (IsFormComplete() && event.keyCode === 13) {
            handleLogin()
        }
      }
    return (
        <Fragment>
            <Circular open={view}/>
            {lsdesktop&&
            <Fragment>
              <Box src={Logo} component={'img'} sx={{marginLeft:'20px !important',marginTop:'15px !important'}} className={classes.register_headerlogo} onClick={() => navigate('/')} />
              <Divider />
            </Fragment>
            }
            <Box className={classes.register_flex}>
                <Grid container className={classes.gridcontainer}>
                    <Grid item xs={12} lg={6} md={12} order={2} >
                        <Box sx={{height:lsdesktop?'70vh':'90vh'}} className={classes.register_conatiner}>
                            <Box className={classes.register_leftsection_text1}>
                                <Typography component={'div'}>Welcome to back</Typography>

                                {errorMessage ?
                                    <Alert className={classes.alertmessage} sx={{ width: { lg: '84%', md: '100%', xs: '100%' } }} severity="error">{errorMessage}.</Alert> :
                                    successMessage ? <Alert className={classes.alertmessage} sx={{ width: { lg: '84%', md: '100%', xs: '100%' } }} severity="success">{successMessage}.</Alert> :
                                        <Typography component={'div'}>Welcome back! Please enter your details.</Typography>}
                            </Box>
                            <Box className={classes.register_leftsection_formcontroler}>
                                <FormControl fullWidth  onKeyDown={onKeyDownHandler}>
                                    <Typography component={'div'} className={classes.registerLabel}>Phone or Email</Typography>
                                    <TextField name='email_mobile' value={auth.email_mobile} onChange={handleLoginChange} placeholder='Phone or Email' InputProps={{
                                        classes: { input: classes.input },
                                        className:classes.inputFields
                                    }}                      
                                    />
                                    {error.email_mobile.length !==0 && <Typography className={classes.validate}>{error.email_mobile}</Typography>}
                                    <Typography component={'div'} className={classes.registerLabel}>Password</Typography>
                                    <TextField name='password' value={auth.password} onChange={handleLoginChange} placeholder='Enter Password' type={display ? 'password' : 'text'}
                                        InputProps={{
                                            classes: { input: classes.input },
                                            className:classes.inputFields,
                                            endAdornment: (
                                                <React.Fragment>
                                                    {display ?
                                                        (
                                                            <VisibilityOutlinedIcon className={classes.register_muiicon} onClick={() => setDisplay(!display)} />
                                                        ) : (
                                                            <VisibilityOffOutlinedIcon className={classes.register_muiicon} onClick={() => setDisplay(!display)} />
                                                        )}
                                                </React.Fragment>
                                            )
                                        }} />
                                    {error.password && <Typography className={classes.validate}>{error.password}</Typography>}
                                    <Box className={classes.login_forgetpassword}>
                                        <Typography component={'div'} className={classes.regsiter_passwordlength}>
                                        </Typography>
                                        <Typography component={'div'} onClick={() => navigate('/forgotpassword')}>Forgot Password ?</Typography>
                                    </Box>
                                    <Button className={!IsFormComplete() ? classes.register_signup12 : classes.register_signup} onClick={handleLogin} disabled={!IsFormComplete()} >Log In</Button>
                                    {/* <Box className={classes.register_logintext}>Don’t have an account? 
                                        <Link to='/register' className={classes.register_link}>Sign up for free
                                        </Link></Box> */}
                                </FormControl>
                            </Box>
                        </Box>
                    </Grid>
                    {!lsdesktop&&<Grid item xs={12} lg={6} md={12} sx={{ background: '#F4FAFF' }}>
                    <Box src={Logo} component={'img'} className={classes.register_headerlogo} onClick={() => navigate('/')} />
                    <Divider />
                        <Property />
                    </Grid>}
                </Grid>
            </Box>
        </Fragment>
    );
};

export default withRouter(withStyles(Styles)(Login))
