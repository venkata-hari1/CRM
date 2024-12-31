import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { withRouter } from '../../../Utils/withRouter';
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';
import { AppDispatch } from '../../Redux/store/Store';
import { Revenue } from '../../Redux/Reducers/Seller';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = ({ fill, x, y, width, height }: any) => {
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
type IProps = {
  name: string,
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
  classes: {
    [type: string]: string
  },
  dispatch: AppDispatch
  selector: any
}
function TotalRevenue({ selector, classes, name, dispatch }: IProps) {
  const [value, setValue] = useState(1)
  const [type, setType] = useState('month')
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        type: type,
        year: '0'
      };
      await dispatch(Revenue({ data: data }));
    };

    fetchData();
  }, [dispatch])
  const handleDayClick = async (index: number) => {
    const data = {
      type: "week",
      year: '0'
    }
    await dispatch(Revenue({ data: data }))
    setType('week')
    setValue(index)
  };

  const handleMonthClick = async (index: number) => {
    const data = {
      type: "month",
      year: '0'
    }
    await dispatch(Revenue({ data: data }))
    setType('month')
    setValue(index)
  };

  const handleYearClick = async (index: number) => {
    const data = {
      type: "year",
      year: '0'
    }
    await dispatch(Revenue({ data: data }))
    setType('year')
    setValue(index)
  };
  const Data = selector.SellerReducer.revenue
  const handleweek = async (week: string) => {
    if (week === "1") {
      const data = {
        type: "week",
        year: '0'
      }
      await dispatch(Revenue({ data: data }))
    }
    else if (week === "2") {
      const data = {
        type: "week",
        year: '1'
      }
      await dispatch(Revenue({ data: data }))
    }
    else if (week === "3") {
      const data = {
        type: "week",
        year: '2'
      }
      await dispatch(Revenue({ data: data }))
    }
    else if (week === "4") {
      const data = {
        type: "week",
        year: '3'
      }
      await dispatch(Revenue({ data: data }))
    }
    else {
      const data = {
        type: "week",
        year: '4'
      }
      await dispatch(Revenue({ data: data }))
    }
  }
  // const filteredData = Data?.data?.chartData?.filter((entry: { revenue: number; }) => entry.revenue !== 0);
  return (
    <Box className={classes.gridContainer1}>
      <Grid container spacing={2} sx={{ padding: '2px' }}>
        <Grid item xs={12} md={12} lg={name === "analytics" ? 6 : 8}>
          <Box className={classes.TotalRevenue_text}>
            {name !== "analytics" && <Box>
              <Typography component={'div'}>Total Revenue</Typography>
              <Typography component={'div'}>
                {"₹" + (Data?.data?.totalIncome ? (Data.data.totalIncome).toLocaleString('en-IN') : "0")}
              </Typography>
            </Box>}
          
            <Box sx={{ display: 'flex', marginBottom: {lg:'5%'} }}>
              <Box>
                {type === "week" && <FormControl variant="standard" className={classes.FormControl}>
                  <InputLabel id="demo-simple-select-standard-label" className={classes.inputext}>Select Week</InputLabel>
                  <Select
                    MenuProps={{
                      disableScrollLock: true,
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Select Week"
                  >
                    <MenuItem value='First week' className={classes.inputext} onClick={() => handleweek('1')}>Current week</MenuItem>
                    <MenuItem value='Second Week' className={classes.inputext} onClick={() => handleweek('2')}>Second Week</MenuItem>
                    <MenuItem value='Third Week' className={classes.inputext} onClick={() => handleweek('3')}>Third Week</MenuItem>
                    <MenuItem value='Fourth Week' className={classes.inputext} onClick={() => handleweek('4')}>Fourth Week</MenuItem>
                    <MenuItem value='Fivth Week' className={classes.inputext} onClick={() => handleweek('5')}>Fivth Week</MenuItem>
                  </Select>
                </FormControl>}
              </Box>
            </Box>
            {name === "analytics" && <Box className={classes.revenuew}>
              <Typography component={'div'}>Total Revenue</Typography>
              <Typography component={'div'}>{"₹" + Data?.data?.totalIncome}</Typography>
            </Box>}
           
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={name === "analytics" ? 6 : 4}>
          <Box className={classes.boxbuttons}>
            <Button onClick={() => handleYearClick(3)} className={value === 3 ? classes.TotalRevenue_btn1 : classes.TotalRevenue_btn}>Year</Button>
            <Button onClick={() => handleMonthClick(1)} className={value === 1 ? classes.TotalRevenue_btn1 : classes.TotalRevenue_btn}>Month</Button>
            <Button onClick={() => handleDayClick(2)} className={value === 2 ? classes.TotalRevenue_btn1 : classes.TotalRevenue_btn}>Week</Button>
          </Box>
        </Grid>
      </Grid>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={650}
          height={350}
          data={Data?.data?.chartData}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={type === "month" ? "monthName" : type === "year" ? "year" : "dayName"} />
          <YAxis
            allowDataOverflow={true}
            tick={{
              fontSize: 10
            }}
            tickFormatter={(value) =>
              new Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",
              }).format(value)
            }
          />


          <Bar
            dataKey='revenue'
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{
              position: 'top',
              fontSize: 12,
              angle: 0,
              formatter: (value: number) => {
                return new Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(value);
              }
            }}
          >
            {Data?.data?.chartData?.map((entry: { label: string; uv: number; pv: number; amt: number; }, index: number) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>


        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default withRouter(withStyles(Styles)(TotalRevenue))
