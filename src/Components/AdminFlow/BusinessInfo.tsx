import React, { Fragment} from 'react';
import { withStyles } from '@mui/styles';
import { Styles } from './Table/Filter/MUIStyles';
import { Box, Button,Grid, Pagination,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { withRouter } from '../../Utils/withRouter';
import { AppDispatch } from '../Redux/store/Store';
import Filter from './Table/Filter/Filter';
import {Delete, Edit,Search } from '@mui/icons-material';
import AddBusiness from './Table/Filter/AddBusiness';
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
  
  };
};


const TableHeader = [
  { id: 1, txt: 'FullName', field: 'fullname' },
  { id: 2, txt: 'Sector', field: 'sector' },
  { id: 3, txt: 'Photos', field: 'photos' },
  { id: 4, txt: 'Date',field: 'date' },
  { id: 5, txt: 'Mobile', field: 'mobile' },
  { id: 6, txt: 'Email', field: 'email' },
  { id: 7, txt: 'Location',field: 'location' },
  { id: 8, txt: 'Reference', field: 'reference' },
  { id: 9, txt: 'Actions' },
];

const dummydata = [
  {
    id: 1,
    fullname: 'Joshna',
    sector: 'IT',
    photos: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&w=150&h=150&fit=crop&fm=jpg',
    date: '10-11-2024',
    mobile: '123-456-7890',
    email: 'joshna@example.com',
    location: 'New York',
    reference: '9067872342',
  },
  {
    id: 2,
    fullname: 'Sourva',
    sector: 'Agriculture',
    photos: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&w=150&h=150&fit=crop&fm=jpg',
    date: '11-11-2024',
    mobile: '987-654-3210',
    email: 'sourva@example.com',
    location: 'California',
    reference: 'Jane Smith',
  },
  {
    id: 3,
    fullname: 'Naresh Mendu',
    sector: 'Management',
    photos: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=150&h=150&fit=crop&fm=jpg',
    date: '12-11-2024',
    mobile: '555-666-7777',
    email: 'naresh@example.com',
    location: 'Texas',
    reference: 'IT Hub Event',
  },
];

  
  function BusinessTable({ classes,dispatch,selector,navigate,lsdesktop}: IProps) {
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
      <Header name='Businees_Info'/>
      <AddBusiness/>
      <Box className={classes.propertyMaingridcontainer}>
        <Grid container className={classes.propertygridcontainer}>
          <Grid item xs={12} md={12} lg={8}>
            <TextField
              size={!lsdesktop?'small':'medium'}
              placeholder="Search.."
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
              dummydata?.map((data:any) => (
                <Fragment>
                   <Logout open={open} handleCancel={handleCancel} name='statusbtn' value={value} handleOpen={handleOpen} dataId={data.id}/>
                <TableRow key={data?.id} className={classes.TableRow}>
                  <TableCell className={classes.tabledate}>
                  {data.fullname}
                  </TableCell>
                  <TableCell className={classes.tabledate}>
                    <Box className={classes.tabledate}>{data.sector}</Box>
                  </TableCell>
                  <TableCell>
                    <Box src={data?.photos} className={classes.images} component={'img'}/>
                    
                    </TableCell>
                  <TableCell className={classes.tabledate}>
                    {data.date}
                    </TableCell>
                  <TableCell className={classes.tabledate}>
                    {data?.mobile}
                  </TableCell>
                  <TableCell className={classes.tabledate}>
                    {data?.email}
                  </TableCell>
                  <TableCell className={classes.tabledate}>
                    {data?.location}
                  </TableCell>
                  <TableCell className={classes.tabledate}>
                    {data?.reference}
                  </TableCell>
                  <TableCell>
                    <Box className={classes.btncontainer1}>                   
                      <Edit color='primary' onClick={handleUpdate}/>                  
                      <Delete color='error'/>
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

export default withRouter(withStyles(Styles)(BusinessTable));