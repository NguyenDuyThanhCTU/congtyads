import React, { createContext, useContext } from "react";
import { useGetDocument } from "../lib/firebase/service";

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
  const webinfo = useGetDocument("webinfo");
  const slidershow = useGetDocument("slidershow");
  const users = useGetDocument("users");
  const other = useGetDocument("slidershow");
  const products = useGetDocument("products");
  const typeproducts = useGetDocument("typeproducts");
  const posts = useGetDocument("posts");
  const videos = useGetDocument("videos");
  const albums = useGetDocument("albums");
  const comments = useGetDocument("comments");
  const feedback = useGetDocument("feedback");
  const question = useGetDocument("question");
  return (
    <DataContext.Provider
      value={{
        webinfo,
        slidershow,
        users,
        other,
        products,
        typeproducts,
        posts,
        videos,
        albums,
        comments,
        feedback,
        question,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
