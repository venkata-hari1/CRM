import { Box, Grid } from '@mui/material'
import SideBar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Dashboard/Dashboard'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles/SideBar'
import ClientTable from './ClientTable'
import ProjectDetails from './ProjectDetails'
import Settings from './Settings'
import Updates from './Updates'
import { AppDispatch } from '../Redux/store/Store'
import { withRouter } from '../../Utils/withRouter'
import BusinessInfo from './BusinessInfo'
type IProps={
  location:any,
  classes:{
    [type:string]:string
  },
  dispatch:AppDispatch
}
function DashBoardBox({classes,location}:IProps) {

  return (
     <Box className={classes.maincontainer}>
        <Grid container  className={classes.gridcontainer}>
            {location.pathname!=="/admin/businees_info"&&<Grid item lg={2} sx={{padding:'10px',backgroundColor:'#F4FAFF !important',height:'100vh',display:{lg:'grid',xs:'none',md:'none'}}}>
              <SideBar/>
            </Grid>}
            <Grid item xs={12} md={12} lg={location.pathname!=="/admin/businees_info"?10:12} sx={{marginTop:{xs:'11%',md:'11%',lg:'0px'}}}>
             <Routes>
               <Route path='dashboard' element={<DashBoard/>}/>
               <Route path='businees_info' element={<BusinessInfo/>}/>
               <Route path='clients' element={<ClientTable/>}/>
               <Route path='settings' element={<Settings/>}/>
               <Route path='updates' element={<Updates/>}/>
               <Route path='project_details' element={<ProjectDetails/>}/>
             </Routes>
            </Grid>
        </Grid>
     </Box>
  )
}

export default withRouter(withStyles(Styles)(DashBoardBox))