import { IconButton } from "@mui/material";
import { Input, Popover } from "antd";
import { AiFillAudio } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useTheme } from "../../../../Context/ThemeProvider";

type Props = {};

export const Search = (props: Props) => {
  const { Search } = Input;
  const { desktop } = useTheme();
  const onSearch = (value: string) => console.log(value);
  return (
    <>
      {desktop ? (
        <div className="m-2 w-[25vw]">
          <Search
            placeholder="Tìm kiếm chức năng..."
            enterButton="Search"
            size="large"
            suffix={<AiFillAudio />}
            onSearch={onSearch}
          />
        </div>
      ) : (
        <Popover
          placement="bottom"
          title="Tìm kiếm chức năng"
          content={
            <Search
              placeholder="Tìm kiếm chức năng..."
              enterButton="Search"
              suffix={<AiFillAudio />}
              onSearch={onSearch}
            />
          }
        >
          <IconButton>
            <BsSearch className="text-[24px] hover:text-blue-500" />
          </IconButton>
        </Popover>
      )}
    </>
  );
};
