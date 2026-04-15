import Link from "next/link";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  z-index: 50;
  top: 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  div.bar {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 50px;
    }
    p {
      color: #cd0000;
      font-size: 28px;
    }
  }
  div.menu {
    background-image: linear-gradient(
      to right,
      #3ab5b0 0%,
      #3d99be 31%,
      #56317a 100%
    );
    p {
      width: 100%;
      color: white;
      font-weight: 500;
      padding: 8px 20px;
      border-bottom: 1px solid #b3c6ce;
    }
  }
`;
export default function MobileScreen({ logo }: { logo: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div className="bar">
        <img alt="Loading" src={logo} />
        <p className="shadow-md" onClick={() => setOpen(!open)}>
          {open ? <FaWindowClose /> : <GiHamburgerMenu />}
        </p>
      </div>
      {open && (
        <div className="menu animate__animated animate__fadeInDown">
          <p>
            <Link href="/">Trang chủ</Link>
          </p>
          <p>
            <Link href="/gioithieu">Giới thiệu</Link>
          </p>
          <p>
            <Link href="/duan">Dự án</Link>
          </p>
          <p>
            <Link href="/banggia">Bảng giá</Link>
          </p>
          <p>
            <Link href="/quytrinh">Quy trình</Link>
          </p>
          <p>
            <Link href="/tintuc">Tin tức</Link>
          </p>
          <p>
            <Link href="/lienhe">Liên hệ</Link>
          </p>
        </div>
      )}
    </Container>
  );
}
