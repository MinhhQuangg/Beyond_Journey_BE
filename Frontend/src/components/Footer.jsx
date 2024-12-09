import React from "react";
import { styles } from "../styles";
import { toursquare } from "../assets";
import { navOptions, usefulLinks } from "../utils";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footer = () => {
  return (
    <div className={`${styles.paddingXFooter}`}>
      <div className="flex gap-5 justify-between items-start">
        <div className="flex justify-center">
          <img src={toursquare} alt="toursquare" style={{ width: "70%" }} />
        </div>
        <div className="flex flex-col gap-3">
          <div className={`${styles.sectionSubText} pb-2`}>Navigation</div>
          {navOptions.map((option, index) => (
            <Link key={index} to={option.path}>
              {option.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className={`${styles.sectionSubText} pb-2`}>Useful Links</div>
          {usefulLinks.map((el, index) => (
            <Link key={index} src="#" className="text-[16px]">
              {el}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className={`${styles.sectionSubText} pb-2`}>Contact</div>
          <div className="flex items-center">
            <LocationOnIcon />
            <span className="ml-2 text-[16px]">United States</span>
          </div>
          <div className="flex items-center text-[16px]">
            <EmailIcon />
            <button
              href="#"
              className="ml-2"
              onClick={() =>
                (window.location.href = "mailto:tourwebsite2310@gmail.com")
              }
            >
              Email
            </button>
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        © 2024 Beyond Journey. All Rights Reserved.
      </div>
    </div>
  );
};
