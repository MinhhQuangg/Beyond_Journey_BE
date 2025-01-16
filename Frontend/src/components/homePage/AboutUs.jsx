import React from "react";
import { styles } from "../../styles";
import { whyUs } from "../../utils";

const AboutUs = () => {
  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="text-center my-[40px]">
        <div
          className={`${styles.headerSubText} font-sans font-extrabold text-primary_3`}
        >
          Our Services
        </div>
        <div className={`${styles.headerText}`}>Why Choosing Us?</div>
      </div>
      <div className="flex justify-between w-full text-center gap-1">
        {whyUs.map((el, i) => (
          <div
            key={i}
            className="flex flex-col items-center w-full sm:w-[30%] md:w-[22%]"
          >
            <div className="text-[22px]">{el.reason}</div>
            <div className="my-[10px]">
              <el.icon
                color="secondary"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <div className="px-[30px] text-[18px]">{el.illustrate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
