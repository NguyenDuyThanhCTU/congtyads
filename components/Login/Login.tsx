/* eslint-disable @next/next/no-img-element */
import { Alert, Button, Snackbar } from "@mui/material";
import { Divider } from "antd";
import { Fragment, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../Context/AuthProvider";
import { useTheme } from "../../Context/ThemeProvider";
const CREATE__ACCOUNT =
  "https://accounts.google.com/signup/v2/webcreateaccount?biz=false&cc=VN&dsh=S637938456%3A1667526674769263&flowEntry=SignUp&flowName=GlifWebSignIn&hl=vi&ifkv=ARgdvAt-JQBgofWgbZYZGIqOGk_zoCZ5k7KMU3gtxmL4VhcbdiRL3KR0JfSpkoATCiGKTejOU0BD";
const FORGET__PASSWORD =
  "https://accounts.google.com/signin/v2/usernamerecovery?dsh=S1895868876%3A1667526792844995&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=vi&ifkv=ARgdvAtJXbRK8N0fPG14tWYqWjMO9p1T8d3TENAYYW6cr30hO0lS2LOyfulMMJAUeb2EGafuggLMdw";

//! Style
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: url("https://wallpapercave.com/uwp/uwp1154417.gif");
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const BoxLogin = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 30px -15px #5044d0;
  margin: 5rem 2.5rem 5rem 2.5rem;
  z-index: 999;
  background-color: white;
  border-radius: 0.5rem;
  cursor: pointer;
`;
const AvatarImg = styled.div`
  box-shadow: 0px 0px 30px -15px #5044d0;
  padding: 10px;
  border-radius: 999px;
`;
export default function Login() {
  //! State
  const { desktop } = useTheme();
  const { googleSignIn } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Container>
        <BoxLogin className="md:w-[700px] grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold pt-2 text-blue-500">TRANG ĐĂNG NHẬP</p>
            <p className="mt-3">
              Đăng nhập vào <strong>{window.location.hostname} !</strong>
            </p>
            <AvatarImg className="mt-3 w-1/2 hover:bg-gradient-to-br from-violet-500 to-blue-500">
              <img
                loading="lazy"
                alt=""
                src="https://cengage.force.com/resource/1607465003000/loginIcon"
              />
            </AvatarImg>
            <div className="mt-3 w-full">
              <Button
                fullWidth
                variant="contained"
                color="error"
                onClick={googleSignIn}
              >
                LOGIN WITH GOOGLE
              </Button>
            </div>
            <div className="mt-3 w-full">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
              >
                LOGIN WITH FACEBOOK
              </Button>
            </div>
            <div className="mt-3 w-full">
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => setOpen(true)}
              >
                LOGIN WITH APPLE
              </Button>
            </div>
            <Divider />
            <p className="text-[12px]">
              Chưa có tài khoản ?{" "}
              <strong
                className="text-blue-500 underline hover:text-blue-400"
                onClick={() => window.open(CREATE__ACCOUNT)}
              >
                Đăng ký ngay.
              </strong>
            </p>
            <p
              className="pt-2 italic underline text-blue-500 hover:text-blue-400 text-sm"
              onClick={() => window.open(FORGET__PASSWORD)}
            >
              Quên mật khẩu ?
            </p>
          </div>
          {desktop && (
            <div className="ml-3 h-full">
              <img
                loading="lazy"
                className="rounded-lg w-full h-full object-cover"
                alt=""
                src="http://swinburne-vn.edu.vn/wp-content/uploads/2021/01/nganh-digital-marketing-700x466.jpg"
              />
            </div>
          )}
        </BoxLogin>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          Phương thức đăng nhập chưa được hỗ trợ !
        </Alert>
      </Snackbar>
    </Fragment>
  );
}
