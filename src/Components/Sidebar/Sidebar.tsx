import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { withRouter } from '../../Utils/withRouter'
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';
import SettingsIcon from '@mui/icons-material/Settings';
import {LogOut} from '../Common/assets/index'
import Logo from '../Common/assets/images/logo1.png';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { AdminId } from '../Redux/Reducers/LandingReducer';
import { AppDispatch } from '../Redux/store/Store';
import Circular from '../Common/Circular';
import { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logout from '../Common/Logout';
import { Business } from '@mui/icons-material';

type IProps={
  mobilesidebar:boolean
  selector:{
    LandingReducer:{
      AdminId:number
    }
  }
  handleDrawerToggle:()=>void
  navigate:Function,
  dispatch:AppDispatch
  classes:{
    [type:string]:string
  }
}
interface IData {
  id:string,
  txt:string,
  route:string,
  icon:JSX.Element ,
  locationRoute?:string
}
function AdminSidebar({mobilesidebar,handleDrawerToggle,navigate,classes,selector,dispatch}:IProps) {
  const location=useLocation()
  const[view,setView]=useState(false)
  const[open,setOpen]=useState(false)
  const handleClick=(data:{id:string,route:string})=>{
    const id=data.id
    if(id){
    localStorage.setItem('AdminSellerIds',data.id)
    }
    dispatch(AdminId(data.id))
    setView(true)
    setTimeout(()=>{
      setView(false)
      if(mobilesidebar){
       navigate(`/admin/${data.route}`)
       handleDrawerToggle()
      }
      else{
      navigate(data.route)
      }
    },500)

  }
const handleLogout=()=>{
 setOpen(true)
}
const handleCancel=()=>{
  setOpen(false)
}
 const Id=localStorage.getItem('AdminSellerIds')
 const AdminDrawer=[
  {id:"1",txt:'Dashboard',route:'dashboard',icon:<CameraOutdoorIcon style={{color: location.pathname === "/admin/dashboard" ? 'white' : '#737787'}}/>,locationRoute:"/admin/dashboard"},
  {id:"2",txt:'Businees Info',route:'businees_info',icon:<Business style={{color: location.pathname === "/admin/businees_info" ? 'white' : '#737787'}}/>,locationRoute:"/admin/businees_info"},
  {id:"3",txt:'Clients',route:'clients',icon:<ExploreOutlinedIcon style={{color:location.pathname  === "/admin/clients" ? 'white' : '#737787'}}/>,locationRoute:"/admin/clients"},
  {id:"4",txt:'Settings',route:'settings',icon:<SettingsIcon style={{color:location.pathname==="/admin/settings" ? 'white' : '#737787'}} />,locationRoute:"/admin/settings"},
  {id:"5",txt:'Updates',route:'updates',icon:<HelpOutlineOutlinedIcon style={{color:location.pathname=== "/admin/updates" ? 'white' : '#737787'}} /> ,locationRoute:"/admin/updates"}
  ]

  const role=localStorage.getItem('role')
  const Drawer=AdminDrawer
  return (
    <Fragment>
    <Circular open={view}/>
        <Logout open={open} handleCancel={handleCancel} name='logoutbtn'/>
    <Box className={classes.boxstyles} >
      <Box className={classes.header_logo}>
      <Box src={Logo} component={'img'} sx={{width:'100px',marginLeft:'20px !important',marginTop:'15px !important'}} />
      <Divider />
      </Box>
    <Box className={classes.mainlistitems}> 
    <List>
      {Drawer.map((data:IData)=>
      <ListItem key={data.id} sx={{cursor:'pointer'}} className={data?.locationRoute===location.pathname?classes.mainlistitems1:classes.mainlistitems} onClick={()=>handleClick(data)}>
        <ListItemIcon>{data.icon}</ListItemIcon>
        <ListItemText primary={<Typography className={data?.locationRoute===location.pathname?classes.sidebartext1:classes.sidebartext}>{data.txt}</Typography>}/>
      </ListItem>
      )}
    </List>
     <Button className={classes.logout} onClick={handleLogout}><Box src={LogOut} component={'img'} style={{marginRight:'8px'}}/>Logout</Button>
    </Box>
    </Box>
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(AdminSidebar))
