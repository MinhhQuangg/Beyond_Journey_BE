import { React, useEffect, useRef, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { styles } from "../styles";
import MapIcon from "@mui/icons-material/Map";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import SearchIcon from "@mui/icons-material/Search";
import { level } from "../utils";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const Homepage = () => {
  const [isOpenDifficulty, setIsOpenDifficulty] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Difficulty");
  const [isOpenGuest, setIsOpenGuest] = useState(false);
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const refDifficulty = useRef(null);
  const refGuest = useRef(null);

  useEffect(() => {
    const handleClose = (e) => {
      if (refDifficulty.current && !refDifficulty.current.contains(e.target)) {
        setIsOpenDifficulty(false);
      }
      if (refGuest.current && !refGuest.current.contains(e.target)) {
        setIsOpenGuest(false);
      }
    };

    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const total = countAdult + countChildren;

  const handleOpenGuest = () => {
    setIsOpenGuest(!isOpenGuest);
  };

  const handleOpenDifficulty = () => {
    setIsOpenDifficulty(!isOpenDifficulty);
  };

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setIsOpenDifficulty(false);
  };
  const handleCountIncrement = (type) => {
    if (type === "adult") setCountAdult(countAdult + 1);
    else if (type === "children") setCountChildren(countChildren + 1);
  };
  const handleCountDecrement = (type) => {
    if (type === "adult" && countAdult > 0) setCountAdult(countAdult - 1);
    else if (type === "children" && countChildren > 0)
      setCountChildren(countChildren - 1);
  };

  return (
    <div>
      <NavBar />
      <div className={`${styles.paddingX} flex flex-col items-center`}>
        <div className="text-center my-10">
          <div className={`${styles.headerText}`}>Find your tour</div>
          <div className="text-lg">
            Have a dream destination in mind? Whether you want to follow your
            appetite to Tuscany or go wild in America's greatest national parks,
            our guided tour packages will get you there.
          </div>
        </div>
        <div className="flex flex-wrap justify-between rounded-sm 2xl:rounded-full gap-4 w-full border-2 border-black p-3 mb-[30px]">
          <button className={`${styles.searchHomePage}`}>
            <span className="flex items-center">
              <MapIcon />
              <span className="ml-2">Destination</span>
            </span>
            <ArrowDropDownIcon />
          </button>

          <span className="flex items-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "30px",
                    border: "1px solid",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // Change border color on hover
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // Change border color when focused
                  },
                }}
                views={["year", "month", "day"]}
                minDate={dayjs()}
              />
            </LocalizationProvider>
          </span>

          <div className="relative" ref={refDifficulty}>
            <button
              className={`${styles.searchHomePage}`}
              onClick={handleOpenDifficulty}
            >
              <span className="flex items-center">
                <DirectionsRunIcon />
                <span className="ml-2">{selectedDifficulty}</span>
              </span>
              <ArrowDropDownIcon />
            </button>
            {isOpenDifficulty && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white py-1">
                {level.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => handleSelectDifficulty(difficulty)}
                    className="block px-6 py-2 text-gray-500 hover:text-black w-full text-left !text-[18px]"
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative" ref={refGuest}>
            <button
              className={`${styles.searchHomePage}`}
              onClick={() => handleOpenGuest()}
            >
              <span className="flex items-center">
                <GroupIcon />
                <span className="ml-2">
                  {(countAdult === 0) & (countChildren === 0)
                    ? "Guests"
                    : total}
                </span>
              </span>
              <ArrowDropDownIcon />
            </button>
            {isOpenGuest && (
              <div className="absolute py-3 z-10 mt-1 bg-white px-3 w-full">
                <div className="px-4 text-[18px] w-full">
                  <div className="flex justify-between items-center w-full pb-3">
                    <div className="flex items-center ">
                      <div className="mr-2">{countAdult}</div>
                      <div>Adult</div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        className="text-black font-bold px-2 text-[20px] w-[40px]  border-y-2 border-l-2 rounded-l-3xl border-black"
                        onClick={() => handleCountDecrement("adult")}
                      >
                        -
                      </button>
                      <button
                        className="text-black px-2 py-1 text-[20px] w-[40px] border-y-2 border-r-2 rounded-r-3xl border-black"
                        onClick={() => handleCountIncrement("adult")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full pb-3">
                    <div className="flex items-center ">
                      <div className="mr-2">{countChildren}</div>
                      <div>Children</div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        className="text-black font-bold px-2 text-[20px] w-[40px]  border-y-2 border-l-2 rounded-l-3xl border-black"
                        onClick={() => handleCountDecrement("children")}
                      >
                        -
                      </button>
                      <button
                        className="text-black px-2 py-1 text-[20px] w-[40px] border-y-2 border-r-2 rounded-r-3xl border-black"
                        onClick={() => handleCountIncrement("children")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="text-center rounded-full border border-black w-[8vw] p-3 text-[20px]">
            <SearchIcon />
            Search
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
