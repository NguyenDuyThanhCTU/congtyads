import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.bubble.css";
import styled from "styled-components";
import { useData } from "../../../Context/DataProvider";
import Grid from "../Components/Grid";
import Post from "./Post";

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

const getGroupColor = (group?: string) => {
  switch (group) {
    case "SỰ KIỆN CÔNG TY":
      return "#ddd25c";
    case "HTML & CSS":
    case "TIN TUYỂN DỤNG":
      return "#10a992";
    case "HOẠT ĐỘNG CÔNG TY":
      return "#1597f4";
    case "KHUYẾN MÃI HOT":
      return "#ff5f5f";
    case "KIẾN THỨC CHUNG":
      return "#2ddf00";
    default:
      return "#1597f4";
  }
};

export default function PagePost({ title }: { title: string }) {
  const { posts } = useData();
  const post = posts?.find((obj: any) => obj.title === title);
  const color = getGroupColor(post?.group);

  return (
    <div className="m-5 md:m-20">
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <BlogView color={color}>
            <h6>{post?.group}</h6>
            <h1>{post?.title}</h1>
            <h3>{post?.subtitle}</h3>
            <img loading="lazy" alt="Loading" src={post?.photoURL} />
            <ReactQuill value={post?.editor?.value} readOnly theme="bubble" />
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
