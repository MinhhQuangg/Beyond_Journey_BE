import React, { useEffect, useState } from "react";
import logo from "../assets/tourname.jpg";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { IconButton } from "@mui/material";

import { blackimage, homepagePic } from "../assets";
import { navOptions } from "../utils";

const coverHeight = 100;

export const NavBar = () => {
  const navigate = useNavigate();
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const threshold = window.innerHeight * 0.1;
      if (y > threshold) setBackgroundColor("white");
      else setBackgroundColor("transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-cover bg-fixed bg-center relative"
      style={{
        backgroundImage: `url(${homepagePic})`,
        backgroundRepeat: "no-repeat",
        height: `${coverHeight}vh`,
      }}
    >
      <div className="flex flex-col">
        <div
          className={`${styles.paddingXNav} w-full flex justify-between items-center fixed `}
          style={{ backgroundColor, zIndex: 20 }}
        >
          <div>
            <Link onClick={() => navigate("/")}>
              <img src={logo} alt="Logo" className="w-[180px] h-[80px]" />
            </Link>
          </div>
          <div className={`${styles.headerNav} flex gap-14`}>
            {navOptions.map((option, index) => (
              <Link key={index} to={option.path}>
                {option.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={() => navigate("/login")}>
              <PersonOutlineIcon />
            </IconButton>
          </div>
        </div>

        <div
          className="flex justify-center items-center flex-col"
          style={{
            height: "55vh",
          }}
        >
          <span className="text-[48px] text-bold ">
            Get your best tour today
          </span>
          <span className="text-[60px] text-bold tracking-wider">
            With All&nbsp;
            <div className=" inline-block text-red-500">Special</div>
            &nbsp;Deals
          </span>
        </div>

        <div className="absolute top-[50vh] left-[40vw]" style={{ zIndex: 5 }}>
          <img
            src={blackimage}
            alt="black-image"
            className="h-[50vh] w-[20vw]"
          />
        </div>
        <div className="absolute top-[55vh] left-[23vw]" style={{ zIndex: 4 }}>
          <img
            src={blackimage}
            alt="black-image"
            className="h-[45vh] w-[20vw]"
          />
        </div>
        <div className="absolute top-[55vh] right-[23vw]" style={{ zIndex: 3 }}>
          <img
            src={blackimage}
            alt="black-image"
            className="h-[45vh] w-[20vw]"
          />
        </div>
        <div className="absolute top-[60vh] left-[8vw]" style={{ zIndex: 2 }}>
          <img
            src={blackimage}
            alt="black-image"
            className="h-[40vh] w-[20vw]"
          />
        </div>
        <div className="absolute top-[60vh] right-[8vw]" style={{ zIndex: 1 }}>
          <img
            src={blackimage}
            alt="black-image"
            className="h-[40vh] w-[20vw]"
          />
        </div>
      </div>
    </div>
  );
};
