import React from "react";
import { info } from "../../utils";

const TripInfo = ({ tour }) => {
  return (
    <div className="grid grid-cols-2 px-[16px]">
      {info.map((el) => (
        <div key={el.type} className="col-span-1 p-[16px] text-[18px]">
          <div className="flex gap-2 items-center">
            <el.icon color="primary" />
            <div>{el.type}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripInfo;
