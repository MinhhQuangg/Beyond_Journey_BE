import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import axios from "axios";

const BestTour = () => {
  const [tours, setTours] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const fetchBestTour = async () => {
      const response = await axios.get(
        "http://127.0.0.1:3000/api/v1/tours/top-5-cheap"
      );
      setTours(response.data?.data?.tours);
    };
    fetchBestTour();
  }, []);

  const handleLeftArrow = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightArrow = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const showTours = tours.slice(currentIndex, currentIndex + 3);

  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="text-center my-[40px]">
        <div
          className={`${styles.headerSubText} font-sans font-extrabold text-primary_3`}
        >
          Our Destinations
        </div>
        <div className={`${styles.headerText}`}>
          Most popular tours of this season
        </div>
      </div>
      <div
        className={`${styles.paddingXSub} flex justify-center items-center w-full gap-10`}
      >
        <div
          className={`cursor-pointer ${
            currentIndex > 0 ? "" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => handleLeftArrow()}
        >
          <ArrowCircleLeftIcon
            sx={{ width: "40px", height: "40px", color: "action" }}
          />
        </div>
        <div className="flex justify-between w-full gap-5">
          {showTours.map((el, i) => (
            <div
              key={i}
              className="flex flex-col w-[386px] shadow-md rounded-xl"
            >
              <img
                src={`http://127.0.0.1:3000${el.imageCover}`}
                alt={i}
                className=" h-[300px] hover:brightness-110"
              />
              <div className="px-5">
                <div className="mt-4 mb-2 text-[20px] font-bold">{el.name}</div>
                <div className="min-h-[60px] flex-grow">{el.summary}</div>
                <div className="grid grid-cols-2">
                  <div className="border-r-2 border-gray-950">
                    <div className="flex items-center">
                      <div className="pb-2">
                        <LocationOnIcon />
                      </div>
                      &nbsp;
                      {el.startLocation.description}
                    </div>
                    <div className="flex items-center">
                      <div className="pb-1">
                        <AccessTimeIcon />
                      </div>
                      &nbsp;
                      {el.duration} days
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-[25px]">
                    <div className="pb-1">
                      <AttachMoneyIcon fontSize="large" />
                    </div>
                    {el.price}
                  </div>
                </div>
                <div className="flex justify-center items-center w-full mt-4 mb-5">
                  <button className="bg-primary_4 hover:bg-primary_1 hover:text-white py-2 px-4 rounded-2xl">
                    EXPLORE MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`cursor-pointer ${
            currentIndex >= 2 ? "opacity-0 pointer-events-none" : ""
          }`}
          onClick={() => handleRightArrow()}
        >
          <ArrowCircleRightIcon style={{ width: "40px", height: "40px" }} />
        </div>
      </div>
    </div>
  );
};

export default BestTour;
