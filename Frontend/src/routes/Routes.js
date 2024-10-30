import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as RouteComponent,
} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouteComponent>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </RouteComponent>
    </BrowserRouter>
  );
};
