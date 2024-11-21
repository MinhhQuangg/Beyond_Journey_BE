import React from "react";
import { styles } from "../../styles";

const AboutUs = () => {
  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="text-center my-[40px]">
        <div className={`${styles.headerSubText}`}>Our Services</div>
        <div className={`${styles.headerText}`}>Why choosing us?</div>

        <div className="text-[18px]"></div>
      </div>
    </div>
  );
};

export default AboutUs;
