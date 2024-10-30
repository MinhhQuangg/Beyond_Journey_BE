import React from "react";
import logo from "../assets/tourname.jpg";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navOptions } from "../utils";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { IconButton } from "@mui/material";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.paddingX}>
      <div className="w-full flex justify-between items-center">
        <div>
          <Link onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" className="w-[180px] h-[100px]" />
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
