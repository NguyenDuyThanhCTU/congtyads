import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import Social from "./components/Social";
import Tracking from "./components/Tracking";
import WebInfo from "./components/WebInfo";
import WebInfo2 from "./components/WebInfo2";

export default function WebConfig() {
  const { webinfo } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Cài đặt" title2="Thông tin Website" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Tracking />
          </Grid>
          <Grid item xs={12} sm={3}>
            <WebInfo webinfo={webinfo} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <WebInfo2 webinfo={webinfo} />
          </Grid>
          <Grid item xs={12}>
            <Social webinfo={webinfo} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
