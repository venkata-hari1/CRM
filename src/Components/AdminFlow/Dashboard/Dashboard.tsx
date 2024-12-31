import Header from '../Header'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles'
import { Fragment } from 'react'
import PieChart from '../Charts/PieChart'
import { Box, Grid } from '@mui/material'
import Customers from './Customers'
import TotalRevenueChart from './TotalRevenueChart'
import OverView from '../Charts/OverViewChart'
import Property from '../../Common/assets/images/totalProperty.png';
type IProps={
  classes:{
    [type:string]:string
  }
}
function DashBoard({classes}:IProps) {
  return (
    <Fragment>
    <Header name="Dashboard" />
     <PieChart/>
     <Box className={classes.mainboxconatiner}>
     <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={12} md={12} lg={8}>
        <TotalRevenueChart/>
        <OverView/>
        {/* <DistrictsMap/> */}
      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <Customers/>
      </Grid>
     </Grid>
     </Box>
  </Fragment>
  )
}

export default withStyles(Styles)(DashBoard)