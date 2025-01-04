import {Box, Button, Card, CardContent, Divider,Grid,TextField, Typography } from '@mui/material';
import  { Component, Fragment } from 'react';
import { withStyles } from '@mui/styles';
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Styles } from './ClientStyles';
import { connect } from 'react-redux';
import { withRouter } from '../../Utils/withRouter';
import { ReactComponent as Location } from '../Common/assets/images/location.svg'
import { AppDispatch } from '../Redux/store/Store';
import PersonIcon from '@mui/icons-material/Person';
import Header from './Header';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Warning } from '@mui/icons-material';
type IProps = {
    dispatch: AppDispatch
    location: {
        state: {
            sales:boolean
            purchase: boolean
            preview:boolean
        }
    }
    value: boolean
    Id: number,
    navigate: Function,
    classes: {
        [type: string]: string
    },
    preview:boolean
    
}
class ProjectDetails extends Component<IProps> {
    state = {
        value:null,
        open: false,
        option: 2,
        open1: false,
        date:'',
        tour:'',
        display:false,
        edit:false,
        anchorEl:null,
        view:false,
        kms:'',
        share:false
    }
    handleClose1 = () => {
        this.setState({anchorEl:null})
      };
    handleClose = () => {
        this.setState({ open1: false })
    }
    handleClick = async (data: { id: number }) => {
    }
    handleRequest=()=>{
        this.props.navigate('/admin/updates')
    }
    render() {
        const { classes } = this.props

        const btns = [{ id: 1, btn: 'Share', icon: <ShareIcon /> }, 
            { id: 2, btn: 'Favorite', icon: <FavoriteIcon sx={{color:'red'}}/> }, 
            { id: 3, btn: 'Browse nearby listings', icon: <SearchIcon /> }]
    
   
     
        return (
            <Fragment>
                <Header name='Harboleaf'/>
                 <Box className={classes.project_container}>
                <Grid container spacing={2} className={classes.page3_gridcontainer2}>
                    <Grid item xs={12} md={12} lg={ 8} >
                       <Box className={classes.gridleftsidecontainer}>
                        <Grid container className={classes.slider_griditem2}>
                            <Grid xs={12} md={12} lg={3}>
                                <Box className={classes.slider_griditem3}>
                                    <Typography component={'div'}>Client Name</Typography>
                                    <Typography component={'div'}><PersonIcon/><span>Sourav</span></Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={12} lg={3}>
                                <Box className={classes.slider_griditem3}>
                                    <Typography component={'div'}>Client Mobile</Typography>
                                    <Typography component={'div'} sx={{display:'flex'}}><MobileScreenShareIcon/><span>900000000</span></Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={12} lg={3}>
                                <Box className={classes.slider_griditem3}>
                                    <Typography component={'div'}>Client Email</Typography>
                                    <Typography component={'div'} sx={{display:'flex'}}><MarkEmailUnreadIcon/><span>Sourav@gmail...</span></Typography>
                                </Box>
                            </Grid>
                           
                            <Grid xs={12} md={12} lg={3}>
                                <Box className={classes.slider_griditem3}>
                                    <Typography component={'div'}>Client Address</Typography>
                                    <Typography component={'div'} sx={{display:'flex'}}><LocationOnIcon/><span>{"Hyderabad"}</span></Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={1} >
                            <Grid item xs={12} md={12} lg={6}>
                                <Box className={classes.slider_griditem5} sx={{background:'#fdf9df',border:'1.5px soild #fdf9df'}}>
                                <Box>
                                    <Typography component={'div'}>
                                    <CheckCircleOutlineIcon sx={{marginRight:'10px'}}/><span>No.of Front-End Devs</span></Typography>
                                    <Typography component={'div'}> {"N/A"}</Typography>
                                </Box>
                                <Box>
                                    <Typography component={'div'}><CheckCircleOutlineIcon sx={{marginRight:'10px'}}/><span>No.of Back-End Devs</span></Typography>
                                    <Typography component={'div'}> {"N/A"}</Typography>
                                </Box>
                                <Box>
                                    <Typography component={'div'}><CheckCircleOutlineIcon sx={{marginRight:'10px'}}/><span>No.of Mobile Devs</span></Typography>
                                    <Typography component={'div'}>
                                        {"N/A"}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component={'div'}><CheckCircleOutlineIcon sx={{marginRight:'10px'}}/><span>No.of OA Testers</span></Typography>
                                    <Typography component={'div'}>
                                        {"N/A"}</Typography>
                                </Box>
                                </Box>
                             
                            </Grid>
                            <Grid item xs={12} md={12} lg={6}>
                                <Box  className={classes.slider_griditem5} sx={{background:'#e2feff',border:'1px soild #e2feff'}}>
                               <Box>
                                    <Typography component={'div'}><CheckCircleOutlineIcon sx={{marginRight:'10px'}}/><span>No.of DevOps Engineer</span></Typography>
                                    <Typography component={'div'}>
                                        {"N/A"}</Typography>
                                </Box>
                                <Box>
                                    <Typography component={'div'}><CheckCircleOutlineIcon sx={{marginRight:'10px'}}/><span>No.of Project Managers</span></Typography>
                                    <Typography component={'div'}>{"N/A"}</Typography>
                                </Box>
                                <Box>
                                    <Typography component={'div'}><CheckCircleOutlineIcon sx={{marginRight:'10px'}}/><span>No.of UI/UX Designers</span></Typography>
                                    <Typography component={'div'}>{"N/A"}</Typography>
                                </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        </Box>
                
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} className={classes.purchase}>
                      
                        <Card variant='outlined' className={classes.card}>
                            <CardContent className={classes.slider_cardcontent}>
                                <Box >Request to extend the project.</Box>
                                <Box></Box>
                                <Box></Box>
                                <Divider sx={{marginTop:'1%'}}/>
                                <Box></Box>
                                <Box>
                                    <Button startIcon={<Warning/>} color='warning' variant='outlined' sx={{textTransform:'capitalize'}}>Deadline</Button>
                                </Box>
                                <Box>
                                    <TextField type='date'  fullWidth name='date' value={new Date().toISOString().split('T')[0]}/>
                                </Box>
                                <Box><Button onClick={this.handleRequest}
                               className={classes.requestTour}><Location style={{ marginRight: '10px' }} />Request</Button></Box>
                               
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                </Box>
            </Fragment>
        );
    }
}
const MapToProps = (state:any) => ({
    data: state.LandingReducer.data,
    Id: state.LandingReducer.Id
})
const connetedToSlider = connect(MapToProps)(ProjectDetails)
export default withRouter(withStyles(Styles)(connetedToSlider))