import React from "react";
import { LinkButton } from "./LinkButton";

export const Header = () => {
  return (
    <div>
      <nav className="flex justify-around items-center">
        <div className="cursor-default">App Name/LOGO</div>
        <ul className="flex">
          <li>
            <LinkButton path={"/user"} lable={"Home"} />
          </li>
          <li>
            <LinkButton lable={"About"} />
          </li>
          <li>
            <LinkButton path={"/user/profile"} lable={"Profile"} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
