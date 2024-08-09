import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({ path, lable, className }) => {
  return (
    <button className={`p-3 m-2 cursor-pointer rounded-lg ${className}`}>
      <Link to={path}>{lable}</Link>
    </button>
  );
};
