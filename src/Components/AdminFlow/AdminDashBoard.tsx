import { Box, Grid } from '@mui/material'
import SideBar from '../Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Dashboard/Dashboard'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles/SideBar'
import Property from './Property'
import Profile from './Profile/Profile'
import Settings from './Settings'
import TermsAndConditions from './TermsAndConditions'
import PropertyDetails from './PropertyDetails'
import AddNewUser from './AddNewUsers/AddNewUser'
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
        <Grid container spacing={{lg:2,md:0,xs:0}} className={classes.gridcontainer}>
            <Grid item lg={2} sx={{display:{lg:'grid',xs:'none',md:'none'}}}>
              <SideBar/>
            </Grid>
            <Grid item xs={12} md={12} lg={10} sx={{marginTop:{xs:'11%',md:'11%',lg:'0px'}}}>
             <Routes>
               <Route path='dashboard' element={<DashBoard/>}/>
               <Route path='properties' element={<Property/>}/>
               <Route path='properties/:id' element={<PropertyDetails/>}/>
            
               <Route path='profile' element={<Profile/>}/>
               <Route path='settings' element={<Settings/>}/>
               <Route path='privacypolicy' element={<TermsAndConditions/>}/>
               <Route path='addnewuser' element={<AddNewUser/>}/>
           
             </Routes>
            </Grid>
        </Grid>
     </Box>
  )
}

export default withRouter(withStyles(Styles)(DashBoardBox))