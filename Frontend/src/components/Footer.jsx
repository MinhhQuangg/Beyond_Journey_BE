import React from "react";
import { styles } from "../styles";
import { toursquare1 } from "../assets";
import { navOptions, usefulLinks } from "../utils";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footer = () => {
  return (
    <div className={`${styles.paddingXFooter} bg-primary_1 text-white`}>
      <div className="flex gap-5 justify-between items-start">
        <div className="flex justify-center items-center">
          <img
            src={toursquare1}
            alt="toursquare1"
            className="w-[250px] h-[220px]"
          />
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
            <Link key={index} to={el.path} className="text-[16px]">
              {el.label}
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
              tourwebsite2310@gmail.com
            </button>
          </div>
        </div>
      </div>
      <div className="text-center pt-10 pb-5">
        © 2024 Beyond Journey. All Rights Reserved.
      </div>
    </div>
  );
};
