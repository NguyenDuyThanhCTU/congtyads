import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Avatar, Popover } from "antd";
import { Fragment, useState } from "react";
import {
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { useData } from "../../../../Context/DataProvider";
import { useTheme } from "../../../../Context/ThemeProvider";
import { updateDocument } from "../../../../lib/firebase/service";

type Props = {
  user: any;
  LogOut: () => void;
};
export const UserTag: React.FC<Props> = ({ user, LogOut }) => {
  // ?Context Data
  const { users } = useData();
  const { desktop } = useTheme();
  const adminUser = users.filter((obj: any) => {
    return obj.admin === true;
  });
  const clientUser = users.filter((obj: any) => {
    return obj.admin === false;
  });
  // ? State
  const [infoUser, setInfoUser] = useState<boolean>(false);
  const [addUser, setAddUser] = useState<boolean>(false);
  const [deleteUser, setDeleteUSer] = useState<boolean>(false);
  return (
    <Fragment>
      <Popover
        placement="bottomRight"
        title={user?.displayName}
        content={
          <div className="cursor-pointer">
            <p
              className="flex items-center font-bold p-2 hover:bg-gray-200 hover:text-blue-500"
              onClick={() => setInfoUser(true)}
            >
              <BiUserCircle className="mr-2 text-[24px]" /> Thông tin
            </p>
            <p
              className="flex items-center font-bold p-2 hover:bg-gray-200 hover:text-blue-500"
              onClick={() => setAddUser(true)}
            >
              <AiOutlineUserAdd className="mr-2 text-[24px]" /> Thêm quản trị
            </p>
            <p
              className="flex items-center font-bold p-2 hover:bg-gray-200 hover:text-blue-500"
              onClick={() => setDeleteUSer(true)}
            >
              <AiOutlineUserDelete className="mr-2 text-[24px]" /> Xóa quản trị
            </p>
            <p
              className="flex items-center font-bold p-2 hover:bg-gray-200 hover:text-blue-500"
              onClick={LogOut}
            >
              <AiOutlineUserSwitch className="mr-2 text-[24px]" /> Đổi tài khoản
            </p>
            <p
              className="flex items-center font-bold p-2 hover:bg-gray-200 hover:text-blue-500"
              onClick={LogOut}
            >
              <BiLogIn className="mr-2 text-[24px]" />
              Đăng xuất
            </p>
          </div>
        }
      >
        {desktop ? (
          <div className="bg-gray-200 py-1 px-3 my-1 rounded-lg grid grid-cols-[1fr_2fr] items-center">
            <img
              loading="lazy"
              className="w-[40px] rounded-full"
              alt=""
              src={user?.photoURL}
            />
            <div>
              <p>{user?.displayName}</p>
              <p className="font-bold text-center text-red-500">
                Quản trị viên
              </p>
            </div>
          </div>
        ) : (
          <img
            loading="lazy"
            className="w-[32px] rounded-full"
            alt=""
            src={user?.photoURL}
          />
        )}
      </Popover>
      <Dialog open={infoUser} keepMounted onClose={() => setInfoUser(false)}>
        <DialogTitle>
          <div className="grid grid-cols-2 items-center">
            <img
              loading="lazy"
              className="rounded-full"
              alt="avatar"
              src={user?.photoURL}
            />
            <p>{user?.displayName}</p>
          </div>
        </DialogTitle>
        <DialogContent>
          <div>
            <p>{user?.email}</p>
            <p className="font-bold text-red-500">Quản trị viên</p>
            <p>Phone : Chưa cập nhật</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInfoUser(false)}>THOÁT</Button>
          <Button onClick={() => setInfoUser(false)}>ĐỒNG Ý</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={addUser} keepMounted onClose={() => setAddUser(false)}>
        <DialogTitle>Thêm người quản trị</DialogTitle>
        <DialogContent>
          <p className="text-[12px] text-red-500">
            Người dùng cần đăng nhập vào website mới có thể được cấp quyền quản
            trị !!
          </p>
          <ul>
            {clientUser?.map((data: any) => (
              <li
                key={data.id}
                className="p-1 mt-3 rounded-lg cursor-pointer hover:bg-gray-100 grid grid-cols-[3fr_1fr] items-center"
              >
                <div className="grid grid-cols-[1fr_3fr] items-center">
                  <Avatar alt="" src={data.photoURL} />
                  <p className="ml-2">{data.displayName}</p>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    updateDocument("users", data.id, {
                      admin: true,
                    });
                  }}
                >
                  THÊM
                </Button>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddUser(false)}>THOÁT</Button>
          <Button onClick={() => setAddUser(false)}>ĐỒNG Ý</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={deleteUser}
        keepMounted
        onClose={() => setDeleteUSer(false)}
      >
        <DialogTitle>Xóa người quản trị</DialogTitle>
        <DialogContent>
          <p className="text-[12px] text-red-500">
            Xóa quyền quản trị sẽ chuyển người quản trị thành người dùng bình
            thường !!
          </p>
          <ul>
            {adminUser?.map((data: any) => (
              <li
                key={data.id}
                className="p-1 mt-3 rounded-lg cursor-pointer hover:bg-gray-100 grid grid-cols-[3fr_1fr] items-center"
              >
                <div className="grid grid-cols-[1fr_3fr] items-center">
                  <Avatar alt="" src={data.photoURL} />
                  <p className="ml-2">{data.displayName}</p>
                </div>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    updateDocument("users", data.id, {
                      admin: false,
                    });
                  }}
                >
                  XÓA
                </Button>
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteUSer(false)}>THOÁT</Button>
          <Button onClick={() => setDeleteUSer(false)}>ĐỒNG Ý</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
