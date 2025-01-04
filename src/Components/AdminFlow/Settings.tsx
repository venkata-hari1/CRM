import React, { Fragment } from 'react'
import Header from './Header'
import Settings from './Settings/Settings'
import { withRouter } from '../../Utils/withRouter'
import { Box, Theme } from '@mui/material'
import { withStyles } from '@mui/styles'
type IProps={
  classes:{
    [type:string]:string
  }
}
export const Styles=(theme:Theme)=>({
 root:{
  padding:'10px !important'
 }
})
function AdminSettings({classes}:IProps) {
  return (
    <Fragment>
        <Header name="Settings"/>
        <Box className={classes.root}>
        <Settings name="admin"/>
        </Box>
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(AdminSettings))