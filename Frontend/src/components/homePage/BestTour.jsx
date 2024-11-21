import React from "react";
import { styles } from "../../styles";

const BestTour = () => {
  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="text-center my-[40px]">
        <div className={`${styles.headerSubText}`}>Destinations</div>
        <div className={`${styles.headerText}`}>
          Most popular tours of this season
        </div>
        <div className="text-[18px]"></div>
      </div>
    </div>
  );
};

export default BestTour;
