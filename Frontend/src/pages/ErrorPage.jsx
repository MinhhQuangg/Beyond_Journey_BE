import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-between">
      <NavBar />
      <div className="flex flex-col items-center ">
        <p className="text-[84px]">
          404 <span className="text-red-600">Error</span>
        </p>
        <p className="text-[40px]">This page does not exist</p>
        <p className="text-[25px] mt-[19px]">
          Please return to{" "}
          <Link to="/" className="text-primary_4">
            Homepage
          </Link>
        </p>
      </div>

      {/* <img className="w-[80%] h-[50%]" src={errorimage} alt="404" /> */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
