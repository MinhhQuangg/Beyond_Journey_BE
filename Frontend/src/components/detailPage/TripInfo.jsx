import React from "react";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PlaceIcon from "@mui/icons-material/Place";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LanguageIcon from "@mui/icons-material/Language";
import GroupsIcon from "@mui/icons-material/Groups";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ElderlyIcon from "@mui/icons-material/Elderly";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MovingIcon from "@mui/icons-material/Moving";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const TripInfo = ({ tour }) => {
  return (
    <div className="grid grid-cols-2 px-[16px]">
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <HolidayVillageIcon color="primary" />
            Accomodation
          </div>
          <div>5 Star Hotel</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <PlaceIcon color="primary" />
            Destination
          </div>
          <div>{tour.destination}</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <FlightTakeoffIcon color="primary" />
            Departure City
          </div>
          <div>{tour?.startLocation?.description}</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <FlightLandIcon color="primary" />
            Arrival City
          </div>
          <div>{tour?.startLocation?.description}</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <TipsAndUpdatesIcon color="primary" />
            Guide
          </div>
          <div>Guided</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <LanguageIcon color="primary" />
            Language
          </div>
          <div>English, Vietnamese</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <ChildCareIcon color="primary" />
            Min Age
          </div>
          <div> 5 </div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <ElderlyIcon color="primary" />
            Max Age
          </div>
          <div>65</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <GroupsIcon color="primary" />
            Group Size
          </div>
          <div>3 - {tour.maxGroupSize} People</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <NavigationIcon color="primary" />
            Address
          </div>
          <div>{tour?.startLocation?.address}</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <LocalDiningIcon color="primary" />
            Meals
          </div>
          <div>Breakfast and Dinner</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <EventAvailableIcon color="primary" />
            Tour Availability
          </div>
          <div>Available</div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <MovingIcon color="primary" />
            Difficulty
          </div>
          <div>
            {tour?.difficulty
              ? tour.difficulty[0].toUpperCase() + tour.difficulty.slice(1)
              : "N/A"}
          </div>
        </div>
      </div>
      <div className="col-span-1 p-[16px] text-[18px]">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center text-gray-500">
            <DirectionsBusIcon color="primary" />
            Transportation
          </div>
          <div>Bus</div>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
