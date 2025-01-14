import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import GroupIcon from "@mui/icons-material/Group";
import MapIcon from "@mui/icons-material/Map";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { format } from "date-fns";
import { React, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles";
import { level } from "../../utils";

const Search = () => {
  const [isOpenDifficulty, setIsOpenDifficulty] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("Difficulty");
  const [selectedDestination, setSelectedDestination] = useState("Destination");
  const [isOpenGuest, setIsOpenGuest] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenDestination, setIsOpenDestination] = useState(false);
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [date, setDate] = useState(null);

  const refDifficulty = useRef(null);
  const refGuest = useRef(null);
  const refDate = useRef(null);
  const refDestination = useRef(null);
  const navigate = useNavigate();
  const [destOption, setDestOption] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await axios.get("http://127.0.0.1:3000/api/v1/tours");
        const tours = data.data.data.tours;

        const options = Array.from(
          new Set(tours.map((tour) => tour.destination))
        );

        setDestOption(options);
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

  const handleSearch = async () => {
    const queries = {
      destination:
        selectedDestination !== "Destination" ? selectedDestination : "",
      difficulty:
        selectedDifficulty !== "Difficulty"
          ? selectedDifficulty.toLowerCase()
          : "",
      date: date ? format(date, "yyyy-mm-dd") : "",
    };
    //!Remove empty object
    if (total > 0) {
      queries["maxGroupSize[gte]"] = total;
    }
    const filteredQuery = Object.fromEntries(
      Object.entries(queries).filter(([_, value]) => value)
    );
    const params = new URLSearchParams(filteredQuery);
    console.log(params.toString());
    setSelectedDestination("Destination");
    setSelectedDifficulty("Difficulty");
    setCountAdult(0);
    setCountChildren(0);
    setDate(null);
    navigate(`/tours?${params.toString()}`);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 border-2 border-gray-600 sm:rounded-3xl md:rounded-3xl xl:rounded-full gap-5 w-[95%] p-3 px-5 text-[18px] bg-white">
      <div
        className="relative md:col-start-1 md:col-span-1 lg:col-span-1"
        ref={refDestination}
      >
        <button
          className={`${styles.searchHomePage}`}
          onClick={() => handleOpenDestination()}
        >
          <span className="flex items-center">
            <MapIcon />
            <span className="ml-2 text-[18px]">{selectedDestination}</span>
          </span>
          <ArrowDropDownIcon />
        </button>
        {isOpenDestination && (
          <div className="absolute z-10 w-full mt-4 rounded-md my-1 bg-white py-1  max-h-60 overflow-y-auto">
            {destOption.map((destination, index) => (
              <button
                key={index}
                className="block px-6 py-2 text-gray-500 hover:text-black w-full text-left !text-[18px]"
                onClick={() => {
                  setSelectedDestination(destination);
                  setIsOpenDestination(false);
                }}
              >
                {destination}
              </button>
            ))}
          </div>
        )}
      </div>
      <div
        className="relative md:col-start-2 md:col-span-1 lg:col-span-1"
        ref={refDate}
      >
        <button
          className={`${styles.searchHomePage}`}
          onClick={() => handleOpenDate()}
        >
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
                selected={date ? new Date(date) : null} // Convert string to Date object when selecting
                onChange={(date) => setDate(format(date, "MMMM d, yyyy"))}
                inline
                minDate={new Date()} // Disable past dates
              />
            </div>
          </div>
        )}
      </div>
      <div
        className="relative md:col-start-1 md:col-span-1 lg:col-span-1"
        ref={refDifficulty}
      >
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
      <div
        className="relative md:col-start-2 md:col-span-1 lg:col-span-1"
        ref={refGuest}
      >
        <button
          className={`${styles.searchHomePage}`}
          onClick={() => handleOpenGuest()}
        >
          <span className="flex items-center">
            <GroupIcon />
            <span className="ml-2">
              {(countAdult === 0) & (countChildren === 0)
                ? "Guest"
                : `${total} Guest`}
            </span>
          </span>
          <ArrowDropDownIcon />
        </button>
        {isOpenGuest && (
          <div className="absolute py-3 z-10 mt-4 bg-white w-full">
            <div className="px-4 text-[18px] w-full">
              <div className="flex justify-between items-center w-full pb-3">
                <div className="flex items-center ">
                  <div className="mr-2">{countAdult}</div>
                  <div>Adult</div>
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-black font-bold text-[20px] w-[30px]  border-y-2 border-l-2 rounded-l-3xl border-black"
                    onClick={() => handleCountDecrement("adult")}
                  >
                    -
                  </button>
                  <button
                    className="text-black text-[20px] w-[30px] border-y-2 border-r-2 rounded-r-3xl border-black"
                    onClick={() => handleCountIncrement("adult")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center w-full pb-3">
                <div className="flex items-center">
                  <div className="mr-2">{countChildren}</div>
                  <div>Child</div>
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-black font-bold text-[20px] w-[30px]  border-y-2 border-l-2 rounded-l-3xl border-black"
                    onClick={() => handleCountDecrement("children")}
                  >
                    -
                  </button>
                  <button
                    className="text-black text-[20px] w-[30px] border-y-2 border-r-2 rounded-r-3xl border-black"
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
      <div className="col-span-1">
        <button
          className="text-center rounded-full border border-black p-3 w-full text-[20px] bg-primary_4  hover:bg-primary_1 hover:text-white"
          onClick={() => handleSearch()}
        >
          <span className="flex items-center">
            <SearchIcon />
            <span className="ml-2">Search</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Search;
