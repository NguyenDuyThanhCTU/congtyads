import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import { Chart } from "./Chart";
import OtherList from "./OtherList";
import Revenue from "./Revenue";
import { RightChart } from "./RightChart";
import Title from "./Title";
export default function ListOther() {
  const { other } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Sản phẩm" title2="Đơn đặt hàng" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Title data={other} />
          </Grid>
          <Grid item xs={12}>
            <Revenue data={other} />
          </Grid>
          <Grid item xs={12}>
            <OtherList data={other} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Chart />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RightChart />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
