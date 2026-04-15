import { Button, Grid } from "@mui/material";
import { Card } from "antd";
import { Fragment, useState } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import Album from "./Album";
import AlbumForm from "./AlbumForm";
export default function ListAlbum() {
  const { albums } = useData();
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <BreadScrumb title1="Album" title2="Danh sách album ảnh" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card
              className="shadow-md h-full"
              hoverable
              type="inner"
              title="Danh sách album ảnh"
              extra={
                <Button variant="contained" onClick={() => setOpen(true)}>
                  THÊM MỚI
                </Button>
              }
            >
              <Grid container spacing={2}>
                {albums?.map((data: any) => (
                  <Grid key={data.id} item sm={6} xs={12}>
                    <Album data={data} setOpen={setOpen} />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
      <AlbumForm data={albums} open={open} setOpen={setOpen} />
    </Fragment>
  );
}
