import { Drawer, IconButton } from "@mui/material";
import { Fragment, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { useAuth } from "../../../Context/AuthProvider";
import { useTheme } from "../../../Context/ThemeProvider";
import { ChangeLanguage } from "./components/ChangeLanguage";
import { Notification } from "./components/Notification";
import { Search } from "./components/Search";
import { UserTag } from "./components/UserTag";
import { FullScreen } from "./components/FullScreen";
import { MenuList } from "./MenuList";

export default function TopHeader() {
  const { desktop } = useTheme();
  const { user, LogOut } = useAuth();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <Fragment>
      <div className="md:ml-[256px] px-2 cursor-pointer shadow-md sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center">
          {!desktop && (
            <IconButton onClick={() => setOpenMenu(!openMenu)}>
              <AiOutlineAppstore className="text-[32px] text-black hover:text-blue-500" />
            </IconButton>
          )}
          <Search />
          <ChangeLanguage />
          {desktop && <FullScreen />}
          <Notification />
          <UserTag user={user} LogOut={LogOut} />
        </div>
      </div>
      {desktop && (
        <div className="w-[17vw] h-full bg-orange-500 fixed top-0 left-0 z-50">
          <MenuList open={openMenu} setOpen={setOpenMenu} />
        </div>
      )}
      <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
        <MenuList open={openMenu} setOpen={setOpenMenu} />
      </Drawer>
    </Fragment>
  );
}
