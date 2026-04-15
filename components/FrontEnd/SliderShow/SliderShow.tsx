import { BsCheck2Circle } from "react-icons/bs";
import styled from "styled-components";
import { useGlobalState } from "../../../Context/GlobalProvider";
import ListImg from "./ListImg";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    padding: 100px;
    grid-template-columns: repeat(2, 1fr);
  }
  div.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    h1 {
      color: white;
      font-weight: bold;
      font-size: 24px;
    }
    p {
      padding: 5px 0px;
      color: white;
      font-weight: 400;
      display: flex;
      strong {
        padding: 5px 10px;
      }
    }
    button {
      margin: 20px 10px;
      padding: 5px 15px;
      color: white;
      font-weight: bold;
      font-size: 20px;
      border: 1px solid white;
      border-radius: 20px;
      :hover {
        background: rgba(99, 90, 255, 0.5);
        transform: scale(0.98);
      }
    }
    @media (min-width: 768px) {
      h1 {
        padding-bottom: 40px;
        font-size: 34px;
      }
    }
  }
`;
export default function SliderShow() {
  const { setOpen } = useGlobalState();
  return (
    <Container>
      <div className="content animate__animated animate__bounceInLeft">
        <h1>
          Digital Marketing - Kết nối và nâng tầm giá trị thương hiệu cho doanh
          nghiệp bạn.
        </h1>
        <p>
          <strong>
            <BsCheck2Circle />
          </strong>
          Gói dịch vụ tương tác MXH Facebook, Tiktok, Instagram... Cung cấp các
          tài khoản đã có sẵn lượt tương tác.
        </p>
        <p>
          <strong>
            <BsCheck2Circle />
          </strong>
          Gói chạy Quảng cáo đa nền tảng từ MXH đến các trang thương mại điện tử
          Shopee, Lazada.
        </p>
        <p>
          <strong>
            <BsCheck2Circle />
          </strong>
          Thiết kế Landing Page, Economics Website theo yêu cầu, hỗ trợ SEO top
          từ khóa và Google ADS.
        </p>
        <p>
          <strong>
            <BsCheck2Circle />
          </strong>
          Cung cấp các dịch vụ Google doanh nghiệp, Google Maps, thu âm nhạc chờ
          tổng đài.
        </p>
        <p>
          <strong>
            <BsCheck2Circle />
          </strong>
          Phù hợp với mọi ngành nghề, có quy trình, hợp đồng rõ ràng, xuất hóa
          đơn bán hàng cho doanh nghiệp.
        </p>
        <button onClick={() => setOpen(true)}>Đăng ký tư vấn →</button>
      </div>
      <ListImg />
    </Container>
  );
}
