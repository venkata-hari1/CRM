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
type IProps={
  classes:{
    [type:string]:string
  },
  dispatch:AppDispatch
}
function DashBoardBox({classes,dispatch}:IProps) {
  return (
     <Box className={classes.maincontainer}>
        <Grid container  className={classes.gridcontainer}>
            <Grid item lg={2} sx={{padding:'10px',backgroundColor:'#F4FAFF !important',height:'100vh',display:{lg:'grid',xs:'none',md:'none'}}}>
              <SideBar/>
            </Grid>
            <Grid item xs={12} md={12} lg={10} sx={{marginTop:{xs:'11%',md:'11%',lg:'0px'}}}>
             <Routes>
               <Route path='dashboard' element={<DashBoard/>}/>
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