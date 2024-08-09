import React from "react";

export const SubmitButton = ({ lable, className }) => {
  return (
    <button
      className={`bg-green-900 p-3 rounded-lg my-3 disabled:opacity-60 cursor-pointer ${className}`}
    >
      {lable}
    </button>
  );
};
