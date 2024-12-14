import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as RouteComponent,
} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ErrorPage from "../pages/ErrorPage";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import HomePage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import FaqPage from "../pages/FaqPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouteComponent>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FaqPage />} />
      </RouteComponent>
    </BrowserRouter>
  );
};
