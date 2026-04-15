import React from "react";
import { useData } from "../../../Context/DataProvider";
import { useTheme } from "../../../Context/ThemeProvider";
import DesktopScreen from "./DesktopScreen";
import FormContact from "./FormContact";
import MobileScreen from "./MobileScreen";

export default function Header() {
  const { webinfo } = useData();
  const { desktop } = useTheme();
  return (
    <>
      {desktop ? (
        <DesktopScreen logo={webinfo[0]?.logo} />
      ) : (
        <MobileScreen logo={webinfo[0]?.logo} />
      )}
      <FormContact />
    </>
  );
}
