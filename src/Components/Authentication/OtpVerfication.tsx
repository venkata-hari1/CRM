import React, { Fragment, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';
import { Alert, Box, Button, Divider, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { withRouter } from '../../Utils/withRouter';
import { AppDispatch, RootState } from '../Redux/store/Store';
import { connect } from 'react-redux';
import { JSX } from 'react/jsx-runtime';
import { Otp_Verification, Send_Otp, Send_UpdateEmail_Otp, UpdateEmail_Verify } from '../Redux/Reducers/Authentication';
import ChangeEmail from './ChangeEmail';
import Circular from '../Common/Circular';
import { toast } from 'react-toastify';
type IProps = {
  Auth: string
  navigate: Function
  value: string
  classes: {
    [type: string]: string
  },
  Open: boolean,
  handleClose: () => void,
  dispatch: AppDispatch
}
function OtpVerification({ classes, Auth, Open, value, handleClose, navigate, dispatch }: IProps) {
  const [counter, setCounter] = useState<number>(59);
  const [otp, setOtp] = useState('');

  const [open, setOpen] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(Open)
  const[view,setView]=useState<boolean>(false)
  const handleSendOtp = (otp: string) => {
    setOtp(otp)
  };
  const hanldeOpen1 = async () => {
 
    navigate('/resetpassword')

  }
  const handleResend = async () => {
    toast('resend otp')
   
  }
  const handleCloseChangeEmail = () => {
    setOpen(false)
  }
  const email = localStorage.getItem('email')


  useEffect(()=>{
    setIsOpen(Open);
  },[Open])

  return (
    <Fragment>
      <ChangeEmail open={open} handleCloseChangeEmail={handleCloseChangeEmail} />
      <Circular open={view}/>
      <Dialog open={isOpen}>
        <Grid container sx={{ padding: '3%' }}>
          <Grid item xs={8} md={8} lg={8}>
          <Box className={classes.otpverfication_headertext}>Verify your Email</Box>
           
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <CloseIcon onClick={handleClose} className={classes.otpverfication_closeicon} />
          </Grid>
        </Grid>
        <Divider />
        <Box className={classes.otpverfication_otpcontainer}>
          <Box sx={{ marginTop: '4%' }}>
            <Box className={classes.otpverfication_middletext}>We have sent a code to your Email</Box>
            <Box className={classes.otpverfication_middletext1}>
            <Typography>{email}</Typography>
            <Typography color="blue" ml={"2px"} fontSize={"14px"} component={"div"} onClick={handleClose}> Change Email</Typography>
            </Box>
          </Box>
          <Box className={classes.otpverfication_middletext2}>Enter code received on your {Auth === "updateemail"?"updated":"registered"} Email</Box>
          <Box className={classes.otpverfication_inputboxs}>
            <OtpInput
              value={otp}
              onChange={handleSendOtp}
              numInputs={6}
              renderSeparator={<span style={{ width: '20px' }}></span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "50px",
                height: '50px',
                border: '1px solid #9FC5E9',
                borderRadius:"8px"
              }}
            />
            <Box className={classes.otpverfication_resendotp}>Don’t receive the verification code?<Typography component={'span'} onClick={handleResend}>Resend code</Typography></Box>
            <Button className={classes.otpverfication_verfiybtn} onClick={hanldeOpen1}>Verfiy</Button>
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
}
const MapToProps = (state: RootState) => ({
  Auth: state.LandingReducer.auth
})
const ConnectedToOtpVerification = connect(MapToProps)(OtpVerification)
export default withRouter(withStyles(Styles)(ConnectedToOtpVerification))

