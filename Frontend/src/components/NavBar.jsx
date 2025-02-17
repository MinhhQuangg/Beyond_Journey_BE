import React from "react";
import { styles } from "../styles";
import { tourname } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { navOptions } from "../utils";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { grey } from "@mui/material/colors";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.paddingXNav} w-full flex justify-between items-center sticky top-0 text-white bg-primary_1 py-[15px]`}
      style={{ zIndex: 20 }}
    >
      <div>
        <img
          src={tourname}
          alt="Logo"
          className=" md:w-[200px] md:h-[50px] w-[120px] h-[30px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
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
          <SearchIcon sx={{ color: grey[50] }} />
        </IconButton>
        <IconButton onClick={() => navigate("/login")}>
          <PersonOutlineIcon sx={{ color: grey[50] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
