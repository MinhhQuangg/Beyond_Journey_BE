import React from "react";
import { styles } from "../styles";
import logo from "../assets/tourname.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { navOptions } from "../utils";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.paddingXNav} w-full flex justify-between items-center fixed text-white bg-primary_3`}
      style={{ zIndex: 20 }}
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
  );
};

export default NavBar;
