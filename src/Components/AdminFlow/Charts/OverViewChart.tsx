import React, { useEffect } from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpward } from '@mui/icons-material';
import { AdminOverview } from '../../Redux/Reducers/AdminReducer';
import { AppDispatch } from '../../Redux/store/Store';
import { withRouter } from '../../../Utils/withRouter';
import { Styles } from '../Dashboard/Styles';

type IProps = {
  classes: { [type: string]: string },
  selector: {
    AdminReducer: {
      overview: {
        data: {
          soldCount: number,
          rentedCount: number,
          totalCount: number,
          totalPercentage:string,
          overview: {
            monthName: string,
            soldCount: number,
            rentedCount: number,
          }[]
        }
      }
    }
  },
  dispatch: AppDispatch
}

const OverViewChart = ({ classes, selector, dispatch }: IProps) => {
  useEffect(() => {
    dispatch(AdminOverview())
  }, [dispatch])

  const Data = selector.AdminReducer.overview;

  const formattedData = Data?.data?.overview?.map(item => ({
    monthname: item?.monthName,
    rented: item?.rentedCount,
    sold: item?.soldCount
  })) || [];
  const gradientOffset = () => {
    const dataMax = Math.max(...(Data?.data?.overview?.map((i) => i?.rentedCount) || []), ...(Data?.data?.overview?.map((i) => i?.soldCount) || []));
    const dataMin = Math.min(...(Data?.data?.overview?.map((i) => i?.rentedCount) || []), ...(Data?.data?.overview?.map((i) => i?.soldCount) || []));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <Box className={classes.gridContainer1}>
      <List>
        <ListItem>
          <ListItemText primary={<Typography className={classes.overview}>Overview</Typography>} />
        </ListItem>
      </List>
      <Grid container>
        <Grid item xs={12} md={12} lg={4}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Box className={classes.svg1}></Box>
              </ListItemIcon>
              <ListItemText
                primary={<Typography className={classes.primary_text1}>Total Sales</Typography>}
                secondary={<Typography className={classes.primary_text2}>{Data?.data?.soldCount} Unit</Typography>}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Box className={classes.svg2}></Box>
              </ListItemIcon>
              <ListItemText
                primary={<Typography className={classes.primary_text1}>Total Rent</Typography>}
                secondary={<Typography className={classes.primary_text2}>{Data?.data?.rentedCount} Unit</Typography>}
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <List>
            <ListItem>
              <ListItemText
                primary={<Typography sx={{ color: '#32D16D !important' }} className={classes.primary_text1}>{parseInt(Data?.data?.totalPercentage)/100+"%"}</Typography>}
                secondary={<Typography className={classes.primary_text2}>{Data?.data?.totalCount} Unit</Typography>}
              />
              <ListItemIcon>
                <Box className={classes.svg3}><ArrowUpward sx={{ color: 'white' }} /></Box>
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          width={600}
          height={350}
          data={formattedData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthname" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="rented" stroke="#000" fill="url(#splitColor)" />
          <Area type="monotone" dataKey="sold" stroke="#000" fill="url(#splitColor)" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default withRouter(withStyles(Styles)(OverViewChart));
