import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { styles } from "../styles";
import MapIcon from "@mui/icons-material/Map";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SearchIcon from "@mui/icons-material/Search";
export const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div className={`${styles.paddingX} flex flex-col flex-center`}>
        <div className="text-center my-[40px]">
          <div className={`${styles.headerText}`}>Find your tour</div>
          <div className="text-[18px]">
            Have a dream destination in mind? Whether you want to follow your
            appetite to Tuscany or go wild in America's greatest national parks,
            our guided tour packages will get you there.
          </div>
        </div>
        <div className="flex justify-between gap-4 w-full rounded-full border-2 border-black p-[14px] mb-[30px]">
          <button className={`${styles.searchHomePage}`}>
            <span className="flex items-center">
              <MapIcon />
              <span className="ml-2">Destination</span>
            </span>
            <ArrowDropDownIcon />
          </button>
          <button className={`${styles.searchHomePage}`}>
            <span className="flex items-center">
              <CalendarMonthIcon />
              <span className="ml-2">Date From </span>
            </span>
            <ArrowDropDownIcon />
          </button>
          <button className={`${styles.searchHomePage}`}>
            <span className="flex items-center">
              <DirectionsRunIcon />
              <span className="ml-2">Difficulty</span>
            </span>
            <ArrowDropDownIcon />
          </button>
          <button className={`${styles.searchHomePage}`}>
            <span className="flex items-center">
              <GroupIcon />
              <span className="ml-2">Guests</span>
            </span>
            <ArrowDropDownIcon />
          </button>
          <button className="text-center rounded-full border border-black w-[8vw] p-3 text-[20px]">
            <SearchIcon />
            Search
          </button>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
