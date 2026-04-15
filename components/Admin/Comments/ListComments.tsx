import { Grid } from "@mui/material";
import { Card } from "antd";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import Comment from "./Comment";
import CommentsTable from "./CommentsTable";
export default function ListComments() {
  const { comments } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Khách hàng" title2="Bình luận, đánh giá" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CommentsTable data={comments} />
          </Grid>
          <Grid item xs={12}>
            <Card
              className="shadow-md h-full"
              hoverable
              type="inner"
              title="Danh sách comments"
            >
              <Grid container spacing={2}>
                {comments?.map((data: any) => (
                  <Grid key={data.id} item sm={4} xs={12}>
                    <Comment data={data} />
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
