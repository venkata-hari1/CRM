import { Box, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { withRouter } from '../../Utils/withRouter'
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';
import SettingsIcon from '@mui/icons-material/Settings';
import {LogOut} from '../Common/assets/index'
import { ReactComponent as HeaderLogo } from '../Common/assets/images/headerlogo.svg';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { AdminId } from '../Redux/Reducers/LandingReducer';
import { AppDispatch } from '../Redux/store/Store';
import Circular from '../Common/Circular';
import { Fragment, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const handleClick=(data:{id:string,route:string})=>{
    const id=data.id
    if(id){
    localStorage.setItem('AdminSellerIds',data.id)
    }
    dispatch(AdminId(data.id))
    setView(true)
    const role=localStorage.getItem('role')
    setTimeout(()=>{
      setView(false)
      if(mobilesidebar){
       const Route=role==="seller"?`/seller/${data.route}`:`/admin/${data.route}`
       navigate(Route)
       handleDrawerToggle()
      }
      else{
      navigate(data.route)
      }
    },500)

  }
const handleLogout=()=>{
  localStorage.clear()
  setTimeout(()=>{
    window.location.reload()
  },300)
}
 const Id=localStorage.getItem('AdminSellerIds')
 const AdminDrawer=[
  {id:"1",txt:'Dashboard',route:'dashboard',icon:<HomeOutlinedIcon style={{color: location.pathname === "/admin/dashboard" ? 'white' : '#737787'}}/>,locationRoute:"/admin/dashboard"},
  {id:"2",txt:'Clients',route:'properties',icon:<ExploreOutlinedIcon style={{color:location.pathname  === "/admin/properties" ? 'white' : '#737787'}}/>,locationRoute:"/admin/properties"},
  {id:"3",txt:'Profile',route:'profile',icon:<AccountCircleOutlinedIcon style={{color:location.pathname==="/admin/profile" ? 'white' : '#737787'}}/>,locationRoute:"/admin/profile"},
  {id:"4",txt:'Settings',route:'settings',icon:<SettingsIcon style={{color:location.pathname==="/admin/settings" ? 'white' : '#737787'}} />,locationRoute:"/admin/settings"},
  {id:"5",txt:'Updates',route:'privacypolicy',icon:<HelpOutlineOutlinedIcon style={{color:location.pathname=== "/admin/privacypolicy" ? 'white' : '#737787'}} /> ,locationRoute:"/admin/privacypolicy"}
  ]

  const role=localStorage.getItem('role')
  const Drawer=AdminDrawer
  return (
    <Fragment>
    <Circular open={view}/>
    <Box className={classes.boxstyles} sx={{cursor:'pointer', width:mobilesidebar?'60% !important':'15.5% !important',}}>
      <Box className={classes.header_logo}>
      <HeaderLogo className={classes.header_image}/>
      <Divider />
      </Box>
    <Box className={classes.mainlistitems}> 
    <List>
      {Drawer.map((data:IData)=>
      <ListItem key={data.id} sx={{overflowX:'hidden',marginTop:data.id==="9"&& role !== "seller" ?"10%":"0px"}} className={data?.locationRoute===location.pathname?classes.mainlistitems1:classes.mainlistitems} onClick={()=>handleClick(data)}>
        <ListItemIcon>{data.icon}</ListItemIcon>
        <ListItemText primary={<Typography className={data?.locationRoute===location.pathname?classes.sidebartext1:classes.sidebartext}>{data.txt}</Typography>}/>
      </ListItem>
      )}
    </List>
    {mobilesidebar&& <Button className={classes.logout} onClick={handleLogout}><Box src={LogOut} component={'img'} style={{marginRight:'8px'}}/>Logout</Button>}
    </Box>
    </Box>
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(AdminSidebar))
