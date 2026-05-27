import React, { createContext, useContext } from "react";
import { mockData } from "../lib/mockData";

interface Props {
  children: React.ReactNode;
}
export type DataContextType = {
  webinfo?: any;
  users?: any;
  slidershow: any;
  other: any;
  products: any;
  typeproducts: any;
  posts: any;
  videos: any;
  albums: any;
  comments: any;
  feedback: any;
  question: any;
};
export const DataContext = createContext<DataContextType>({
  webinfo: {},
  users: {},
  slidershow: {},
  other: {},
  products: {},
  typeproducts: {},
  posts: {},
  videos: {},
  albums: {},
  comments: {},
  feedback: {},
  question: {},
});
export const DataProvider: React.FC<Props> = ({ children }) => {
  return (
    <DataContext.Provider
      value={{
        ...mockData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
