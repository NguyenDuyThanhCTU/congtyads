import { Breadcrumbs, Link, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

type Props = {
  title1: string;
  title2: string;
};
export const BreadScrumb: React.FC<Props> = ({ title1, title2 }) => {
  return (
    <Fragment>
      <div className="p-2 border-y md:flex md:justify-between bg-white md:items-center md:p-5">
        <p className="font-bold">TRANG CHỦ</p>
        <Breadcrumbs
          separator={<MdOutlineNavigateNext />}
          aria-label="breadcrumb"
        >
          <Link underline="hover" key="2" color="inherit" href="/admin">
            {title1}
          </Link>
          <Typography key="3" color="text.primary">
            {title2}
          </Typography>
        </Breadcrumbs>
      </div>
    </Fragment>
  );
};
