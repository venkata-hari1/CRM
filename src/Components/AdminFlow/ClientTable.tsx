import React, { Fragment} from 'react';
import { withStyles } from '@mui/styles';
import { Styles } from './Table/Filter/MUIStyles';
import { Box, Button,Chip,Grid, Pagination,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { withRouter } from '../../Utils/withRouter';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { AppDispatch } from '../Redux/store/Store';
import Filter from './Table/Filter/Filter';
import {Add, Edit, RemoveRedEye, Search, Send } from '@mui/icons-material';
import AddClients from './Table/Filter/AddClients';
import Header from './Header';
import Logout from '../Common/Logout';
import { Dailog_Box, Store_Id } from '../Redux/Reducers/LandingReducer';
type IProps = {
  lsdesktop:any,
  classes: {
    [type: string]: string;
  };
  navigate: Function;
  dispatch: AppDispatch;
  selector: {
    LandingReducer:{
      status:string,
      value:number | null
    },
    AdminReducer: {
      AdminProperties: {
        data: {
          totalPages: number | undefined;
          data: {
            status: string;
            price: string ;
            updatedAt: number;
            address: string;
            city:string;
            apartmentName: string;
            images: string | undefined[];
            id: number,
            userName: string,
          }[]
        }
      }
    }
  };
};


const TableHeader = [
  { id: 1, txt: 'ClientName', field: 'clientname' },
  { id: 2, txt: 'ProjectName', field: 'projectname' },
  { id: 3, txt: 'StartDate', field: 'startdate' },
  { id: 4, txt: 'Deadline', field: 'deadline' },
  { id: 5, txt: 'Status', field: 'status' },
  { id: 6, txt: 'Actions' },
];
const dummydata=[
  {id:1,clientname:'Joshna',projectname:'ditobox',startdate:'10-11-2024',deadline:'10-11-2024',status:'Active'},
  {id:2,clientname:'Sourva',projectname:'Harboleaf',startdate:'10-11-2024',deadline:'10-11-2024',status:'Active'},
  {id:3,clientname:'Naresh Mendu',projectname:'CRM',startdate:'10-11-2024',deadline:'10-11-2024',status:'Close'},
]
function ClientTable({ classes,dispatch,selector,navigate,lsdesktop}: IProps) {
  const[open,setOpen]=React.useState(false)
const pagination = (e: React.ChangeEvent<unknown>, page: number) => {

  };
const handleCancel=()=>{
  setOpen(false)
}
const handleOpen=(id:number)=>{
  dispatch(Store_Id(id))
  setOpen(true)
}
const handleSendUpdate=()=>{
  navigate('/admin/updates')
}
const handleUpdate=()=>{
 dispatch(Dailog_Box(true))
}
const handleDetails=()=>{
  navigate('/admin/project_details')
}
const value:any=selector?.LandingReducer?.value
  return (
    <Fragment>
      <Header name='Clients'/>
      <AddClients/>
      <Box className={classes.propertyMaingridcontainer}>
        <Grid container className={classes.propertygridcontainer}>
          <Grid item xs={12} md={12} lg={8}>
            <TextField
              size={!lsdesktop?'small':'medium'}
              placeholder="Search With Project Name.."
              className={classes.textFiled}
              InputProps={{
                classes: { input: classes.input },
                startAdornment: <Search/>,
              }}
            />
          </Grid>
          <Grid xs={12} md={12} lg={4}>
          <Filter/>
          </Grid>
        </Grid>
      <TableContainer className={classes.propertygridcontainer}>
        <Table>
          <TableHead sx={{background:'#F4FAFF'}}>
            <TableRow>
              {TableHeader.map((data) => (
                <TableCell key={data.id}>
                  <Box className={classes.tableHeader}>
                    {data.txt}
                   
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dummydata.length > 0 ? (
              dummydata?.map((data) => (
                <Fragment>
                   <Logout open={open} handleCancel={handleCancel} name='statusbtn' value={value} handleOpen={handleOpen} dataId={data.id}/>
                <TableRow key={data?.id} className={classes.TableRow}>
                  <TableCell   onClick={handleDetails}>
                     <Box sx={{display:'flex'}}>
                     <Add sx={{marginRight:'5px',pointer:'cursor','&:hover':{color:'#073762'}}}/>
                     <Box className={classes.tabledate}>{data.clientname}</Box>
                     </Box>
                     
                  </TableCell>
                  <TableCell>
                    <Box className={classes.tabledate}>{data.projectname}</Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.tabledate}>
                    {data?.startdate}
                    </Box>
                    </TableCell>
                  <TableCell className={classes.tabledate}>
                    {data.deadline}
                    </TableCell>
                  <TableCell>
                    <Box sx={{color:value?.includes(data.id)?'red':'green'}}
                    className={classes.tabledate}
                    >{value?.includes(data.id)?"Close":"Active"}</Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.btncontainer}>
                    <Button size='small' color='primary' variant='contained' className={classes.details} onClick={handleUpdate}>
                      <Edit/>
                    </Button>
                    <Button size='small' sx={{background:'#6200ea'}} variant='contained' className={classes.details} onClick={handleSendUpdate}>
                     <Send/>
                    </Button>
                    <Button size='small' color='warning' variant='contained' className={classes.details} onClick={()=>handleOpen(data.id)}>
                    {value?.includes(data.id)?<VisibilityOffIcon/>:
                     <RemoveRedEye/>}
                    </Button>
                    </Box>
                 
                  </TableCell>
                </TableRow>
                </Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={TableHeader.length}>
                  <Typography variant="body1" align="center" className={classes.userNill}>
                    No Users Found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      
      </TableContainer>
      <Pagination
            className={classes.pagination}
            count={1}
            page={1}
            onChange={pagination}
            color='primary'
          />
      </Box>
    </Fragment>
  );
}

export default withRouter(withStyles(Styles)(ClientTable));