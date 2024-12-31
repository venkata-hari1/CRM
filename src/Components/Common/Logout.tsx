import { Theme } from '@emotion/react'
import { Close } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, Divider } from '@mui/material'
import React from 'react'
import { withStyles } from '@mui/styles'
import { textTransform } from './Styles'
import { withRouter } from '../../Utils/withRouter'
export const Styles=(theme:Theme)=>({
  dailogaction:{
    padding:'15px !important',
    display:'flex !important',
    justifyContent:'space-between !important'
  },
  title:{
    color:'#073762',
    fontSize:'130% !important',
    fontWeight:'900 !important'
  },
  dailogcontent:{
    color:'#000929 !important',
    fontWeight:'900 !important',
    marginTop:'1% !important',
    marginBottom:'1% !important'
  },
  btns:{
    display:'flex !important',
    justifyContent:'space-between !important',
    marginTop:'7%',
    '&>button':{
      ...textTransform,
      fontSize:'90.00%',
      width:'47%'
    },
    '&>button:nth-child(1)':{
      background:'#073762',
      color:'white',
      fontWeight:'900'
    },
    '&>button:nth-child(2)':{
      border:'1px solid #9FC5E9',
      color:'#000929',
      fontWeight:'900'
    }
  }
})
type IProps={
  navigate:Function
  open:boolean
  handleCancel:()=>void
  classes:{
    [type:string]:string
  }
}
function Logout({classes,open,navigate,handleCancel}:IProps) {
  const handleLogout=()=>{
    setTimeout(()=>{
      window.location.reload()
    },500)
    localStorage.clear()
    navigate('/')
}
  return (
    <Dialog open={open} sx={{padding:'10px'}}>
        <DialogActions className={classes.dailogaction}>
           <Box className={classes.title}>Logout</Box>
           <Close sx={{fontSize:'120.00%'}} onClick={handleCancel}/>
        </DialogActions>
        <Divider/>
        <DialogContent sx={{width:'300px'}}>
            <Box className={classes.dailogcontent}>Are you sure you want to logout?</Box>
            <Box className={classes.btns}>
                <Button onClick={handleLogout}>Yes, I want to</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </Box>
        </DialogContent>
    </Dialog>
  )
}
export default withRouter(withStyles(Styles)(Logout))