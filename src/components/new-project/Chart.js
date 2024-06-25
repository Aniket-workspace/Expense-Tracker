import Chart from "react-apexcharts";

const options = {
  labels: ["Income", "Expense"],
  colors: ["#26a69a","#ff7043"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#26a69a","#ff7043"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export default function TransactionChartSummary({expense = 100, income = 100}) {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={"150%"}
      height={"150%"}
    />
  );
}
