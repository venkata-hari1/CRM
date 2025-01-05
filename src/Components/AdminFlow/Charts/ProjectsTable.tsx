import { Box,  Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles'
import { Fragment} from 'react'
import { withRouter } from '../../../Utils/withRouter'
import { AppDispatch } from '../../Redux/store/Store'
type IProps={
  name:string
  classes:{
    [type:string]:string
  },
  dispatch:AppDispatch,
 
 
}
function PieCharts({classes,name}:IProps) {
 
  const Earning:any = [
    { id: 1, txt: "Total Projects", data: 10000 },
    { id: 2, txt: "Total Clients", data: 50000 },
    { id: 3, txt: "Active Projects", data: 30000 },
    { id: 4, txt: "Inactive Projects", data: 150000 },
  ];
  return (
    <Fragment>
    <Box className={classes.mainboxconatiner}>
      <Grid container spacing={1} className={classes.gridContainer}>
        {Earning?.map((data:any) => (
          <Grid item xs={12} md={12} lg={name==="analytics"?6:3} key={data.id}>
            <List>
              <ListItem sx={{marginTop:name==="analytics"?"25px!important":"" ,height:name==="analytics"?"25vh":""}} className={classes.listItemEarningBoxs}>
                <ListItemText
                  primary={<Typography className={classes.primarytext}>{data.txt}</Typography>}
                  secondary={<Typography className={classes.secondarytext}>{data?.data}</Typography>}
                />
                <ListItemIcon>     
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Fragment>
  )
}

export default withRouter(withStyles(Styles)(PieCharts))