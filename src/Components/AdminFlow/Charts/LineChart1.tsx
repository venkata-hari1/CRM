import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Styles } from '../Dashboard/Styles';
import {ReactComponent as HomeIcon} from '../../Common/assets/images/homeicon.svg'
import { AppDispatch } from '../../Redux/store/Store';
import { AdminOverview, Exports_data1 } from '../../Redux/Reducers/AdminReducer';
import { withRouter } from '../../../Utils/withRouter';
import { ToastError } from '../../../Utils/Validate';
type IProps={
    classes:{
        [type:string]:string
    },
    dispatch:AppDispatch,
    selector:{
      AdminReducer:{   
        overview:{
          data:{
            rentedCount:number,
            overview:{
              monthname:string,
              rentedCount:number

            }[]
          }
        }
        
      }
    }
}
const LineChart1 = ({classes,dispatch,selector}:IProps) => {
  const[excel,setExcel]=useState<boolean>(false)
const[download,setDownload]=useState<string>('')
  useEffect(()=>{
    const fetchData = async () => {
      await dispatch(AdminOverview())
    };
   fetchData();
  },[])
  const handleExports = async () => {
    const data = {
      status: 'rent'
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
        <Grid item xs={12} md={12} lg={8}>
            <Typography className={classes.rentstatistics}>Rent Statistic</Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <Box className={classes.homeicon}><HomeIcon/></Box>
                    </ListItemIcon>
                    <ListItemText 
                    primary={<Typography className={classes.totalrent}>Total Rent</Typography>}
                    secondary={<Typography className={classes.totalrent1}>{Data?.data?.rentedCount} Unit</Typography>}
                    />
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          
          <Button className={classes.download} sx={{float:'right'}} onClick={handleExports}>Export</Button>
         
        </Grid>
     </Grid>   
    <ResponsiveContainer width="100%" height={300} >
      <AreaChart
      stackOffset='positive'
        width={400}
        height={300}
        data={Data?.data?.overview}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="monthName"  />
        <YAxis />
        <Tooltip 
          formatter={(value, name, props) => [`${value} Units Rented`, '']}
        />
        <Area type={"monotone"} dataKey="rentedCount" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} startOffset={"positive"} />
      </AreaChart>
    </ResponsiveContainer>
    </Box>
  );
};

export default withRouter(withStyles(Styles)(LineChart1))
