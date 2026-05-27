import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import Grid from "../Components/Grid";

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transform: translateY(0);
  transition: transform 0.5s ease;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    transform: translateY(-1%);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  div.title {
    padding: 10px 0px;
    text-align: center;
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    p {
      color: white;
      font-weight: 600;
      font-size: 16px;
    }
    h1 {
      padding: 2px;
      font-size: 24px;
      color: white;
      font-weight: 900;
      text-shadow: 1px 1px 1px black;
    }
  }
  div.content {
    padding: 20px 20px 20px 30px;
    ul {
      list-style-type: disc;
      li {
        padding-bottom: 5px;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
  div.button {
    padding-bottom: 20px;
    display: grid;
    place-items: center;
    button {
      color: white;
      font-weight: 700;
      padding: 8px 20px;
      border-radius: 20px;
      background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    }
  }
`;

const priceList = [
  {
    title: "GÓI TƯƠNG TÁC",
    price: "300.000đ ~ 2.500.000đ",
    header:
      "Tăng tương tác người dùng trên các kênh MXH Facebook, Tiktok, Instagram, Youtube...",
    item: [
      "Facebook: tăng like bài viết, video, comment, người theo dõi, like page.",
      "Youtube: tăng view, subscribe, giờ xem.",
      "Tiktok: setup shop, tăng lượt view, like, follow.",
      "Shopee: tăng người theo dõi shop, quảng cáo chuyển đổi lượt view.",
    ],
    footer:
      "Tương tác là người dùng thật, đảm bảo đủ số lượng trong thời gian cam kết.",
    src: "https://drive.google.com/file/d/1Y0Wc4G7rY7zIUfHr6V9TeQPkmIzKTFun/preview",
  },
  {
    title: "GÓI QUẢNG CÁO",
    price: "500.000đ ~ 5.200.000đ",
    header:
      "Tăng khả năng tiếp cận, thu hút người xem sản phẩm, thương hiệu, dịch vụ.",
    item: [
      "Gói quảng cáo cho trang Fanpage Facebook.",
      "Quảng cáo chuyển đổi inbox, tương tác, livestream.",
      "Quảng cáo sản phẩm trên Tiktok Shop, Shopee, Lazada.",
      "Tối ưu tìm kiếm Google cho Website.",
    ],
    footer:
      "Hỗ trợ nội dung, thiết kế hình ảnh, video và báo cáo thường xuyên.",
    src: "https://drive.google.com/file/d/1YJaSdS4_kpjff1_GThk91Q61RnveNuKI/preview",
  },
  {
    title: "GÓI DỊCH VỤ KHÁC",
    price: "800.000đ ~ 6.500.000đ",
    header:
      "Thiết kế Website, nhạc chờ thương hiệu, Google doanh nghiệp và các dịch vụ truyền thông.",
    item: [
      "Thiết kế Website Landing Page, Website bán hàng.",
      "Đăng ký và thu âm nhạc chờ bản quyền.",
      "Cài đặt Google doanh nghiệp, Google Map.",
      "Thiết kế video, banner, logo và ấn phẩm truyền thông.",
    ],
    footer:
      "Bàn giao sản phẩm và tư vấn vận hành phù hợp với từng gói dịch vụ.",
    src: "https://drive.google.com/file/d/1I09jTAmVm00Q4txmSciR22pB6ueou9u0/preview",
  },
];

export default function Price() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <>
      <div className="p-2 md:px-[150px]">
        <Grid container spacing={3}>
          {priceList.map((data) => (
            <Grid key={data.title} item xs={12} sm={4}>
              <Container>
                <div className="title">
                  <p>{data.title}</p>
                  <h1>{data.price}</h1>
                </div>
                <div className="content">
                  <ul>
                    <li>
                      <strong>{data.header}</strong>
                    </li>
                    {data.item.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    <li>
                      <strong>{data.footer}</strong>
                    </li>
                  </ul>
                </div>
                <div className="button">
                  <button
                    onClick={() => {
                      setSrc(data.src);
                      setOpen(true);
                    }}
                  >
                    Xem chi tiết giá
                  </button>
                </div>
              </Container>
            </Grid>
          ))}
        </Grid>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex items-center gap-4 bg-blue-600 px-4 py-3 text-white">
            <button
              className="text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Đóng"
            >
              <AiOutlineClose />
            </button>
            <h2 className="text-lg font-semibold">BẢNG BÁO GIÁ</h2>
          </div>
          <iframe className="w-full flex-1" src={src} allow="autoplay"></iframe>
        </div>
      )}
    </>
  );
}
