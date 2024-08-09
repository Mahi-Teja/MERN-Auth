import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-center text-4xl">Lets get Started </p>

      <LinkButton
        path={"/signup"}
        lable={"Sign Up"}
        className={"bg-blue-950 text-white"}
      />
      <LinkButton
        path={"/login"}
        lable={"Log In"}
        className={"bg-green-950 text-white"}
      />
    </>
  );
}

export default Landing;
