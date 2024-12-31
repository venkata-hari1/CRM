import React from 'react'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles'
import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, List, ListItem, ListItemIcon, ListItemText, Radio, RadioGroup, Switch, TextField, Typography } from '@mui/material'
import { withRouter } from '../../../../Utils/withRouter'
import { AppDispatch } from '../../../Redux/store/Store'
import { UsersNotification } from '../../../Redux/Reducers/LandingReducer'
import { ToastError, ToastSuccess } from '../../../../Utils/Validate'
type IProps={
    classes:{
        [type:string]:string
    },
   navigate:Function,
   dispatch:AppDispatch
}
function Notification({classes,navigate,dispatch}:IProps) {
  const handleChange=async(e:{target:{checked:boolean}})=>{
    const data={
      value:e.target.checked
    }
    const response=await dispatch(UsersNotification({data:data}))
    const fulfilled=response.payload 
    if(fulfilled.status===true){
      const message=e.target.checked?"Notifications Turned On":"Notifications Turned Off"
      ToastSuccess(message)
    }
    else{
      ToastError(fulfilled.message)
    }
  }
  return (
    <FormControl fullWidth className={classes.account}>
        <Box sx={{padding:'10px'}}>
        <List>
          <Typography className={classes.account_email} sx={{marginLeft:'1.5%'}}>General</Typography>
          <ListItem>
            <ListItemText primary={<Typography className={classes.notificationtext}>Get notifications from E-Property to stay up-to-date.</Typography>}/>
            <ListItemIcon>
              <Switch onChange={handleChange} className={classes.toggle}/>
              </ListItemIcon>
          </ListItem>
        </List>
        
        </Box>
        {/* <Divider className={classes.divider}/>
        <FormGroup className={classes.padding}>
        <Typography className={classes.account_email}>Rent Reminder</Typography>
        <FormControlLabel control={<Checkbox classes={{
            root: classes.root,
            checked: classes.checked
          }}/>} label={<Typography className={classes.notificationtext}>When your tenant’s rent due date is approaching</Typography>} />
        </FormGroup>
        <Divider className={classes.divider}/>
        <FormGroup className={classes.padding}>
        <Typography className={classes.account_email}>Payments</Typography>
        <FormControlLabel control={<Checkbox classes={{
            root: classes.root,
            checked: classes.checked
          }}/>} label={<Typography className={classes.notificationtext}>When tenant’s payments are overdue</Typography>} />
        <FormControlLabel control={<Checkbox classes={{
            root: classes.root,
            checked: classes.checked
          }}/>} label={<Typography className={classes.notificationtext}>Notification about payment status</Typography>} />
        </FormGroup>
        <Divider className={classes.divider}/>
        <Typography className={classes.account_email} sx={{marginLeft:'1.9%'}}>Email Newsletter</Typography>
        <RadioGroup className={classes.padding}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="on" control={<Radio />} label={<Typography className={classes.notificationtext}>On</Typography>}  />
        <FormControlLabel value="off" control={<Radio />} label={<Typography className={classes.notificationtext}>Off</Typography>}  />
      </RadioGroup>
      <Divider className={classes.divider}/>
      <Button className={classes.notification_btn}>Save Changes</Button> */}
    </FormControl>
  )
}
export default withRouter(withStyles(Styles)(Notification))
