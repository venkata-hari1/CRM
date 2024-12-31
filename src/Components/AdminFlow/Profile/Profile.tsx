import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header'
import ProfileInformation from './ProfileInformation'
import { Box, Button, Dialog, DialogActions, DialogContent, Grid, List, ListItem, ListItemIcon, ListItemText, Theme, Typography, useMediaQuery } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ChangePassword from './ChangePassword';
import { withRouter } from '../../../Utils/withRouter';
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';
import Locations from './Location'
import {ReactComponent as Location} from '../../Common/assets/images/Location12.svg'
import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';
// import Requests from '../../CustomerFlow/CustomerProfile/Requests';
import { Close, Star } from '@mui/icons-material';
type IProps={
    name:string
    navigate:Function
    classes:{
        [type:string]:string
    }
}

  
function Profile({classes,navigate}:IProps) {
    const[value,setValue]=useState<number>(1)
    const [progress, setProgress] = React.useState(10);
    const[open,setOpen]=useState<boolean>(false)
    useEffect(() => {
      setProgress(60)
    }, []);
    const isDeskTop=useMediaQuery((theme:Theme)=>theme.breakpoints.down('lg'))
    const sellerprofileData=[
        {id:1,primarytext:isDeskTop?'Profile':'Profile Information',secondarytext:'Change your Account information',icon:<PersonIcon className={classes.icon}/>},
        {id:2,primarytext:'Password',secondarytext:'Change Your Password',icon:<RemoveRedEyeIcon className={classes.icon}/>},
        {id:3,primarytext:'My Locations',secondarytext:'Edit Or Change Your Location',icon:<Location className={classes.icon}/>}
      ]
      const adminprofileData=[
        {id:1,primarytext:'Profile Information',secondarytext:'Change your Account information',icon:<PersonIcon className={classes.icon}/>},
        {id:2,primarytext:'Password',secondarytext:'Change Your Password',icon:<RemoveRedEyeIcon className={classes.icon}/>}
      ]
  const handleToggle = (data: { id: number }) => {
    setValue(data.id)
  }

  const role=localStorage.getItem('role')
  const ProfileData=role==='seller'?sellerprofileData:adminprofileData
  return (
    <Fragment>
        <Header name="Profile"/>
        <Box className={classes.mainbox}>
        <Grid container className={classes.flexBox}>
            <Grid item xs={12} md={12} lg={4} className={classes.profilebox}>
    
        {isDeskTop?
        <Fragment>
          {ProfileData.map((data)=>
          <Button key={data.id} size='small' className={classes.profilebtns} startIcon={data.icon} sx={{borderBottom:value===data.id?"1.5px solid rgb(7, 55, 98)":"none"}} onClick={()=>handleToggle(data)}>{data.primarytext}</Button>
        )}
        </Fragment>
        
        :<Box>
        <List className={classes.gridContaineritems}>
            {ProfileData.map((data)=>
            <ListItem key={data.id} onClick={()=>handleToggle(data)} className={classes.padding23} sx={{borderBottom:value===data.id?"1.5px solid rgb(7, 55, 98)":"none"}}>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText 
                primary={<Typography className={classes.primarytext}>{data.primarytext}</Typography>} 
                secondary={<Typography className={classes.secondarytext}>{data.secondarytext}</Typography>}/>
            </ListItem>
            )}
        </List>
        </Box>}
        {isDeskTop?
        <Dialog open={open}>
          <DialogActions>
            <Close sx={{color:'red'}} onClick={()=>setOpen(false)}/>
          </DialogActions>
          <DialogContent>
          {/* <Requests/> */}
          </DialogContent>
        </Dialog>
        :<Fragment>
        </Fragment>}
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
        
        {value===1&&<ProfileInformation/>}
        {value===2&&<ChangePassword/>}
        {value===3&&<Locations/>}
 
       
        </Grid>
        </Grid>
        </Box>
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(Profile))