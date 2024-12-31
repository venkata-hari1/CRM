import React, { Fragment, useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import { Styles } from '../Common/Header/Styles';
import { Box, Button, Drawer, Grid, List, ListItem, Theme, Typography, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { withRouter } from '../../Utils/withRouter';
import { getId } from '../Redux/Reducers/LandingReducer';
import { AppDispatch, store } from '../Redux/store/Store';
import Logout from '../Common/Logout';
import {ReactComponent as Notifications123} from '../Common/assets/images/Notifications123.svg'
import {ReactComponent as Logout1} from '../Common/assets/images/logout1.svg'
import { User } from '../Redux/Reducers/Settings';
import {ReactComponent as Bar} from '../Common/assets/images/sidebar.svg'
import Sidebar from '../Sidebar/Sidebar';
import { onMessage } from 'firebase/messaging';
import { ToastSuccess } from '../../Utils/Validate';
type IProps = {
    lsdesktop:any,
    name:string,
    sell:boolean,
    navigate:Function,
    classes: {
        [type: string]: string
    },
    value: boolean | number
    handlegetId:(id:number)=>void
    dispatch:AppDispatch
    window:()=>Window
}
function Header({name,navigate,classes,value,window,dispatch,lsdesktop}:IProps) {
    const [id,setId]=useState(1)
    const[value1,setValue1]=useState(false)
    const[display,setDisplay]=useState(false)
    const[open,setOpen]=useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
   const handleNavBar = (data:{id: number,route?:string}) => {
        if(value!==true){
        navigate(`/dashboard/${data.route}`)
        }
        localStorage.setItem('condition',"1")
       dispatch(getId(data.id))
       setId(data.id)
      

    }
   useEffect(()=>{
    dispatch(User())
   },[])
 
 
    const handleLogout=()=>{
    setOpen(true)
    }
    const handleCancel=()=>{
        setOpen(false)
    }
    const handleSwitchBuyer=()=>{
      navigate('/dashboard/rent')
      localStorage.setItem('role','customer')
      localStorage.setItem('lookingupid',"1")
    }
   
    const handlebtns=()=>{
        setValue1(!value1)
        setDisplay(false)
    }
    const handlebtns1=()=>{
        setDisplay(prev => !prev)
        setValue1(false)
    }
        const user=store.getState().CustomerReducer.user
        const role=localStorage.getItem('role')
        const token=localStorage.getItem('token')
        const container =window !== undefined ? () => window().document.body : undefined;
     


        return (
            <Fragment>
                {lsdesktop&&<nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
         <Sidebar mobilesidebar={true} handleDrawerToggle={handleDrawerToggle}/>
        </Drawer>
      </nav>}
            <Box className={classes.headerContainer}>
                <Logout open={open} handleCancel={handleCancel}/>
                <Grid container spacing={1} className={classes.gridContainer1}>
                   <Grid item lg={role==="seller"?5.5:6} xs={lsdesktop?8:6} md={lsdesktop?8:6}>                 
                        <Box className={classes.headerTitle}>{name}</Box>
                    </Grid>
                    {role==="seller"&&
                    <Fragment>
                {lsdesktop?"":<Grid item lg={3} xs={4} md={3} >
                   <Box className={role==="seller"?classes.btnsheader1:classes.btnsheader} sx={{float:'right'}}>
                    <Button size='small' onClick={handleSwitchBuyer}>Buyer</Button>
                    <Button size='small' className={classes.sellerBtnText}>Seller</Button>
                    </Box>
                   </Grid>}
                   </Fragment>
                   }
                    <Grid item lg={6} xs={lsdesktop?4:5} md={lsdesktop?4:5}>
                        <Box className={classes.leftbixsection} sx={{width:{lg:'70%',xs:'100%',md:'100%'}}}>
                                <Box className={classes.gridBox}>
                                    <Notifications123 onClick={handlebtns1} className={classes.notificationicon} cursor={"pointer"}/>
                                    {lsdesktop?<Bar style={{cursor:'pointer'}} onClick={handleDrawerToggle}/>:<Button size='small'  onClick={handlebtns} startIcon={
                                    <Box src={user?.data?.photo?`${user?.data?.photo}/${token}`:''} className={classes.headerimage} component={'img'}/>
                                    } className={classes.btn_icon} endIcon={<KeyboardArrowDownIcon className={classes.downIcon} sx={{whiteSpace:'nowrap !important'}}/>}>
                                        {lsdesktop?"":user?.data?.name.length>6?`${user?.data?.name.slice(0,6)+"..."}`:user?.data?.name}
                                    </Button>}
                                </Box>    
                            <Fragment>
                                {value1&&<List className={classes.header_profile_drop_down2}>
                                    <ListItem onClick={handleLogout}>
                                        <Typography className={classes.header_profile_text}><Logout1/><Typography component={'span'}  className={classes.logout}>Logout</Typography></Typography>
                                    </ListItem>
                                </List>}
                                
                            </Fragment>
                        </Box>
                       
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.headerdivider}></Box>
            </Fragment>
        );
    
}

export default withRouter(withStyles(Styles)(Header))