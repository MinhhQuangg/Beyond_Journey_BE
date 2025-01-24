import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { styles } from "../../styles";
import { format } from "date-fns";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Checkbox, Select } from "@mui/material";

const group = [
  "Elder (60+ years)",
  "Adult (20-59 years)",
  "Youth (15-19 years)",
  "Children (5-14 years)",
];

const fee = [
  { type: "Booking Service", price: "$30" },
  { type: "Cancel Insurance", price: "$50" },
];

const BookTrip = () => {
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [date, setDate] = useState(null);
  return (
    <div className="px-[32px]">
      <div className="relative py-[25px]">
        <button className={`${styles.searchHomePage}`}>
          <span className="flex items-center">
            <CalendarMonthIcon />
            <span className="ml-2">
              {date ? format(date, "MM/dd/yyyy") : "Date"}
            </span>
          </span>
          <ArrowDropDownIcon />
        </button>
        {isOpenDate && (
          <div className="absolute z-10 w-full mt-4 rounded-md bg-white py-1">
            <div className="flex justify-center">
              <DatePicker
                selected={null}
                inline
                minDate={new Date()} // Disable past dates
              />
            </div>
          </div>
        )}
      </div>
      <div className="divide-y-2 divide-dashed">
        <div className="pb-[15px] font-bold">Time</div>
        <div>
          <div className="pt-[15px] font-bold">Tickets</div>
          {group.map((el, i) => (
            <div key={i} className="flex flex-col pt-[15px]">
              <div className="flex">
                <div>{el}</div>
                {/* <Select /> */}
              </div>
            </div>
          ))}
          <div className="pb-[15px]"></div>
        </div>
        <div>
          <div>
            <div className="pt-[15px] font-bold">Tickets</div>
            {fee.map((el, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Checkbox />
                    <div>{el.type}</div>
                  </div>
                  <div className="font-bold">{el.price}</div>
                </div>
              </div>
            ))}
            <div className="pb-[15px]"></div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[15px]">
          <button className="w-[80%] bg-primary_4 hover:bg-primary_2 hover:text-white p-2 text-[18px] rounded-2xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTrip;
