import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as RouteComponent,
} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouteComponent>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </RouteComponent>
    </BrowserRouter>
  );
};
