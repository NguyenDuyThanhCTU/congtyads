import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import ProductTable from "./ProductTable";
import TotalData from "./TotalData";
export default function ListProduct() {
  const { products } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Sản phẩm" title2="Quản lý sản phẩm" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalData data={products} />
          </Grid>
          <Grid item xs={12}>
            <ProductTable data={products} />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
