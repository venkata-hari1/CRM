import React, { Fragment, useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import { Box, Button, Divider, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ReactComponent as Avatar } from '../../Common/assets/images/avatar1.svg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { withRouter } from '../../../Utils/withRouter';
import { Products } from './Drawer';
import { Styles } from './Styles';
import { AppDispatch } from '../../Redux/store/Store';
import { Customer } from '../../Redux/Reducers/AdminReducer';
import Reviews from './Reviews';
import Views from './Views';
type IProps = {
  name:string;
  navigate:Function;
  dispatch: AppDispatch;
  selector: {
      AdminReducer: {
          AdminCustomer: {
              data: {
                  totalPages: number | undefined;
                  data: {
                      email: string;
                      name: string;
                      photo:string;
                      activity: string;
                      mobile: number;
                      status: string;
                      price: number;
                      updatedAt: number;
                      address: string;
                      apartmentName: string;
                      images: string | undefined[];
                      id: number,
                      userName: string,
                  }[]
              }
          }
      }
  };
  classes: {
    [type: string]: string;
  };
};

function Customer1({ classes, navigate, dispatch, selector,name}: IProps) {
  const [page, setPage] = useState(1);

  const customer = selector.AdminReducer.AdminCustomer;

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        page: page,
        name: "",
        status:""
      }
     await dispatch(Customer({ data: data }))
    };

    fetchData();
  }, [dispatch]);

const handleView = (data: { photo:string,id: number,name:string,email:string,mobile:number }) => {
  localStorage.setItem('id', JSON.stringify(data.id))
  localStorage.setItem('AdminSellerIds','3')
  const id = JSON.parse(localStorage.getItem('id') || '')
  navigate(`/admin/customer/${id}`,{state:{
    email:data?.email,
    photo:data?.photo,
    name:data?.name,
    mobile:data?.mobile}})
}
const handleViewAll=()=>{
  localStorage.setItem('AdminSellerIds','3')
  navigate('/admin/customer')
}
const handleAddNewCustomer=()=>{
  localStorage.setItem('AdminSellerIds','3')
  navigate('/admin/addnewuser')
}
const token=localStorage.getItem('token')
  return (
    <React.Fragment>
      <Box className={classes.customers}>
        <List>
          <ListItem>
            <ListItemText primary={<Typography className={classes.listheader}>Recent Customers</Typography>} />
            {/* <Button className={classes.listheaderbtn}></Button> */}
          </ListItem>
        </List>
        <Divider className={classes.divider} />
        <List>
          {customer?.data?.data.slice(0, 4).map((data) => (
            <React.Fragment key={data.id}>
              <ListItem>
                {data.photo?<Box onClick={() => handleView(data)} src={`${data.photo}/${token}`} className={classes.boximage} component={'img'}/>:<Avatar className={classes.avatar} />}
                <ListItemText
                  primary={<Typography component={'span'} className={classes.primarytext2}>{data.name.length>12?`${data.name.slice(0,12)+"..."}`:data.name}</Typography>}
                  secondary={
                    <Box>
                      <Typography className={classes.primarytext1} onClick={() => handleView(data)}>{data.email.length>12?`${data.email.slice(0,12)+"..."}`:data.email}</Typography>
                      <Typography className={classes.primarytext1}>{data.mobile}</Typography>
                    </Box>
                  }
                />
                <ListItemIcon><ArrowForwardIosIcon onClick={() => handleView(data)} className={classes.arrowright} /></ListItemIcon>
              </ListItem>
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
          <Box className={classes.mainboxconatiner1}>
            <Button className={classes.addnewcustomer} sx={{width:'100%'}} onClick={handleViewAll}>View All</Button>
          </Box>
        </List>
      </Box>
     {name!=="analytics"&&<Fragment>
      <Views/>
     <Reviews/>
      </Fragment>}
    </React.Fragment>
  );
}

export default withRouter(withStyles(Styles)(Customer1))

