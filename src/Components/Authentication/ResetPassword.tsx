import { Alert, Box, Button, Divider, FormControl, Grid, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { Component, Fragment } from 'react';
import { withStyles } from '@mui/styles';
import Property from './AuthenticationRightSection'
import  Logo from '../Common/assets/images/logo1.png'
import { Styles } from './Styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { withRouter } from '../../Utils/withRouter';
import { PasswordRegex } from '../../Utils/Validate';
import { AppDispatch } from '../Redux/store/Store';
type IProps={
    isDektop:any,
    navigate:Function,
    classes:{
        [type:string]:string
    },
    dispatch:AppDispatch
}
type IState={
    value:string,
    display:boolean,
    newPassword:string,
    confirmPassword:string,
    errornewPassword:string,
    errorconfirmPassword:string,
    errorMessage:string,
    successMessage:string
}
class ResetPassword extends Component<IProps,IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            value: '',
            newPassword:'',
            confirmPassword:'',
            errornewPassword:'',
            errorconfirmPassword:'',
            display: true,
            errorMessage:'',
            successMessage:''
        }
    }
    handleChange=(e:SelectChangeEvent)=>{
        this.setState({value:e.target.value})
    }
    handleReset=async()=>{
        this.props.navigate('/login')
    }
    handlePasswordChangeFun=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    if (name === "newPassword") {
        const passwordRegex = PasswordRegex

        if (!passwordRegex.test(value)) {
            this.setState({errornewPassword: "Password must be 8 characters long and include at least one special character, one upper case and lower case letters."
            });
        } else {
            this.setState({errornewPassword: ""
            });
        }
    }
    if (name === "confirmPassword") {
        const passwordRegex = PasswordRegex

        if (!passwordRegex.test(value)) {
            this.setState({errorconfirmPassword: "Password must be 8 characters long and include at least one special character, one upper case and lower case letters."
            });
        } else {
            this.setState({errorconfirmPassword: ""
            });
        }
    }
     this.setState({[name]:value} as {})
    }
    IsFormComplete=()=>{
        const {newPassword,confirmPassword,errornewPassword,errorconfirmPassword}=this.state
        if( newPassword && confirmPassword && errornewPassword==='' && errorconfirmPassword===""){
            return true
        }
        else{
            return false
        }
    }
    render() {
        const {classes}=this.props
        return (
             <Box className={classes.register_flex}>
                <Grid container className={classes.gridcontainer}>
                    <Grid item xs={12} lg={6} md={12} order={2}>    
                    <Box className={classes.register_conatiner}> 
                    <Box className={classes.register_leftsection_text1}>
                        <Typography component={'div'}>Reset your password</Typography>
                    </Box>
                        {this.state.errorMessage ?
                            <Alert className={classes.alertmessage} sx={{ width: { lg: '50%', md: '100%', xs: '100%' } }} severity="error">{this.state.errorMessage}.</Alert> :
                            this.state.successMessage ? <Alert className={classes.alertmessage} sx={{ width: { lg: '50%', md: '100%', xs: '100%' } }} severity="success">{this.state.successMessage}.</Alert> : null
                        }
                    <Box className={classes.register_leftsection_formcontroler}>
                    <FormControl fullWidth>
                        <Typography component={'div'}>New Password</Typography>
                        <TextField placeholder='Enter Password' 
                        onChange={this.handlePasswordChangeFun}
                        name='newPassword' 
                        value={this.state.newPassword} 
                        type={this.state.display?'text':'password'} 
                        InputProps={{
                            classes: { input: classes.input},
                            endAdornment:(
                            <Fragment>
                            {this.state.display?<RemoveRedEyeIcon className={classes.register_muiicon} onClick={()=>this.setState({display:!this.state.display})}/>:
                            <VisibilityOffIcon className={classes.register_muiicon} onClick={()=>this.setState({display:!this.state.display})}/>}
                            </Fragment>
                        )}}/>
                        {this.state.errornewPassword&&<Typography className={classes.validate}>{this.state.errornewPassword}</Typography>}
                      <Box className={classes.login_forgetpassword}>
                       <Typography component={'div'} className={classes.regsiter_passwordlength}>
                        
                       </Typography>
                       <Typography component={'div'}></Typography>
                       </Box>
                       <Typography component={'div'}></Typography>
                       <Typography component={'div'}>Repeat New Password</Typography>
                       <TextField placeholder='Enter Password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handlePasswordChangeFun} type={this.state.display?'text':'password'} 
                       InputProps={{
                        classes: { input: classes.input},
                        endAdornment:(
                            <Fragment>
                            {this.state.display?<RemoveRedEyeIcon className={classes.register_muiicon} onClick={()=>this.setState({display:!this.state.display})}/>:
                            <VisibilityOffIcon className={classes.register_muiicon} onClick={()=>this.setState({display:!this.state.display})}/>}
                            </Fragment>
                        )}}/>
                         {this.state.errorconfirmPassword&&<Typography className={classes.validate}>{this.state.errorconfirmPassword}</Typography>}
                        <Button className={!this.IsFormComplete()?classes.register_signup12:classes.register_login1} onClick={this.handleReset} disabled={!this.IsFormComplete()}>Reset Password</Button>
                    </FormControl>
                    </Box>
                    </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} md={12} sx={{background:this.props.isDektop?'white':'#F4FAFF'}}>
                    <Box src={Logo} component={'img'} className={classes.register_headerlogo} onClick={()=>this.props.navigate('/')}/>
                    <Divider/>
                     {!this.props.isDektop&&<Property />}
                    </Grid>
                </Grid>
                </Box>
        );
    }
}

export default withRouter(withStyles(Styles)(ResetPassword))