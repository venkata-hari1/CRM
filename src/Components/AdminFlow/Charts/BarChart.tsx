import { Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import { BarChart } from "@mui/x-charts";
import { Styles } from './Styles'
type IProps = {
  classes: {
    [type: string]: string
  }
}
function BarCharts({ classes }: IProps) {
  const tableData = [
    { year: "2019", projects: 10 },
    { year: "2021", projects: 13 },
    { year: "2022", projects: 12 },
    { year: "2023", projects: 9 },
    { year: "2024", projects: 10 },
    { year: "2025", projects: 8 },
  ];

  // Extract the years and projects data from tableData
  const namesArray = tableData.map((item) => item.year);
  const valuesArray = tableData.map((item) => item.projects);

  // Determine min and max project values for color styling
  const minVal = Math.min(...valuesArray);
  const maxVal = Math.max(...valuesArray);

  // Map values to colors (highlighting min and max)
  const barColors = valuesArray.map((val) => {
    if (val === minVal) {
      return "red"; // Min value is red
    } else if (val === maxVal) {
      return "green"; // Max value is green
    } else {
      return "orange"; // Default color for other bars
    }
  });

  return (
    <Box className={classes.customers}>
      <BarChart
        width={650}
        height={400}
        series={[
          {
            data: valuesArray,
            id: "cId",
          },
        ]}
        xAxis={[
          {
            data: namesArray,
            scaleType: "band",
            colorMap: {
              type: "ordinal",
              values: namesArray,
              colors: barColors,
            },
          },
        ]}
      />
    </Box>
  );
}
export default withStyles(Styles)(BarCharts)