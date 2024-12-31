import { Box, Card, CircularProgress, Dialog, DialogContent, Theme } from '@mui/material'
import React from 'react'
import { withStyles } from '@mui/styles'
export const Styles=(theme:Theme)=>({
  root:{
      [theme.breakpoints.down('lg')]:{
        marginBottom:'20% !important'
      }
  }
})
type IProps={
    open:boolean
    classes:{
        [type:string]:string
    }
}
function Circular({classes,open}:IProps) {
  return (
    <Dialog open={open}
    PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
    }}
    >
        <DialogContent>
        <CircularProgress  className={classes.root}/>
        </DialogContent>
        
    </Dialog>
  )
}

export default withStyles(Styles)(Circular)