import { LinkButton } from "../components/LinkButton";

function Landing() {
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
