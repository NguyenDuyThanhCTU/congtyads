import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import { Card } from "antd";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
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

const labels = [
  "Tiếp cận",
  "Like",
  "Comment",
  "Chia sẽ",
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
      data: labels.map(() => faker.datatype.number({ min: 5000, max: 7000 })),
    },
    {
      type: "bar" as const,
      label: "Trước khi QC ADS",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.datatype.number({ min: 500, max: 1100 })),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as const,
      label: "Sau khi QC ADS",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(() => faker.datatype.number({ min: 5000, max: 13000 })),
    },
  ],
};

export function Chart2() {
  return (
    <div className="h-full">
      <Card
        className="shadow-md h-full"
        hoverable
        type="inner"
        title={
          <p className="font-bold text-gray-400">
            Hiệu suất quảng cáo chuyển đổi
          </p>
        }
        extra={<Button color="success">Export Data</Button>}
      >
        <Chart type="bar" data={data} />
      </Card>
    </div>
  );
}
