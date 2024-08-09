import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../components/InputField";
// import axios from "../api/api";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../atoms/userAtom";
export const Login = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [errorMsg, setErrorMsg] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // if (formData?.username && formData?.password) {

    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        " http://localhost:3000/api/auth/login",
        formData,
        { withCredentials: true }
      );
      const data = response.data;
      setUserInfo(data.userInfo);
      setError(false);
      console.log(userInfo);
      setTimeout(() => {
        setLoading(false);
        navigate("/user");
      }, 500);
    } catch (error) {
      setError(true);
      setErrorMsg(error.response.data.message);
      console.log(error);
    }
    // }
  };

  return (
    <div className="m-auto max-w-lg text-lg md:text-xl">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col p-3 mt-24"
      >
        <p className="font-bold text-4xl text-center m-3">Log In</p>

        <input
          required
          onChange={(e) => handleChange(e)}
          type="text"
          id="username"
          placeholder="username"
          className="p-3 bg-slate-600 rounded-lg my-3"
        />
        <input
          required
          onChange={(e) => handleChange(e)}
          type="password"
          id="password"
          placeholder="Password"
          className="p-3 bg-slate-600 rounded-lg my-3"
        />
        {error ? (
          <div className=" p-4 rounded-md  bg-orange-100">{errorMsg}</div>
        ) : null}
        <button
          className={`bg-green-900 p-3 rounded-lg my-3 disabled:opacity-60 cursor-pointer`}
        >
          {loading ? "Loading..." : "Log In"}
        </button>
      </form>
      <div className="text-center">
        <p>
          Already have an account?
          <Link className="underline mx-1" to={"/signup"}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

{
  /* <InputField
  handleChange={handleChange}
  type={"password"}
  id={"password"}
  lable={"Password"}
/>
<InputField
  handleChange={handleReEnter}
  type={"password"}
  id={"re-password"}
  lable={"Re-Enter Password"}
/> */
}
