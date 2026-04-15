import React from "react";
import styled from "styled-components";
import Question from "./Question";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h6 {
    font-size: 20px;
    color: blue;
  }
  h1 {
    padding: 10px 0px;
    font-weight: bold;
    font-size: 20px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 20px;
  }
  @media (min-width: 768px) {
    padding: 50px 100px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
      padding-bottom: 40px;
    }
  }
`;
export default function ListQuestion() {
  const list = [
    {
      question: "Dịch vụ của bạn hỗ trợ trên nền tảng nào ?",
      answer: [
        "ADS Digital Maketing hỗ trợ dịch vụ trên các kênh truyền thông MXH : Facebook, Tiktok, Instagram, Youtube,...",
        "Ngoài ra chúng tôi còn cung cấp dịch vụ cho các shop thương mại điện tử trên sàn Shopee, Lazada.",
        "Các gói thiết kế Website và quảng cáo trên Google.",
      ],
    },
    {
      question: "Thiết kế Website mất những chi phí gì ?",
      answer: [
        "Chúng tôi hoàn thiện website cho bạn trọn gói từ thiết kế đến triển khai.",
        "Bạn chỉ phải trả phí gói thiết kế từ 2.180.000đ.",
        "Trong gói này bạn được tặng miễn phí tên miền & hosting 1 năm, miễn phí thiết kế hình ảnh và viết bài cho Website.",
      ],
    },
    {
      question: "Thời hạn bảo hành dịch vụ là bao lâu ?",
      answer: [
        "Gói bảo hành có thời gian thay đổi tùy theo loại dịch vụ.",
        "Tất cả các gói bảo hành đều là 1 đổi 1 nên bạn không cần phải lo chịu thiệt.",
      ],
    },
    {
      question: "Hình thức thanh toàn và chính sách hoàn tiền như thế nào ?",
      answer: [
        "Bạn thanh toán bằng chuyển khoản hoặc tiền mặt, chúng tôi sẽ cung cấp hóa đơn cho bạn.",
        "Một số dịch vụ có thể thanh toán trước 50% và sau khi bàn giao sẽ thanh toán phần còn lại.",
        "Hoàn tiền 100% đối với những dịch vụ không đáp ứng được yêu cầu khách hàng.",
      ],
    },
    {
      question: "Có ưu đãi gì cho khách hàng thường niên không ?",
      answer: [
        "Tất nhiên là có, ngoài việc giảm giá định kỳ cho khách hàng thường niên, chúng tôi còn có những quà tặng khách hàng dịp lễ, Tết hoặc sinh nhật.",
        "Khách hàng mới cũng sẽ nhận được ưu đãi lớn khi lần đầu hợp tác với chúng tôi.",
      ],
    },
  ];
  return (
    <>
      <Container>
        <h6>QUESTION & ANSWER</h6>
        <h1>Câu hỏi thắc mắc về dịch vụ</h1>
        <p>
          Nếu bạn cần thêm thông tin về dịch vụ của chúng tôi, nhưng câu hỏi và
          câu trả lời dưới đây sẽ phần nào giúp bạn hiểu rõ hơn
        </p>
        {list?.map((data: any) => (
          <Question key={data.question} data={data} />
        ))}
      </Container>
    </>
  );
}
