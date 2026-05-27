import { Card } from "antd";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = [
  "Tiếp cận",
  "Like",
  "Comment",
  "Chia sẻ",
  "Theo dõi",
  "Lượt xem",
  "Giờ xem",
  "Đăng ký",
  "Tương tác",
  "Tin nhắn",
  "Cuộc gọi",
  "Đơn hàng",
];

const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Chênh lệch chuyển đổi",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [5200, 5400, 6100, 5800, 6300, 6500, 6700, 6200, 6900, 6600, 6400, 7000],
    },
    {
      type: "bar" as const,
      label: "Trước khi QC ADS",
      backgroundColor: "rgb(75, 192, 192)",
      data: [650, 720, 810, 940, 760, 880, 910, 1020, 970, 1080, 830, 690],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as const,
      label: "Sau khi QC ADS",
      backgroundColor: "rgb(53, 162, 235)",
      data: [5600, 6800, 7100, 8400, 9300, 10100, 9600, 10800, 11600, 12000, 12400, 13000],
    },
  ],
};

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

export function Chart2() {
  return (
    <div className="h-full">
      <Card
        className="h-full shadow-md"
        hoverable
        type="inner"
        title={<p className="font-bold text-gray-400">Hiệu suất quảng cáo chuyển đổi</p>}
        extra={
          <button className="rounded bg-green-600 px-3 py-1 text-white">
            Export Data
          </button>
        }
      >
        <Chart type="bar" options={options} data={data} />
      </Card>
    </div>
  );
}
