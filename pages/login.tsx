import React from "react";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("../components/Login/Login"), {
  ssr: false,
});
export default function login() {
  return <Login />;
}
