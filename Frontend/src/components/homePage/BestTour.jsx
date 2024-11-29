import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "axios";

const BestTour = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const fetchBestTour = async () => {
      const response = await axios.get(
        "http://127.0.0.1:3000/api/v1/tours/top-5-cheap"
      );
      // console.log(response.data.data.tours);
      setTours(response.data?.data?.tours);
    };
    fetchBestTour();
  }, []);
  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="text-center my-[40px]">
        <div className={`${styles.headerSubText}`}>Destinations</div>
        <div className={`${styles.headerText}`}>
          Most popular tours of this season
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div>
          <ArrowCircleLeftIcon style={{ width: "40px", height: "40px" }} />
        </div>
        <div>
          {tours.map((el, i) => (
            <div key={i}></div>
          ))}
        </div>
        <div>
          <ArrowCircleRightIcon style={{ width: "40px", height: "40px" }} />
        </div>
      </div>
    </div>
  );
};

export default BestTour;
