import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import ListSlide from "./ListSlide";

export default function SliderShow() {
  const { slidershow } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Cài đặt" title2="Slide trình chiếu" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ListSlide slidershow={slidershow} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
