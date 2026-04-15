import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { AiFillSetting } from "react-icons/ai";
import { BsShareFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

type Props = {
  data: any;
};

export default function PostCard({ data }: Props) {
  return (
    <div className="h-full">
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {data.auth?.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton>
              <AiFillSetting />
            </IconButton>
          }
          title={data.auth}
          subheader={moment(data.createdAt?.toDate()).format("DD/MM/YYYY")}
        />
        <img
          className="w-full aspect-[2/1] object-cover"
          loading="lazy"
          alt=""
          src={data.photoURL}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.subtitle}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <MdFavorite />
          </IconButton>
          <IconButton>
            <BsShareFill />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
