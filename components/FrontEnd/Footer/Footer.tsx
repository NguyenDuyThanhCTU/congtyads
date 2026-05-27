import { AiFillMail, AiFillTwitterSquare } from "react-icons/ai";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import {
  FaBlenderPhone,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkedAlt,
  FaSitemap,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import styled from "styled-components";
import { useData } from "../../../Context/DataProvider";
import Grid from "../Components/Grid";
import CopyRight from "./CopyRight";

const Container = styled.div`
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  padding: 20px 10px;
  div.info {
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-weight: 300;
    border-bottom: 1px dashed white;
    img {
      width: 180px;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-size: 32px;
        margin: 10px 5px;
      }
    }
  }
  div.contact {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    h1 {
      font-weight: bold;
      font-size: 18px;
      color: white;
      padding: 5px;
    }
    p {
      width: 100%;
      display: flex;
      align-items: center;
      font-weight: 300;
      color: white;
      padding: 2px 10px;
      border-bottom: 1px dashed white;
      span {
        font-size: 24px;
        margin-right: 10px;
      }
    }
  }
  div.payment {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    h1 {
      font-weight: bold;
      font-size: 18px;
      color: white;
      padding: 5px;
    }
    div {
      padding: 10px 0px;
      p {
        padding-left: 20px;
        width: 100%;
        font-weight: 300;
        color: white;
      }
    }
  }
  @media (min-width: 768px) {
    div.info {
      border-bottom: none;
      border-right: 1px dashed white;
    }
  }
`;
export default function Footer() {
  const { webinfo } = useData();
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div className="info">
              <img loading="lazy" alt="Loading" src={webinfo[0]?.logo} />
              <p>
                Nhiều năm kinh nghiệm trong lĩnh vực Digital Maketing và thiết
                kế Website
              </p>
              <div>
                <p>
                  <FaFacebookSquare />
                </p>
                <p>
                  <FaYoutubeSquare />
                </p>
                <p>
                  <FaInstagramSquare />
                </p>
                <p>
                  <FaTwitterSquare />
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="contact">
              <h1>Thông tin liên hệ</h1>
              <p>
                <span>
                  <FaMapMarkedAlt />
                </span>
                Trụ sở : 306E, Đường Hoàng Quốc Việt, Phường Tân An, Thành phố
                Cần Thơ
              </p>

              <p>
                <span>
                  <FaBlenderPhone />
                </span>
                Tổng đài : 091 190 6349 ( 07:30~17:00 T2-T7, 08:00~12:00 CN)
              </p>
              <p>
                <span>
                  <BsFillPhoneVibrateFill />
                </span>
                Hotline : 0707 56 56 56 - 091 190 6349
              </p>
              <p>
                <span>
                  <AiFillMail />
                </span>
                Email : ungdungtruyenthongads@gmail.com
              </p>
              <h1>Tuyển dụng</h1>
              <p>
                <span>
                  <BsFillPhoneVibrateFill />
                </span>
                Hotline : 091 190 6349
              </p>
              <p>
                <span>
                  <AiFillMail />
                </span>
                Hộp thư : nhansuctyads@gmail.com
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="payment">
              <h1>Thông tin thanh toán</h1>
              <div>
                <p>○ Số tài khoản : 74110000826836</p>
                <p>
                  ○ Ngân hàng : Ngân hàng TM CP Đầu Tư và Phát Triển Việt Nam –
                  BIDV CN Cần Thơ
                </p>
                <p>○ Chủ tài khoản : LÊ THỊ HỒNG THƠ</p>
              </div>
              <div>
                <p>○ Số tài khoản : 13309737</p>
                <p>○ Ngân hàng : Ngân hàng TMCP Á Châu – ACB CN Cần Thơ</p>
                <p>○ Chủ tài khoản : LÊ THỊ HỒNG THƠ</p>
              </div>
              <div>
                <p>○ Số tài khoản : 101871809471</p>
                <p>○ Ngân hàng : Ngân hàng Vietinbank Cần Thơ</p>
                <p>○ Chủ tài khoản : LÊ THỊ HỒNG THƠ</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <CopyRight />
    </>
  );
}
