import { Button, Grid } from "@mui/material";
import { Card, Input } from "antd";
import { Fragment, useState } from "react";
import { useData } from "../../../Context/DataProvider";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import TypeForm from "./TypeForm";
import TypeLevel1 from "./TypeLevel1";
export default function ListTypeProducts() {
  const { typeproducts } = useData();
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <BreadScrumb title1="Sản phẩm" title2="Phân loại sản phẩm" />
      <div className="m-3 md:m-5">
        <Grid container>
          <Grid item xs={12}>
            <Card
              className="shadow-md h-full"
              hoverable
              type="inner"
              title="Danh sách phân loại"
              extra={<Button onClick={() => setOpen(true)}>THÊM MỚI</Button>}
            >
              <Grid container spacing={2}>
                {typeproducts?.map((data: any) => (
                  <Grid key={data.id} item sm={4} xs={12}>
                    <TypeLevel1 data={data} />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
      <TypeForm open={open} setOpen={setOpen} data={typeproducts} />
    </Fragment>
  );
}
