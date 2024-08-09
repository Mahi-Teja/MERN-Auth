import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import Landing from "./pages/Landing";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { Profile } from "./pages/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<Private />}>
            <Route path="/user" element={<Home />}></Route>
            <Route path="/user/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
