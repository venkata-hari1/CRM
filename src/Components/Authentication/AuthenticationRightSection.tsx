import React, { Component } from 'react';
import Authetication from '../Common/assets/images/Authentication.png'
import { Box, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';  
type IProps={
    classes:{
        [type:string]:string
    }
}
class AuthenticationRightSection extends Component<IProps> {
    render() {
        const {classes}=this.props
        return (
            <Box className={classes.autheticationimage}>   
                <Box src={Authetication} component={'img'} className={classes.register_image1}/>
            </Box>
        );
    }
}

export default withStyles(Styles)(AuthenticationRightSection)