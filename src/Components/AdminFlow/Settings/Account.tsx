import React, { Fragment, useState } from 'react'
import { withStyles } from '@mui/styles'
import { Styles } from './SettingStyles'
import { withRouter } from '../../../Utils/withRouter'
import { Alert, Box, Button,FormControl,TextField, Typography ,Grid} from '@mui/material'
import OtpVerfication from '../../Authentication/OtpVerfication'
import { EmailRegex } from '../../../Utils/Validate'
import { AppDispatch } from '../../Redux/store/Store'
import Profile_SideImage from '../../Common/assets/images/123.png'
type IProps = {
    location:any,
    name: string
    classes: {
        [type: string]: string
    },
    navigate: Function
    dispatch: AppDispatch
}
function Account({ classes,location }: IProps) {
    const [open, setOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
 
    const handleUpdate = async () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOtpSendFunChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage('')
        const { value, name } = e.target
        if (name === 'email') {
            const emailregex = EmailRegex
            if (!emailregex.test(value)) {
                setErrorEmail('Invalid Email')
            }
            else {
                setErrorEmail('')
            }
        }
        setEmail(value)
    }
    return (
        <Fragment>
            <OtpVerfication pathname={location.pathname} Open={open} handleClose={handleClose} value="Account" />
          <Grid container>
            <Grid item xs={12} md={12} lg={6}>
            <FormControl fullWidth className={classes.account}>
                <Box sx={{ padding: '10px' }} marginX={1}>
                    {errorMessage ? <Alert className={classes.alertmessage} sx={{ width: { lg: '84%', md: '100%', xs: '100%' } }} severity="error">{errorMessage}.</Alert> :
                        null}
                    <Typography className={classes.account_email}>Email</Typography>
                    <TextField placeholder='Enter Your Email' name='email' value={email} onChange={handleOtpSendFunChange} className={classes.TextField} InputProps={{
                        classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                        endAdornment: (<Button className={classes.verify} onClick={handleUpdate}>Update</Button>)
                    }} />
                    {errorEmail && <Typography className={classes.validate}>{errorEmail}</Typography>}
                </Box>
               
            </FormControl>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
                <Box className={classes.imagecontainer}>
                <Box src={Profile_SideImage} component={'img'} className={classes.profile_sideimage}/>
                </Box>
            </Grid>
            </Grid>
        </Fragment>
    )
}
export default withRouter(withStyles(Styles)(Account))
