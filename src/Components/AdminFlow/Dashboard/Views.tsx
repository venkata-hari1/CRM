import { Box, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles';
import { Products } from './Drawer';
import { withRouter } from '../../../Utils/withRouter';
type IProps={
    classes:{
        [type:string]:string
    },
    selector:{
        AdminReducer:{
          AdminDashboard:{
            data:{
                customersCount:number;
                totalPropertiesListed:number
                reviewsCount:number
            }
          }
        }
      }
}
function Views({classes,selector}:IProps) {
    const Data=selector?.AdminReducer?.AdminDashboard
    const maxValue = Math.max(...Products.map(data => data.data===3456?Data?.data?.totalPropertiesListed:data.data===456?Data?.data?.reviewsCount:data.data===561?Data?.data?.customersCount:data.data));
  return (
    <Box className={classes.customers}>
    <List>
      {Products.map((data) =>{ 
        const prograssbar=data.data===3456?Data?.data?.totalPropertiesListed:data.data===456?Data?.data?.reviewsCount:data.data===561?Data?.data?.customersCount:data.data
        return(
        <React.Fragment key={data.id}>
          <ListItem>
            <ListItemText secondary={<Typography className={classes.primarytext2}>{data.txt}</Typography>} />
            <ListItemIcon><Typography className={classes.primarytext1}>{data.data===3456?Data?.data?.totalPropertiesListed:data.data===456?Data?.data?.reviewsCount:data.data===561?Data?.data?.customersCount:data.data}</Typography></ListItemIcon>
          </ListItem>
          <LinearProgress variant="determinate" 
          className={classes.prograssbar}
          value={(prograssbar/ maxValue) * 100} />
        </React.Fragment>
      )
      })}
    </List>
  </Box>
  )
}

export default withRouter(withStyles(Styles)(Views))