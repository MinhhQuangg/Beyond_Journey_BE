import React from "react";
import { styles } from "../../styles";

const BestReview = () => {
  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="text-center my-[40px]">
        <div className={`${styles.headerSubText}`}>Testimonials</div>
        <div className={`${styles.headerText}`}>Our Guests' Top Reviews</div>
        <div className="text-[18px]"></div>
      </div>
    </div>
  );
};

export default BestReview;
