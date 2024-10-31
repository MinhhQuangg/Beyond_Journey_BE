import React, { useEffect, useState } from "react";
import logo from "../assets/tourname.jpg";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navOptions } from "../utils";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { IconButton } from "@mui/material";
import { homepagePic } from "../assets";

export const NavBar = () => {
  const navigate = useNavigate();
  const [backgroundColor, setBackgrounColor] = useState("transparent");

  const handleScroll = () => {
    const y = window.scrollY;
    console.log("Current Scroll Height:", y);
    return y > 520
      ? setBackgrounColor("white")
      : setBackgrounColor("transparent");
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url(${homepagePic})`,
        backgroundRepeat: "no-repeat",
        height: "600px",
      }}
    >
      <div
        className={`${styles.paddingX} w-full flex justify-between items-center fixed bg-${backgroundColor}`}
      >
        <div>
          <Link onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="w-[180px] h-[80px]" />
          </Link>
        </div>
        <div className={`${styles.headerText} flex gap-10`}>
          {navOptions.map((el, index) => (
            <Link key={index} src="#">
              {el}
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
    </div>
  );
};
