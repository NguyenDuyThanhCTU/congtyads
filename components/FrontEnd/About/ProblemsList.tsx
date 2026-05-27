import styled from "styled-components";
import Grid from "../Components/Grid";

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
      photoURL: "https://placehold.co/240x240/ef4444/ffffff.png?text=Social",
      content:
        "Bạn đang xây dựng thương hiệu cá nhân trên Facebook, Instagram, Tiktok... nhưng lại thiếu sự lượt tương tác từ người dùng ?",
    },
    {
      photoURL: "https://placehold.co/240x240/2563eb/ffffff.png?text=Ads",
      content:
        "Bạn đang có shop, doanh nghiệp cần quảng bá trên MXH và sàn thương mại điện tử nhưng không biết triển khai chiến dịch ?",
    },
    {
      photoURL: "https://placehold.co/240x240/0f766e/ffffff.png?text=Web",
      content:
        "Bạn muốn xây dựng Website giới thiệu công ty, bán hàng và quảng bá nó trên Google nhưng không biết quy trình làm thế nào ?",
    },
  ];
  return (
    <Container>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} sm={6}>
          <img
            loading="lazy"
            alt="Loading"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {list?.map((data: any) => (
            <div key={data.content} className="content">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3} sm={3}>
                  <img loading="lazy" alt="Loading" src={data.photoURL} />
                </Grid>
                <Grid item xs={9} sm={9}>
                  <p>{data.content}</p>
                </Grid>
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
