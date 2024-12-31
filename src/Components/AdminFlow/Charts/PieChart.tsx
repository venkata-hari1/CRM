import Header from '../Header'
import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Styles } from '../Dashboard/Styles'
import { Fragment, useEffect } from 'react'
import { PieChart, Pie, Cell } from 'recharts';
import { withRouter } from '../../../Utils/withRouter'
import { AppDispatch } from '../../Redux/store/Store'
import { AdminDashboard } from '../../Redux/Reducers/AdminReducer'
type IProps={
  name:string
  classes:{
    [type:string]:string
  },
  dispatch:AppDispatch,
  selector:{
    AdminReducer:{
      AdminDashboard:{
        data:{
          customersCount:number
          citysCount:number
          rentPropertyCount:number
          sellPropertyCount:number
        }
      }
    }
  }
 
}
function PieCharts({classes,name,dispatch,selector}:IProps) {
  useEffect(() => {
    async function getData() {
      const data = {
        country: ''
      }
      await dispatch(AdminDashboard({ data: data }))
    }
    getData()
  }, [dispatch])
  const Data=selector?.AdminReducer?.AdminDashboard
  const Earning=[
    {id:1,txt:'Propeties for Sale',name: "sale", data: Data?.data?.sellPropertyCount},
    {id:2,txt:'Propeties for Rent',name: "rent", data: Data?.data?.rentPropertyCount},
    {id:3,txt:'Total Customers',name: "customers", data: Data?.data?.customersCount },
    {id:4,txt:'Total Cities',name: "cities", data: Data?.data?.citysCount }
]
  return (
    <Fragment>
    <Box className={classes.mainboxconatiner}>
      <Grid container spacing={1} className={classes.gridContainer}>
        {Earning?.map((data) => (
          <Grid item xs={12} md={12} lg={name==="analytics"?6:3} key={data.id}>
            <List>
              <ListItem sx={{marginTop:name==="analytics"?"25px!important":"" ,height:name==="analytics"?"25vh":""}} className={classes.listItemEarningBoxs}>
                <ListItemText
                  primary={<Typography className={classes.primarytext}>{data.txt}</Typography>}
                  secondary={<Typography className={classes.secondarytext}>{data?.data}</Typography>}
                />
                <ListItemIcon>
                <Button disableRipple sx={{width:'80px',height:'80px','&:hover':{background:'white'}}}>      
                  <PieChart width={80} height={80} style={{ pointerEvents: 'none' }} >
                    <Pie
                      data={[{ name: data.txt, value:data.data }]} 
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={15}
                      fill="#8884d8"
                      
                    >
                      {Earning.map((entry:{id:number}, index: number) => (
                        <Cell
                          style={{outline: 'none'}}
                          key={`cell-${entry.id}`}
                          fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                        />
                      ))}
                    </Pie>             
                  </PieChart>
                  </Button>
              
                
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