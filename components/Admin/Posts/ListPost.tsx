import { Grid } from "@mui/material";
import { Card } from "antd";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import PostCard from "./components/PostCard";
import PostTable from "./components/PostTable";
export default function ListPost() {
  const { posts } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Bài viết" title2="Danh sách bài viết" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PostTable data={posts} />
          </Grid>
          <Grid item xs={12}>
            <Card
              className="shadow-md h-full"
              hoverable
              type="inner"
              title="Danh sách bài viết"
            >
              <Grid container spacing={2}>
                {posts?.map((data: any) => (
                  <Grid key={data.id} item sm={4} xs={12}>
                    <PostCard data={data} />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
