import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}
export type GlobalContextType = {
  componentSelect: string;
  setComponentSelect: (componentSelect: string) => void;
  id: string;
  setId: (id: string) => void;
  imgSrc: string;
  setImgSrc: (imgSrc: string) => void;
  listImgSrc: any;
  setListImgSrc: (listImgSrc: any) => void;
  editor: any;
  setEditor: (editor: any) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};
export const GlobalContext = createContext<GlobalContextType>({
  componentSelect: "",
  setComponentSelect: () => {},
  id: "",
  setId: () => {},
  imgSrc: "",
  setImgSrc: () => {},
  listImgSrc: "",
  setListImgSrc: () => {},
  editor: "",
  setEditor: () => {},
  open: false,
  setOpen: () => {},
});
export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [componentSelect, setComponentSelect] =
    useState<string>("Thông tin Website");
  const [id, setId] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [listImgSrc, setListImgSrc] = useState([]);
  const [editor, setEditor] = useState({ value: null });
  const [open, setOpen] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        componentSelect,
        setComponentSelect,
        id,
        setId,
        imgSrc,
        setImgSrc,
        listImgSrc,
        setListImgSrc,
        editor,
        setEditor,
        open,
        setOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalState = () => useContext(GlobalContext);
