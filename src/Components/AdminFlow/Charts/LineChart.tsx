import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { withStyles } from '@mui/styles';
import {Styles} from '../Dashboard/Styles';
import {ReactComponent as HomeIcon} from '../../Common/assets/images/homeicon.svg'
import { AdminOverview, Exports_data1 } from '../../Redux/Reducers/AdminReducer';
import { AppDispatch } from '../../Redux/store/Store';
import { withRouter } from '../../../Utils/withRouter';
import { ToastError } from '../../../Utils/Validate';
type IProps={
  classes:{
    [type:string]:string
  },
  selector:{
    AdminReducer:{   
      overview:{
        data:{
          soldCount:number,
          overview:{
            monthname:string,
            soldCount:number

          }[]
        }
      }
      
    }
  },
  dispatch:AppDispatch
}
const LineChart= ({classes,selector,dispatch}:IProps) => {
  const[excel,setExcel]=useState<boolean>(false)
const[download,setDownload]=useState<string>('')
  useEffect(()=>{
    const fetchData = async () => {
      await dispatch(AdminOverview())};
         fetchData();
  },[dispatch])
  const handleExports = async () => {
    const data = {
      status: 'sale'
    }
    const response = await dispatch(Exports_data1({ data: data }))
    const fulfilled = response.payload
    if (fulfilled.status === true) {
      setExcel(true)
      setDownload(`${fulfilled.data}/photo`)
    }
    else{
      ToastError(fulfilled.message)
    }
  }
  const handleCancel=()=>{
    setExcel(false)
  }
  const Data=selector.AdminReducer.overview
  return (
    <Box className={classes.gridContainer1}>
       <Grid container spacing={1} sx={{padding:'6px'}}>
        <Grid item xs={7} md={7} lg={8}>
            <Typography className={classes.rentstatistics}>Sales Statistic</Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Box className={classes.homeicon1}><HomeIcon/></Box>
                    </ListItemIcon>
                    <ListItemText 
                    primary={<Typography className={classes.totalrent}>Total Sale</Typography>}
                    secondary={<Typography className={classes.totalrent1}>{Data?.data?.soldCount} Unit</Typography>}
                    />
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={5} md={5} lg={4}>
       
          <Button className={classes.download} sx={{float:'right'}} onClick={handleExports}>Export</Button>
        
        </Grid>
     </Grid>   
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        width={400}
        height={300}
        data={Data?.data?.overview}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="monthName" />
        <YAxis />
        <Tooltip 
          formatter={(value, name, props) => [`${value} units sales`, '']}
        />
        <Area type="monotone" dataKey="soldCount" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
    </Box>
  );
};

export default withRouter(withStyles(Styles)(LineChart))
