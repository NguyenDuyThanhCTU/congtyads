import React from "react";
import dynamic from "next/dynamic";

const AdminPage = dynamic(() => import("../components/Admin/AdminPage"), {
  ssr: false,
});
export default function admin() {
  return <AdminPage />;
}
