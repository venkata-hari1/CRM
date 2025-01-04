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
import ChangeEmail from './ChangeEmail';
import Circular from '../Common/Circular';
import Countdown from 'react-countdown';
import { toast } from 'react-toastify';
type IProps = {
  pathname:any,
  Isdesktop:any,
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
function OtpVerification({ classes, Auth, Open,handleClose, navigate, Isdesktop, pathname }: IProps) {
  const [counter, setCounter] = useState<number>(59);
  const [otp, setOtp] = useState('');
  const [key, setKey] = useState(0);
  const [open, setOpen] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(Open)
  const[view,setView]=useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleSendOtp = (otp: string) => {
    setOtp(otp)
  };
  const hanldeOpen1 = async () => {
 
    navigate('/resetpassword')

  }
  const hanldeUpdate=()=>{
    handleClose()
  }
  const handleResend = async () => {
    setKey((prevKey) => prevKey + 1);
    setIsButtonDisabled(true);
    toast('resend otp')
   
  }
  const handleCloseChangeEmail = () => {
    setOpen(false)
  }
  const email = localStorage.getItem('email')


  useEffect(()=>{
    setIsOpen(Open);
  },[Open])
  const renderer = ({ minutes, seconds, completed }: any) => {
    if (completed) {
      setIsButtonDisabled(false); // Enable button when timer expires
      return <span>00:00</span>;
    } else {
      // Render the countdown in MM:SS format
      return (
        <span>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      );
    }
  };
  return (
    <Fragment>
      <ChangeEmail open={open} handleCloseChangeEmail={handleCloseChangeEmail} />
      <Circular open={view}/>
      <Dialog open={isOpen}>
        <Grid container sx={{ padding: '10px' }}>
          <Grid item xs={8} md={8} lg={8}>
          <Box className={classes.otpverfication_headertext}>{pathname==='/admin/settings'?'Update your Email':'Verify your Email'}</Box>
           
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
          <Box className={classes.otpverfication_middletext2}>Enter code received on your {pathname==='/admin/settings'?"updated":"registered"} Email</Box>
          <Box className={classes.otpverfication_inputboxs}>
            <OtpInput
              value={otp}
              onChange={handleSendOtp}
              numInputs={4}
              renderSeparator={<span style={{ width: '15px' }}></span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width:"38px",
                height:"38px",
                border: '1px solid #9FC5E9',
                borderRadius:"8px"
              }}
            />
            <Box className={classes.otpverfication_resendotp}>
            <Button onClick={handleResend} disabled={isButtonDisabled}>Resend code</Button>
              <Box><Countdown key={key} date={Date.now() +  10 * 60 * 1000} renderer={renderer} /></Box>
             </Box>
            {pathname==='/admin/settings'?<Button className={classes.otpverfication_verfiybtn} onClick={hanldeUpdate}>Update</Button>:
            <Button className={classes.otpverfication_verfiybtn} onClick={hanldeOpen1}>Verfiy</Button>}
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
}
const MapToProps = (state: RootState) => ({
  Auth: ''
})
const ConnectedToOtpVerification = connect(MapToProps)(OtpVerification)
export default withRouter(withStyles(Styles)(ConnectedToOtpVerification))

