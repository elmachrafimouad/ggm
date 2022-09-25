import React from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const options = {
    series: [73, 55, 38, 20],
    colors: ["#2347B9", "#3363FF", "#8BA6FF", "#8696CA"],
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return <Chart options={options} series={options.series} type='donut' width={400} />;
}; 

export default Charts;
