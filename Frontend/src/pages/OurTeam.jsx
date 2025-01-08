import React from "react";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import { blackBackground, kprofile, qprofile } from "../assets";

export const OurTeam = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <div
            className="bg-cover bg-center relative w-full"
            style={{
              backgroundImage: `url(${blackBackground})`,
              backgroundRepeat: "no-repeat",
              height: "400px",
            }}
          >
            <div className="flex justify-center items-center flex-col h-full">
              <span
                className={`font-sans text-[42px] font-bold  text-white tracking-wide`}
              >
                Our Teams
              </span>
              <span className="font-sans text-[23px] text-white tracking-wide">
                BeyondJourney
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.paddingY} `}>
          <p className="text-[]">
            Meet Our Team At BeyondJourney, our team of experienced guides and
            travel enthusiasts is here to make your trip extraordinary. With
            years of travel expertise, local insights, and a deep passion for
            exploration, we’re committed to helping you discover the beauty of
            the United States.
          </p>
          <div className="flex">
            <div className="flex ">
              <img
                src={qprofile}
                alt="quang"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              Minh Quang Lieu – Lead Travel Guide Quang has been uncovering
              hidden treasures across America for over 15 years. With a love for
              hiking and photography, he specializes in crafting immersive
              outdoor adventures for travelers.
            </div>

            <div className="flex">
              <img
                src={kprofile}
                alt="khang"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              Khang Phan– Local Culture Expert Khang's deep knowledge of food,
              culture, and traditions makes his the perfect guide for urban
              explorations. He's always ready to share his favorite local spots.
            </div>
          </div>
          <p>
            Our Mission Together, we aim to inspire, guide, and connect
            travelers to the wonders of the United States, one authentic journey
            at a time.{" "}
          </p>
          <p>
            Ready to explore? Contact our team and let’s start planning your
            next adventure!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
