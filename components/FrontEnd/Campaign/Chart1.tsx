import { Card } from "antd";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Doanh nghiệp A lên chiến dịch QC bên ADS",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "Năm 2021 - Khi chưa triển khai ADS",
      data: [
        6500000, 7200000, 8100000, 7600000, 9300000, 10500000, 9800000,
        11200000, 10100000, 11600000, 12000000, 10800000,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Năm 2022 - Khởi động chiến dịch ADS",
      data: [
        105000000, 118000000, 132000000, 145000000, 156000000, 168000000,
        182000000, 196000000, 210000000, 224000000, 238000000, 246000000,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export function Chart1() {
  return (
    <div className="h-full">
      <Card
        className="h-full shadow-md"
        hoverable
        type="inner"
        title={<p className="font-bold text-gray-400">Biểu đồ so sánh doanh thu</p>}
        extra={
          <button className="rounded bg-green-600 px-3 py-1 text-white">
            Export Data
          </button>
        }
      >
        <Line options={options} data={data} />
      </Card>
    </div>
  );
}
