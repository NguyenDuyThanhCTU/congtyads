import { Popover } from "antd";
import { useTheme } from "../../../../Context/ThemeProvider";

type Props = {};

export const ChangeLanguage = (props: Props) => {
  const { desktop } = useTheme();
  return (
    <>
      <Popover
        placement="bottom"
        title="Change Language"
        content={
          <div className="cursor-pointer">
            <div className="p-2 flex hover:bg-gray-200">
              <img
                loading="lazy"
                className="w-[24px] rounded-sm"
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png"
              />
              <p className="ml-2">Tiếng Việt</p>
            </div>
            <div className="p-2 flex hover:bg-gray-200">
              <img
                loading="lazy"
                className="w-[24px]"
                alt=""
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png"
              />
              <p className="ml-2">English</p>
            </div>
          </div>
        }
      >
        {desktop ? (
          <div className="flex items-center">
            <strong className="mr-3">Đổi ngôn ngữ</strong>
            <img
              loading="lazy"
              className="w-[24px]"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/299/299728.png"
            />
          </div>
        ) : (
          <img
            loading="lazy"
            className="w-[24px]"
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/299/299728.png"
          />
        )}
      </Popover>
    </>
  );
};
