import React, { useState } from "react";
import { useResetRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/userAtom";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const resetUser = useResetRecoilState(userInfoAtom);
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const HandleLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      resetUser();
      navigate("/login");
      setLoading(false);
    }, 500);
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
