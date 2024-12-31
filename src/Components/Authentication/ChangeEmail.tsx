import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';
import { Alert, Box, Button, Divider, FormControl, Grid, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { withRouter } from '../../Utils/withRouter';
import { AppDispatch, RootState } from '../Redux/store/Store';
type IProps = {
    navigate: Function
    classes: {
        [type: string]: string
    },
    open: boolean,
    handleCloseChangeEmail: () => void,
    dispatch: AppDispatch
}
function ChangeEmail({ classes,open,handleCloseChangeEmail, navigate, dispatch }: IProps) {

    return (
        <Dialog open={open} fullWidth maxWidth={'sm'}>
            <Grid container sx={{ padding: '10px' }}>
                <Grid item xs={8} md={8} lg={8}>
                    <Box className={classes.otpverfication_headertext} sx={{fontSize:'140% !important'}}>Enter and Verify Your New Email</Box>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <CloseIcon onClick={handleCloseChangeEmail} className={classes.otpverfication_closeicon} />
                </Grid>
            </Grid>
            <Divider />
            <Box className={classes.register_leftsection_formcontroler} sx={{marginTop:'1.5%',marginLeft:'2% !important',width:'95% !important'}}>
                <FormControl fullWidth >
                    <Typography component={'div'}>Enter Your New Email</Typography>
                    <TextField name='email' placeholder='Enter New Email' InputProps={{
                        classes: { input: classes.input }
                    }}
                    />
                </FormControl>
                <Button className={classes.otpverfication_verfiybtn}>Verfiy</Button>
            </Box>

        </Dialog>
    );
}

export default withRouter(withStyles(Styles)(ChangeEmail))

