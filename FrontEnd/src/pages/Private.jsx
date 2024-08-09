import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Login } from "./Login";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../atoms/userAtom";

export const Private = () => {
  const user = useRecoilValue(userInfoAtom);
  console.log(user);
  // check for security
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};
