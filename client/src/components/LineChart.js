import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ data }) => {
  let delayed;
  return (
    <Line
      data={data}
      options={{
        radius: 5,
        hoverRadius: 12,
        hitRadius: 15,
        tension: 0.1,
        responsive: true,
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => `$${value}`,
            },
          },
          x: {
            ticks: {
              callback: (value) => `${data.labels[value]}`.substring(4, 10),
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
