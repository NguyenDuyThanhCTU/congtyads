import { Fragment } from "react";
import {
  AiFillCloseSquare,
  AiFillDatabase,
  AiFillDropboxCircle,
  AiFillGift,
  AiFillPicture,
  AiFillQuestionCircle,
  AiFillSetting,
  AiFillWechat,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsNewspaper, BsYoutube } from "react-icons/bs";
import { FaListAlt, FaUserAlt, FaUserClock } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { useAuth } from "../../../Context/AuthProvider";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { useTheme } from "../../../Context/ThemeProvider";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export const MenuList: React.FC<Props> = ({ open, setOpen }) => {
  const { user } = useAuth();
  const { desktop } = useTheme();
  const { setComponentSelect } = useGlobalState();
  const listComponents = [
    {
      name: "Thông tin Website",
      icon: <AiFillSetting />,
    },
    {
      name: "Slide trình chiếu",
      icon: <AiFillPicture />,
    },
    {
      name: "Trang đơn hàng",
      icon: <FaListAlt />,
    },
    {
      name: "Phân loại sản phẩm",
      icon: <AiFillDatabase />,
    },
    {
      name: "Danh sách sản phẩm",
      icon: <AiFillGift />,
    },
    {
      name: "Danh sách bài viết",
      icon: <BsNewspaper />,
    },
    {
      name: "Danh sách Video",
      icon: <BsYoutube />,
    },
    {
      name: "Album hình ảnh",
      icon: <AiFillPicture />,
    },
    {
      name: "Bình luận, đánh giá",
      icon: <AiFillWechat />,
    },
    {
      name: "Danh sách người dùng",
      icon: <FaUserAlt />,
    },
    {
      name: "Câu hỏi thường gặp",
      icon: <AiFillQuestionCircle />,
    },

    {
      name: "Chiến dịch SEO",
      icon: <BiWorld />,
    },
    {
      name: "Tên miền & Hosting",
      icon: <AiFillDropboxCircle />,
    },
    {
      name: "Hướng dẫn sử dụng",
      icon: <MdSupportAgent />,
    },
  ];
  return (
    <Fragment>
      <div className="w-[70vw] md:w-full h-full bg-slate-800 text-white">
        <div className="p-2 flex justify-between md:justify-around items-center border-b cursor-pointer">
          <img
            loading="lazy"
            className="w-[32px] md:w-[40px] rounded-full"
            alt="avatar"
            src={user?.photoURL}
          />
          <p className="font-bold md:text-xl">{user?.displayName}</p>
          {!desktop && (
            <AiFillCloseSquare
              className="text-[32px]"
              onClick={() => setOpen(false)}
            />
          )}
        </div>
        <p className="p-2 font-bold text-gray-400">DANH MỤC</p>
        <ul className="cursor-pointer text-white h-full flex flex-col justify-between">
          {listComponents.map((data) => (
            <li
              key={data.name}
              onClick={() => {
                setOpen(false);
                setComponentSelect(data.name);
              }}
            >
              <div className="flex items-center p-2 md:p-3 hover:bg-slate-700 hover:text-blue-500">
                {data.icon}
                <p className="font-bold ml-2">{data.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
