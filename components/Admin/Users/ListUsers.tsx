import { Grid } from "@mui/material";
import { Fragment } from "react";
import { useData } from "../../../Context/DataProvider";
import { BreadScrumb } from "../components/BreadCrumb";
import FeedBackTable from "./FeedBackTable";
import { LeftChart } from "./LeftChart";
import UserTable from "./UserTable";
export default function ListUsers() {
  const { users, feedback } = useData();
  return (
    <Fragment>
      <BreadScrumb title1="Khách hàng" title2="Danh sách người dùng" />
      <div className="m-3 md:m-5">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <UserTable data={users} />
          </Grid>
          <Grid item xs={12}>
            <FeedBackTable data={feedback} />
          </Grid>
          <Grid item xs={12}>
            <LeftChart />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
