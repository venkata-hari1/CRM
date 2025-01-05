import React from "react";
import { Chart } from "react-google-charts";
import { Styles } from './Styles';
import { Box } from '@mui/material';
import { withStyles } from "@mui/styles";
import { withRouter } from "../../../Utils/withRouter";

type IProps = {
  classes: {
    [type: string]: string;
  };
};

function PieChart1({ classes }: IProps) {
  const Earning: any = [
    { id: 1, txt: "Total Projects", data: 10000 },
    { id: 2, txt: "Total Clients", data: 50000 },
    { id: 3, txt: "Active Projects", data: 30000 },
    { id: 4, txt: "Inactive Projects", data: 150000 },
  ];

  // Convert Earning data to chart data format
  const chartData = [["Category", "Value"]]; // Header
  Earning.forEach((item: any) => chartData.push([item.txt, item.data]));

  const options = {
    title: "Projects Overview", // Plain text
    pieHole: 0.4, // Donut Chart
    is3D: false,
    pieStartAngle: 100,
    sliceVisibilityThreshold: 0.02,
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    titleFontSize:20,
    colors: ["#db345b", "#073762", "#D18A99", "#37d159", "#D1C28A"],
  };

  return (
    <Box className={classes.customers}>
      
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
     
    </Box>
  );
}

export default withRouter(withStyles(Styles)(PieChart1));
