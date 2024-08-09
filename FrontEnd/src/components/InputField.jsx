import React, { useState } from "react";

export const InputField = ({ type, lable, id, handleChange, value }) => {
  const [show, setShow] = useState(false);
  console.log(show);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const T = type.toLowerCase() === "password" && show ? "text" : type;
  console.log(T);
  const g = () => {};
  return (
    <>
      <input
        value={value}
        required
        onChange={(e) => (handleChange ? handleChange(e) : () => {})}
        type={T}
        id={id}
        placeholder={lable}
        className="p-3 bg-slate-600 rounded-lg my-3"
      />
      {type !== "password" ? null : (
        <button className="" onClick={(e) => handleShow(e)} type="button">
          {show ? "Hide" : "show"}
        </button>
      )}
    </>
  );
};
