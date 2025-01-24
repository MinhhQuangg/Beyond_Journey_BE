import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const sections = ["Overview", "Iternary", "Map", "Calendar", "Review"];
const offers = [
  "Accommodation",
  "An expert Tour Guide and professional Driver",
  "Meals (except Lunch)",
  "Hotel pickup and drop-off",
];
const notOffers = [
  "Priority access to attractions",
  "Gratuities (optional when checking out or after tour)",
  "No wine or alcohol allow",
];

const TripDetail = ({ tour }) => {
  const details = tour.description ? tour.description.split("@") : [];

  return (
    <div>
      <div className="flex justify-between gap-2">
        {sections.map((el, i) => (
          <button
            key={i}
            className="flex-1 px-[6px] py-[12px] text-[20px] border-2 rounded-full bg-primary_4"
          >
            {el}
          </button>
        ))}
      </div>
      <div className="pt-[24px]">
        <span className="text-[28px] font-bold">Overview</span>
        <div className="text-[18px] py-[12px]" style={{ wordSpacing: "0.2em" }}>
          {details.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div>
          <div className="text-[24px] font-bold">What's included</div>
          {offers.map((el, i) => (
            <div
              key={i}
              className="flex items-center text-[18px] gap-2 py-[5px]"
            >
              <div>
                <CheckIcon color="primary" />
              </div>
              <div>{el}</div>
            </div>
          ))}
          {notOffers.map((el, i) => (
            <div
              key={i}
              className="flex items-center text-[18px] gap-2 py-[5px]"
            >
              <div>
                <CloseIcon color="error" />
              </div>
              <div>{el}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[24px]">
        <span className="text-[28px]">Iternary</span>
        <div className="text-[18px] py-[12px]" style={{ wordSpacing: "0.2em" }}>
          {details.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="pt-[24px]">
        <span className="text-[28px]">Map</span>
        <div className="text-[18px] py-[12px]" style={{ wordSpacing: "0.2em" }}>
          {details.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="pt-[24px]">
        <span className="text-[28px]">Calendar</span>
        <div className="text-[18px] py-[12px]" style={{ wordSpacing: "0.2em" }}>
          {details.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="pt-[24px]">
        <span className="text-[28px]">Review</span>
        <div className="text-[18px] py-[12px]" style={{ wordSpacing: "0.2em" }}>
          {details.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
