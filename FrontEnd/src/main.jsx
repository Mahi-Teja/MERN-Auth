import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/api/auth/signup" element={<Signup />}></Route>
          <Route path="/api/auth/login" element={<Login />}></Route>
        </Routes>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
