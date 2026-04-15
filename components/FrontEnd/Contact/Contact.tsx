import { Grid } from "@mui/material";
import { Input } from "antd";
import { AiFillMail } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import styled from "styled-components";
import { useData } from "../../../Context/DataProvider";
import { useTheme } from "../../../Context/ThemeProvider";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  div.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      font-weight: bold;
      font-size: 24px;
      color: white;
    }
    div {
      margin: 10px 0px;
      width: 80px;
      height: 3px;
      background-color: white;
    }
    p {
      font-weight: 300;
      color: white;
    }
  }
  form {
    padding: 20px 0px;
    p {
      padding-top: 10px;
      padding-bottom: 5px;
      color: white;
      font-weight: bold;
      strong {
        color: #f84040;
      }
    }
    button {
      margin-top: 35px;
      padding: 10px;
      background-color: red;
      color: white;
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
  }
  @media (min-width: 768px) {
    padding: 50px 200px;
    div.title {
      h1 {
        font-size: 32px;
      }
      div {
        margin: 20px 0px;
        width: 120px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`;
export default function Contact() {
  const { webinfo } = useData();
  const { desktop } = useTheme();
  return (
    <>
      <Container>
        <div className="title">
          <h1>Kết nối với ADS Digital Maketing</h1>
          <div></div>
          <p>
            ADS luôn sẵn sàng lắng nghe và đưa ra giải pháp cho vấn đề của bạn !
          </p>
        </div>
        <form
          target="_blank"
          action={`https://formsubmit.co/${webinfo[0]?.gmail}`}
          method="POST"
        >
          <Grid container spacing={desktop ? 10 : 1}>
            <Grid item xs={12} sm={6}>
              <p>
                HỌ VÀ TÊN : <strong>*</strong>
              </p>
              <Input
                size="large"
                prefix={<FaUserEdit />}
                name="Họ và tên"
                required
                placeholder="Họ và tên..."
              />
              <p>
                SỐ ĐIỆN THOẠI : <strong>*</strong>
              </p>
              <Input
                size="large"
                prefix={<BsFillPhoneFill />}
                name="Số điện thoại"
                required
                placeholder="Số điện thoại..."
              />
              <p>HỘP THƯ EMAIL :</p>
              <Input
                size="large"
                prefix={<AiFillMail />}
                name="Email"
                placeholder="Địa chỉ Email..."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>LỜI NHẮN CỦA BẠN :</p>
              <Input.TextArea
                rows={4}
                size="large"
                name="Lời nhắn"
                required
                placeholder="VD : Tư vấn gói quảng cáo Facebook cho tôi..."
              />
              <button type="submit">GỬI THÔNG TIN</button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
