import { Button, Grid } from "@mui/material";
import { Avatar, Card } from "antd";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook, BsMessenger, BsTelegram } from "react-icons/bs";
import { FaTiktok, FaUserFriends } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import InPutDataChange from "../../components/InPutDataChange";

type Props = {
  webinfo: any;
};

export default function Social({ webinfo }: Props) {
  const listSocial = [
    {
      id: 1,
      field: "zalo",
      title: "Trang Zalo",
      color: "bg-blue-500",
      logo: <SiZalo />,
      cover:
        "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    },
    {
      id: 2,
      field: "facebook",
      title: "Facebook cá nhân",
      color: "bg-blue-700",
      logo: <BsFacebook />,
      cover:
        "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      id: 3,
      field: "fanpage",
      title: "Trang Fanpage",
      color: "bg-blue-700",
      logo: <FaUserFriends />,
      cover:
        "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    },
    {
      id: 4,
      field: "messenger",
      title: "Trang Messenger",
      color: "bg-blue-600",
      logo: <BsMessenger />,
      cover:
        "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    },
    {
      id: 5,
      field: "instagram",
      title: "Trang Instragram",
      color: "bg-pink-500",
      logo: <AiOutlineInstagram />,
      cover: "https://images2.alphacoders.com/123/1230947.png",
    },
    {
      id: 6,
      field: "tiktok",
      title: "Trang Tiktok",
      color: "bg-black",
      logo: <FaTiktok />,
      cover: "https://images.alphacoders.com/112/1123670.png",
    },
    {
      id: 7,
      field: "twitter",
      title: "Trang Twitter",
      color: "bg-blue-400",
      logo: <AiOutlineTwitter />,
      cover:
        "https://vietnix.vn/wp-content/uploads/2022/07/mang-xa-hoi-twitter.webp",
    },
    {
      id: 8,
      field: "youtube",
      title: "Kênh Youtube",
      color: "bg-red-500",
      logo: <AiFillYoutube />,
      cover:
        "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    },
  ];
  return (
    <div className="h-full">
      <Card
        loading={webinfo.length === 0 ? true : false}
        className="shadow-md h-full"
        hoverable
        type="inner"
        title="Các kênh truyền thông"
        extra={
          <p className="italic hover:text-blue-500 hover:underline">Chạy QC</p>
        }
      >
        <Grid container spacing={2}>
          {listSocial.map((data) => (
            <Grid key={data.id} item xs={12} sm={3}>
              <Card
                className="shadow-md"
                hoverable
                type="inner"
                title={data.title}
                extra={
                  <Avatar
                    className={`flex text-[24px] justify-center items-center ${data.color}`}
                  >
                    {data.logo}
                  </Avatar>
                }
                cover={
                  <img
                    loading="lazy"
                    className="w-full aspect-[2/1] object-cover"
                    alt={data.cover}
                    src={data.cover}
                  />
                }
                actions={[
                  <Button
                    key="click"
                    color="success"
                    onClick={() => window.open(`${webinfo[0]?.[data.field]}`)}
                  >
                    KIỂM TRA TRẠNG THÁI
                  </Button>,
                ]}
              >
                <InPutDataChange
                  title={data.title}
                  defaultValue={webinfo[0]?.[data.field]}
                  collection="webinfo"
                  id={webinfo[0]?.id}
                  field={data.field}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
}
