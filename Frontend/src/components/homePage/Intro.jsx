import React from "react";
import { styles } from "../../styles";

import { homepagePic } from "../../assets";

export const Intro = () => {
  return (
    <div className={`${styles.paddingIntro}`}>
      <div
        className="bg-cover bg-center relative rounded-3xl"
        style={{
          backgroundImage: `url(${homepagePic})`,
          backgroundRepeat: "no-repeat",
          height: "80vh",
        }}
      >
        <div className="flex flex-col">
          <div
            className="flex justify-center items-center flex-col"
            style={{
              height: "35vh",
            }}
          >
            <span
              className={`${styles.headerSubText} font-sans font-extrabold text-primary_1 tracking-wide`}
            >
              Get Your Best Tour
            </span>
            <span
              className={`${styles.headerIntro}font-sans font-extrabold text-white tracking-wide`}
            >
              With All&nbsp;
              <div className=" inline-block text-red-600 motion-preset-bounce">
                Special
              </div>
              &nbsp;Deals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
