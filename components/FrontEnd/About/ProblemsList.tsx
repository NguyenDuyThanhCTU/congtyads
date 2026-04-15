import { Grid } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 30px;
  div.content {
    background-color: white;
    margin: 20px 0px;
    padding: 5px 10px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    p {
      border-left: 1px solid gray;
      padding-left: 5px;
      font-weight: 300;
      font-size: 12px;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
`;
export default function ProblemsList() {
  const list = [
    {
      photoURL: "https://i.ibb.co/mHHqWFm/1.png",
      content:
        "Bạn đang xây dựng thương hiệu cá nhân trên Facebook, Instagram, Tiktok... nhưng lại thiếu sự lượt tương tác từ người dùng ?",
    },
    {
      photoURL: "https://i.ibb.co/KWt7ST1/2.png",
      content:
        "Bạn đang có shop, doanh nghiệp cần quảng bá trên MXH và sàn thương mại điện tử nhưng không biết triển khai chiến dịch ?",
    },
    {
      photoURL: "https://i.ibb.co/fvPYXmj/3.png",
      content:
        "Bạn muốn xây dựng Website giới thiệu công ty, bán hàng và quảng bá nó trên Google nhưng không biết quy trình làm thế nào ?",
    },
  ];
  return (
    <Container>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} sm={6}>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img
              loading="lazy"
              alt="Loading"
              src="https://i.ibb.co/VVwTnmL/Learn-More.png"
            />
          </AnimationOnScroll>
        </Grid>

        <Grid item xs={12} sm={6}>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            {list?.map((data: any) => (
              <div key={data.content} className="content">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3} sm={2.5}>
                    <img loading="lazy" alt="Loading" src={data.photoURL} />
                  </Grid>
                  <Grid item xs={9} sm={9.5}>
                    <p>{data.content}</p>
                  </Grid>
                </Grid>
              </div>
            ))}
          </AnimationOnScroll>
        </Grid>
      </Grid>
    </Container>
  );
}
