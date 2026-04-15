import { IconButton } from "@mui/material";
import { BiFullscreen } from "react-icons/bi";

type Props = {};

export const FullScreen = (props: Props) => {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  return (
    <>
      <div className="flex items-center" onClick={toggleFullScreen}>
        <strong className="hover:text-blue-500 hover:underline">
          Chế độ Full màn hình
        </strong>
        <IconButton>
          <BiFullscreen className="text-[24px] hover:text-blue-500" />
        </IconButton>
      </div>
    </>
  );
};
