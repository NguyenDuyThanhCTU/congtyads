import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div<{ color: string }>`
  cursor: pointer;
  padding: 20px;
  height: 100%;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: box-shadow 0.3s ease-in-out;
  border-top: 3px solid ${(props) => props.color};
  :hover {
    box-shadow: rgba(50, 50, 93, 0.5) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: box-shadow 0.3s ease-in-out;
  }
  h6 {
    text-transform: uppercase;
    color: ${(props) => props.color};
  }
  h1 {
    font-size: 16px;
    padding: 10px 0px;
    font-weight: 500;
    :hover {
      color: #4b4bff;
      text-decoration: underline;
    }
  }
  p {
    font-size: 14px;
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img {
    padding-top: 10px;
    width: 100%;
    aspect-ratio: 2 / 1;
    object-fit: cover;
  }
`;
export default function Post({ data }: { data: any }) {
  const [color, setColor] = useState("");
  useEffect(() => {
    switch (data.group) {
      case "SỰ KIỆN CÔNG TY":
        setColor("#ddd25c");
        break;
      case "HTML & CSS":
        setColor("#10a992");
        break;
      case "TIN TUYỂN DỤNG":
        setColor("#10a992");
        break;
      case "HOẠT ĐỘNG CÔNG TY":
        setColor("#1597f4");
        break;
      case "KHUYẾN MÃI HOT":
        setColor("#ff5f5f");
        break;
      case "KIẾN THỨC CHUNG":
        setColor("#2ddf00");
        break;
      default:
        break;
    }
  }, [data.group]);
  return (
    <Container color={color}>
      <h6>{data.group}</h6>
      <h1>
        <Link href={`/posts/${data.title}`}>{data.title}</Link>
      </h1>
      <p>{data.subtitle}</p>
      <img loading="lazy" alt="Loading" src={data.photoURL} />
    </Container>
  );
}
