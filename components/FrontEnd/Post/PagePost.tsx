import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useData } from "../../../Context/DataProvider";
import Post from "./Post";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogView = styled.div<{ color: string }>`
  padding: 20px;
  height: 100%;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: box-shadow 0.3s ease-in-out;
  border-top: 3px solid ${(props) => props.color};
  h6 {
    text-transform: uppercase;
    color: ${(props) => props.color};
  }
  h1 {
    padding: 10px 0px;
    color: black;
    font-weight: 500;
    font-size: 1.8rem;
  }
  img {
    width: 100%;
  }
`;
export default function PagePost({ title }: { title: any }) {
  const { posts } = useData();
  const data = posts?.filter((obj: any) => {
    return obj.title === title;
  });
  const [color, setColor] = useState("");
  useEffect(() => {
    switch (data[0]?.group) {
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
  }, [data[0]?.group]);
  return (
    <div className="m-5 md:m-20">
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <BlogView color={color}>
            <h6>{data[0]?.group}</h6>
            <h1>{data[0]?.title}</h1>
            <h3>{data[0]?.subtitle}</h3>
            <img loading="lazy" alt="Loading" src={data[0]?.photoURL} />
            <ReactQuill
              value={data[0]?.editor?.value}
              readOnly={true}
              theme={"bubble"}
            />
          </BlogView>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Grid container spacing={2}>
            {posts?.map((data: any) => (
              <Grid key={data.id} item xs={12}>
                <Post data={data} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
