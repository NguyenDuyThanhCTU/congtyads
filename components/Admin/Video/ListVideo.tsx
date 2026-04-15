import { Grid } from "@mui/material";
import { Card } from "antd";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import Video from "./Video";
import VideoTable from "./VideoTable";
export default function ListVideo() {
  const { videos } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Video" title2="Danh sách video" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <VideoTable data={videos} />
          </Grid>
          <Grid item xs={12}>
            <Card
              className="shadow-md h-full"
              hoverable
              type="inner"
              title="Danh sách video"
            >
              <Grid container spacing={2}>
                {videos?.map((data: any) => (
                  <Grid key={data.id} item sm={4} xs={12}>
                    <Video data={data} />
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
