import React from "react";
import { styles } from "../styles";
import { toursquare } from "../assets";
import { navOptions } from "../utils";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className={`${styles.paddingX} flex gap-5 justify-around items-start`}>
      <div className="flex justify-center">
        <img src={toursquare} alt="toursquare" style={{ width: "70%" }} />
      </div>
      <div className="flex flex-col gap-3">
        <div className={`${styles.sectionSubText} pb-2`}>Navigation</div>
        {navOptions.map((el, index) => (
          <Link key={index} src="#">
            {el}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className={`${styles.sectionSubText} pb-2`}>Contact</div>
        <div className="flex items-center">
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
  );
};
