import { Input } from "antd";
import { AiFillMail, AiOutlineCloseSquare } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import styled from "styled-components";
import { useData } from "../../../Context/DataProvider";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { useTheme } from "../../../Context/ThemeProvider";
import Grid from "../Components/Grid";

const Container = styled.div`
  padding: 20px;
  form {
    p {
      padding-top: 10px;
      padding-bottom: 5px;
      color: black;
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
  div {
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: blue;
    }
  }
`;

export default function FormContact() {
  const { webinfo } = useData();
  const { desktop } = useTheme();
  const { open, setOpen } = useGlobalState();

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl">
        <button
          className="ml-auto flex p-3 text-3xl hover:text-red-500"
          onClick={() => setOpen(false)}
          aria-label="Đóng"
        >
          <AiOutlineCloseSquare />
        </button>
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} sm={6}>
              <form
                target="_blank"
                action={`https://formsubmit.co/${webinfo[0]?.gmail}`}
                method="POST"
              >
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
                <p>LỜI NHẮN CỦA BẠN :</p>
                <Input.TextArea
                  rows={4}
                  size="large"
                  name="Lời nhắn"
                  required
                  placeholder="VD: Tư vấn gói quảng cáo Facebook cho tôi..."
                />
                <button type="submit">GỬI THÔNG TIN</button>
              </form>
            </Grid>
            <Grid item xs={12} sm={6}>
              {desktop && (
                <div>
                  <h3>HÃY ĐỂ LẠI THÔNG TIN CỦA BẠN</h3>
                  <img
                    alt="Form contact"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
