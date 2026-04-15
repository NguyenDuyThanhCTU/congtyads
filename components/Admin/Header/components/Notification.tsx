import { IconButton } from "@mui/material";
import { Badge, Popover } from "antd";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";

type Props = {};

export const Notification = (props: Props) => {
  return (
    <>
      <Popover
        placement="bottomLeft"
        title="Thông báo mới"
        content={
          <div className="">
            <p>Người dùng mới đăng nhập.</p>
            <p>Có đơn hàng mới.</p>
            <p>Cần bổ sung thông tin.</p>
          </div>
        }
      >
        <IconButton>
          <Badge showZero count={3}>
            <AiOutlineBell className="text-[24px] hover:text-blue-500" />
          </Badge>
        </IconButton>
      </Popover>
    </>
  );
};
