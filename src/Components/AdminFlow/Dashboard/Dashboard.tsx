import Header from '../Header'
import { withStyles } from '@mui/styles'
import { Styles } from '../Charts/Styles'
import { Fragment } from 'react'
import ProjectsTable from '../Charts/ProjectsTable'
import { Box, Grid } from '@mui/material'
import PieChart from '../Charts/PieChart'
import TotalRevenueChart from '../Charts/BarChart'
import { withRouter } from '../../../Utils/withRouter'
type IProps={
  classes:{
    [type:string]:string
  }
}
function DashBoard({classes}:IProps) {
  return (
    <Fragment>
    <Header name="Dashboard" />
     <ProjectsTable/>
     <Box className={classes.mainboxconatiner}>
     <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={12} md={12} lg={8}>
        <TotalRevenueChart/>

      </Grid>
      <Grid item xs={12} md={12} lg={4}>
        <PieChart/>
      </Grid>
     </Grid>
     </Box>
  </Fragment>
  )
}

export default withRouter(withStyles(Styles)(DashBoard))