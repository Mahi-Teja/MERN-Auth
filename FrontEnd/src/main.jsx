import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import Landing from "./pages/Landing";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* -----------private routes------- */}
          <Route path="" element={<Private />}>
            <Route path="/user" element={<Home />}></Route>
            <Route path="/user/profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
