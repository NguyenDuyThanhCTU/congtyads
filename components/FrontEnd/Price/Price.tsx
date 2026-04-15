import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

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
    @media (min-width: 768px) {
      p {
        font-size: 20px;
      }
      h1 {
        font-size: 28px;
      }
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
        @media (min-width: 768px) {
          padding-bottom: 10px;
          font-size: 16px;
        }
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
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      :hover {
        background-image: linear-gradient(-20deg, #b721ff 0%, #0087a5 100%);
        transform: scale(0.99);
      }
    }
  }
`;
export default function Price() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");
  const list = [
    {
      title: "GÓI TƯƠNG TÁC",
      price: "300.000đ ~ 2.500.000đ",
      header:
        "Tăng tương tác người dùng trên các kênh MXH Facebook, Tiktok, Instagram, Youtube...",
      item: [
        "Facebook : Tăng like bài viết, video, comment, người theo dõi, like page, thành viên nhóm...",
        "Youtube: tăng view, subscribe, giờ xem.",
        "Tiktok: Setup Shop, tăng lượt view, like, follow, quảng cáo chuyển đổi lượt view.",
        "Shopee : tăng người theo dõi shop, quảng cáo chuyển đổi lượt view.",
        "Bán các kênh Youtube, tài khoản Tiktok, Fanpage, ...có sẵn lượt like/follow.",
      ],
      footer:
        "Tương tác là người dùng thật, đảm bảo đủ số lượng trong thời gian cam kết. Bảo hành theo gói nếu có vấn đề.",
      src: "https://drive.google.com/file/d/1Y0Wc4G7rY7zIUfHr6V9TeQPkmIzKTFun/preview",
    },
    {
      title: "GÓI QUẢNG CÁO",
      price: "500.000đ ~ 5.200.000đ",
      header:
        "Tăng khả năng tiếp cận, thu hút người xem sản phẩm, thương hiệu, dịch vụ...",
      item: [
        "Gói quảng cáo cho trang Fanpage Facebook.",
        "Gói quảng cáo chuyển đổi inbox, chuyển đổi tương tác ( like, comment, inbox).",
        "Gói quảng cáo livestream Fanpage, tăng người xem, tương tác.",
        "Gói quảng cáo sản phẩm trên Tiktok Shop, Shopee, Lazada.",
        "Gói quảng cáo tăng top tìm kiếm Google dành cho Website.",
      ],
      footer:
        "Hỗ trợ viết bài, đăng bài, thiết kế hình ảnh, video phù hợp. Trả lời inbox và báo cáo thường xuyên cho khách hàng.",
      src: "https://drive.google.com/file/d/1YJaSdS4_kpjff1_GThk91Q61RnveNuKI/preview",
    },
    {
      title: "GÓI DỊCH VỤ KHÁC",
      price: "800.000đ ~ 6.500.000đ",
      header:
        "Thiết kế Website theo yêu cầu, dịch vụ nhạc chờ thương hiệu, Google doanh nghiệp...",
      item: [
        "Thiết kế Website Landing Page, Website bán hàng theo yêu cầu.",
        "Đăng ký và thu âm nhạc chờ bản quyền theo yêu cầu.",
        "Cài đặt tran Google doanh nghiệp, gắn định vị Google Map cho cửa hàng, doanh nghiệp.",
        "Thiết kế video, banner, logo, các ấn phẩm truyền thông, nhận dạng thương hiệu...",
        "Quản trị Fanpage, thiết lập Facebook.",
      ],
      footer:
        "Miễn phí hosting và tên miền, kèm dịch vụ quản trị Website trọn đời. Bàn giao bản gốc thiết kế của các ấn phẩm.",
      src: "https://drive.google.com/file/d/1I09jTAmVm00Q4txmSciR22pB6ueou9u0/preview",
    },
  ];
  return (
    <>
      <div className="p-2 md:px-[150px]">
        <Grid container spacing={3}>
          {list?.map((data: any) => (
            <Grid key={data.title} item xs={12} sm={4}>
              <AnimationOnScroll animateIn="animate__fadeInUp">
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
                      {data.item.map((item: string) => (
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
              </AnimationOnScroll>
            </Grid>
          ))}
        </Grid>
      </div>
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <AiOutlineClose />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              BẢNG BÁO GIÁ
            </Typography>
          </Toolbar>
        </AppBar>
        <iframe className="w-full h-full" src={src} allow="autoplay"></iframe>
      </Dialog>
    </>
  );
}
