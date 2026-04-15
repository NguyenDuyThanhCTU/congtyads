import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "../../../Context/GlobalProvider";

const Container = styled.div`
  width: 100%;
  padding: 10px 150px;
  position: fixed;
  z-index: 50;
  top: 0;
  div {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    img {
      width: 70px;
    }
    ul {
      display: flex;
      li {
        margin: 0px 15px;
        padding: 5px 0px;
        font-weight: bold;
        border-bottom: 2px solid white;
        transition: border-bottom 0.4s ease-in-out;
        :hover {
          border-bottom: 2px solid blue;
        }
      }
    }
    button {
      background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      color: white;
      font-weight: bold;
      padding: 10px 20px;
      border-radius: 4px;
      :hover {
        transform: scale(0.98);
      }
    }
  }
`;
export default function DesktopScreen({ logo }: { logo: string }) {
  const { setOpen } = useGlobalState();
  return (
    <Container>
      <div>
        <img alt="Loading" src={logo} />
        <ul>
          <li>
            <Link href="/">Trang chủ</Link>
          </li>
          <li>
            <Link href="/gioithieu">Giới thiệu</Link>
          </li>
          <li>
            <Link href="/duan">Dự án</Link>
          </li>
          <li>
            <Link href="/banggia">Bảng giá</Link>
          </li>
          <li>
            <Link href="/quytrinh">Quy trình</Link>
          </li>
          <li>
            <Link href="/tintuc">Tin tức</Link>
          </li>
          <li>
            <Link href="/lienhe">Liên hệ</Link>
          </li>
        </ul>
        <button onClick={() => setOpen(true)}>Nhận tư vấn ngay !</button>
      </div>
    </Container>
  );
}
