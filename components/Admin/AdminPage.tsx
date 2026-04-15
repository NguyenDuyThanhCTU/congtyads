import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthProvider";
import { useData } from "../../Context/DataProvider";
import { useGlobalState } from "../../Context/GlobalProvider";
import ListAlbum from "./AlbumPicture/ListAlbum";
import ListComments from "./Comments/ListComments";
import Header from "./Header/Header";
import ListOther from "./Order/ListOrder";
import ListPost from "./Posts/ListPost";
import ListProduct from "./Products/ListProduct";
import ListQuestion from "./Question/ListQuestion";
import SliderShow from "./SliderShow/SliderShow";
import ListTypeProducts from "./TypeProducts/ListTypeProducts";
import ListUsers from "./Users/ListUsers";
import ListVideo from "./Video/ListVideo";
import WebConfig from "./WebConfig/WebConfig";

export default function AdminPage() {
  const router = useRouter();
  const { users } = useData();
  const { user } = useAuth();
  const { componentSelect } = useGlobalState();
  const [open, setOpen] = useState<boolean>(false);

  //? Function
  const componentsSwitch = (selected: string) => {
    switch (selected) {
      case "Thông tin Website":
        return <WebConfig />;
      case "Slide trình chiếu":
        return <SliderShow />;
      case "Trang đơn hàng":
        return <ListOther />;
      case "Phân loại sản phẩm":
        return <ListTypeProducts />;
      case "Danh sách sản phẩm":
        return <ListProduct />;
      case "Danh sách bài viết":
        return <ListPost />;
      case "Danh sách Video":
        return <ListVideo />;
      case "Album hình ảnh":
        return <ListAlbum />;
      case "Bình luận, đánh giá":
        return <ListComments />;
      case "Danh sách người dùng":
        return <ListUsers />;
      case "Câu hỏi thường gặp":
        return <ListQuestion />;
      default:
        break;
    }
  };
  useEffect(() => {
    const listUsers = users
      .filter((obj: any) => {
        return obj.admin === true;
      })
      .map((data: { email: string }) => data?.email);
    if (listUsers.includes(user?.email)) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [users, user, router]);
  const lock = (
    <Dialog open={open} keepMounted>
      <DialogTitle>Quyền truy cập của bạn bị từ chối !!</DialogTitle>
      <DialogContent>
        <div>
          <p>
            Bạn không thể sử dụng trang quản lý do tài khoản của bạn không có{" "}
            <strong>QUYỀN QUẢN TRỊ.</strong>
          </p>
          <p>
            Vui lòng đăng nhập bằng tài khoản đã được{" "}
            <strong>CẤP QUYỀN QUẢN TRỊ.</strong>
          </p>
          <p>
            Nếu vẫn không thể đăng nhập hãy{" "}
            <strong className="text-blue-500 underline italic">
              liên hệ bộ phận CSKH
            </strong>
            .
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
            router.push("/");
          }}
        >
          TRANG CHỦ
        </Button>
        <Button
          onClick={() => {
            setOpen(false);
            router.push("/login");
          }}
        >
          ĐĂNG NHẬP
        </Button>
      </DialogActions>
    </Dialog>
  );
  return (
    <Fragment>
      {lock}
      <Header />
      <div className="md:ml-[17vw] bg-gray-100">
        {componentsSwitch(componentSelect)}
      </div>
    </Fragment>
  );
}
