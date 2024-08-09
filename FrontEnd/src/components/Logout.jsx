import React, { useState } from "react";
import { useResetRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/userAtom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Logout = () => {
  const resetUser = useResetRecoilState(userInfoAtom);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const HandleLogOut = async () => {
    setLoading(true);
    try {
      await axios.get("http://localhost:3000/api/auth/logout", {
        withCredentials: true,
      });
      setTimeout(() => {
        resetUser();
        navigate("/login");
        setLoading(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className="p-3 text-xl m-2 rounded-lg bg-pink-600"
        onClick={(e) => HandleLogOut(e)}
      >
        {Loading ? "Loading.." : "Log Out"}
      </button>
    </div>
  );
};
