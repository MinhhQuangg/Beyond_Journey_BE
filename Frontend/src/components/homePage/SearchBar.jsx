import { React, useEffect, useRef, useState } from "react";
import MapIcon from "@mui/icons-material/Map";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SearchIcon from "@mui/icons-material/Search";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { format } from "date-fns";
import { styles } from "../../styles";
import { level } from "../../utils";

const SearchBar = () => {
  const [isOpenDifficulty, setIsOpenDifficulty] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState("Activity level");
  const [isOpenGuest, setIsOpenGuest] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenDestination, setIsOpenDestination] = useState(true);
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [date, setDate] = useState(null);
  const [destination, setDestination] = useState([]);
  const refDifficulty = useRef(null);
  const refGuest = useRef(null);
  const refDate = useRef(null);
  const refDestination = useRef(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await axios.get("http://127.0.0.1:3000/api/v1/tours");
        console.log(data.data.data.tours[0].startLocation.description);
        setDestination(data.data.data.tours);
      } catch (err) {
        console.error();
      }
    };
    fetchTours();
  }, []);

  useEffect(() => {
    const handleClose = (e) => {
      if (refDifficulty.current && !refDifficulty.current.contains(e.target)) {
        setIsOpenDifficulty(false);
      }
      if (refGuest.current && !refGuest.current.contains(e.target)) {
        setIsOpenGuest(false);
      }
      if (refDate.current && !refDate.current.contains(e.target)) {
        setIsOpenDate(false);
      }
      if (
        refDestination.current &&
        !refDestination.current.contains(e.target)
      ) {
        setIsOpenDestination(false);
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

  const handleOpenDate = () => {
    setIsOpenDate(!isOpenDate);
  };

  const handleOpenDestination = () => {
    setIsOpenDestination(!isOpenDestination);
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
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="text-center my-[40px]">
        <div className={`${styles.headerText}`}>Search Tours</div>
        <div className="text-[18px]">
          Have a dream destination in mind? Whether you want to follow your
          appetite to Tuscany or go wild in America's greatest national parks,
          our guided tour packages will get you there.
        </div>
      </div>
      <div className="flex justify-between gap-4 w-full rounded-full border-2 border-black p-[14px] mb-[30px]">
        <div className="relative" ref={refDestination}>
          <button
            className={`${styles.searchHomePage}`}
            onClick={() => handleOpenDestination()}
          >
            <span className="flex items-center">
              <MapIcon />
              <span className="ml-2">Destination</span>
            </span>
            <ArrowDropDownIcon />
          </button>
          {isOpenDestination && (
            <div className="absolute z-10 w-full mt-4 rounded-md my-1 bg-white py-1  max-h-60 overflow-y-auto">
              {destination.map((destination, index) => (
                <button
                  key={index}
                  className="block px-6 py-2 text-gray-500 hover:text-black w-full text-left !text-[18px]"
                >
                  {destination.startLocation.description}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative" ref={refDate}>
          <button
            className={`${styles.searchHomePage}`}
            onClick={() => handleOpenDate()}
          >
            <span className="flex items-center">
              <CalendarMonthIcon />
              <span className="ml-2">
                {date ? format(date, "MMMM d, yyyy") : "Date From"}
              </span>
            </span>
            <ArrowDropDownIcon />
          </button>
          {isOpenDate && (
            <div className="absolute z-10 w-full mt-4 rounded-md bg-white py-1">
              <div className="flex justify-center">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  inline
                  minDate={new Date()}
                />
              </div>
            </div>
          )}
        </div>
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
            <div className="absolute z-10 mt-4 w-full rounded-md bg-white py-1">
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
                {(countAdult === 0) & (countChildren === 0) ? "Guests" : total}
              </span>
            </span>
            <ArrowDropDownIcon />
          </button>
          {isOpenGuest && (
            <div className="absolute py-3 z-10 mt-4 bg-white px-3 w-full">
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
  );
};

export default SearchBar;
