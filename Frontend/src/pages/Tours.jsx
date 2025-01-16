import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { alphaDescent, alphaInscent, blackBackground } from "../assets";
import { styles } from "../styles";
import Search from "../components/common/Search";
import axios from "axios";
import { Checkbox, Rating, Slider } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

const ratings = [5, 4, 3, 2, 1];
const durations = ["0-3 days", "3-5 days", "> 5 days"];
const sortTours = (tours, isDescending) => {
  return tours.sort((a, b) => {
    if (a.name < b.name) return isDescending ? 1 : -1;
    if (a.name > b.name) return isDescending ? -1 : 1;
    return 0;
  });
};

const Tours = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [tours, setTours] = useState([]);
  const [topTours, setTopTours] = useState([]);
  const [range, setRange] = useState([100, 3000]);
  const [selectRating, setSelectRating] = useState([]);
  const [selectDuration, setSelectDuration] = useState("");
  const [descent, setDescent] = useState(false);
  const handleChange = (newValue) => {
    setRange(newValue);
  };
  const handleRatingChange = (event, rating) => {
    if (event.target.checked) {
      setSelectRating((prevRatings) => [...prevRatings, rating]);
    } else {
      setSelectRating((prevRatings) => prevRatings.filter((r) => r !== rating));
    }
  };

  const handleDurationChange = (event) => {
    const { value } = event.target;
    if (selectDuration === value) {
      setSelectDuration("");
    } else {
      setSelectDuration(value);
    }
  };

  useEffect(() => {
    const fetchTopTour = async () => {
      const response = await axios.get(
        "http://127.0.0.1:3000/api/v1/tours/top-5-cheap?limit=3"
      );
      const tours = response.data?.data?.tours;
      const topTour = tours.slice(0, 4);
      setTopTours(topTour);
    };
    fetchTopTour();
  }, []);
  useEffect(() => {
    const fetchTour = async () => {
      const minPrice = range[0];
      const maxPrice = range[1];
      const ratingFilter =
        selectRating.length > 0
          ? `&ratingsAverage[gte]=${Math.min(...selectRating)}`
          : "";
      let durationFilter = "";
      if (selectDuration) {
        if (selectDuration === "0-3 days") {
          durationFilter = `duration[gte]=0&duration[lte]=3`;
        } else if (selectDuration === "3-5 days") {
          durationFilter = `duration[gte]=3&duration[lte]=5`;
        } else if (selectDuration === "> 5 days") {
          durationFilter = `duration[gte]=5`;
        }
      }
      const response = await axios.get(
        `http://127.0.0.1:3000/api/v1/tours?${searchParams.toString()}&price[gte]=${minPrice}&price[lte]=${maxPrice}${ratingFilter}${
          durationFilter ? `&${durationFilter}` : ""
        }`
      );
      const fetchedTours = response.data?.data?.tours;
      const sortedTours = sortTours(fetchedTours, descent);
      setTours(sortedTours);
    };
    fetchTour();
  }, [searchParams, range, selectRating, selectDuration, descent]);
  return (
    <div className="flex flex-col">
      <NavBar />
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${blackBackground})`,
          backgroundRepeat: "no-repeat",
          height: "40vh",
        }}
      >
        <div className="flex flex-col relative h-full">
          <div className="flex justify-center items-center flex-col h-[35vh]">
            <span className="font-sans text-[80px] font-extrabold text-white tracking-wide">
              Tours
            </span>
          </div>

          <div className="flex justify-center items-center w-full h-[0vh] mt-auto">
            <div className="w-[80%]">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] bg-white-100">
        <div className={`${styles.paddingTour} grid grid-cols-8 gap-10`}>
          <div className="col-span-2 flex flex-col gap-10">
            <div className="rounded-2xl flex flex-col gap-3 shadow-lg p-7">
              <div className="font-bold text-[20px]">Filter by Price</div>
              <div className="px-3">
                <Slider
                  value={range}
                  onChange={handleChange}
                  valueLabelFormat={(value) => `${value}`}
                  min={100}
                  max={3000}
                />
                <div>
                  <span>Price: &nbsp;</span>
                  <span className="font-bold">{`$${range[0]}`} - </span>
                  <span className="font-bold">{`$${range[1]}`}</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl flex flex-col shadow-lg p-7">
              <div className="font-bold text-[20px]">Filter by Review</div>
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center">
                  <Checkbox
                    // checked={selectRating.includes(rating)}
                    onChange={(event) => handleRatingChange(event, rating)}
                  />
                  <Rating defaultValue={rating} readOnly />
                </div>
              ))}
            </div>
            <div className="rounded-2xl flex flex-col shadow-lg p-7">
              <div className="font-bold text-[20px]">Filter by Duration</div>
              {durations.map((duration) => (
                <div key={duration} className="flex items-center">
                  <Checkbox
                    checked={selectDuration === duration}
                    onChange={handleDurationChange}
                    value={duration}
                  />
                  <div className="text-[17px]">{duration}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl flex flex-col gap-2 shadow-lg p-7">
              <div className="font-bold text-[20px]">Top Rated Tour</div>
              {topTours.map((tour) => (
                <div key={tour.name} className="flex gap-3 px-3">
                  <img
                    src={`http://127.0.0.1:3000${tour.imageCover}`}
                    alt={tour.name}
                    className="w-[70px] h-[70px] rounded-2xl cursor-pointer"
                  />
                  <div className="flex flex-col gap-2 py-1">
                    <div className="font-bold text-[16px] hover:text-primary_2 cursor-pointer">
                      {tour.name}
                    </div>
                    <div className="text-[17px] text-primary_2">
                      ${tour.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-6 gap-10">
              <div
                className="col-start-5 col-span-2 flex gap-2 items-center cursor-pointer"
                onClick={() => {
                  setDescent(!descent);
                }}
              >
                <div className="text-[18px]">Sort By:</div>
                {descent ? (
                  <img
                    alt={alphaInscent}
                    src={alphaInscent}
                    className="w-[25px] h-[25px]"
                  />
                ) : (
                  <img
                    alt={alphaDescent}
                    src={alphaDescent}
                    className="w-[25px] h-[25px]"
                  />
                )}
              </div>
              {tours.map((el, i) => (
                <div
                  key={i}
                  className="col-span-2 h-[450px] shadow-xl rounded-2xl group"
                  onClick={() => navigate(`/tour/${el.id}`)}
                >
                  <div className="relative">
                    <img
                      src={`http://127.0.0.1:3000${el.imageCover}`}
                      alt={i}
                      className=" h-[250px] w-full hover:brightness-90 cursor-pointer"
                    />
                    <div
                      className="absolute bg-white rounded-2xl z-10 w-full p-[20px]"
                      style={{ top: "95%" }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex justify-center items-center gap-1">
                          <div className="pt-1">
                            <Rating
                              size="small"
                              readOnly
                              value={el.ratingsAverage}
                              precision={0.1}
                            />
                          </div>
                          ({el.ratingsAverage})
                        </div>
                        <div>{el.duration} days</div>
                      </div>
                      <div className="border-t border-dashed border-gray-500 my-2"></div>
                      <div className="text-[18px]">
                        {el.startLocation.description}
                      </div>
                      <div className="text-[21px] font-bold hover:text-primary_2 cursor-pointer">
                        {el.name}
                      </div>
                      <div className="my-2">
                        From:
                        <span className="text-[18px] text-primary_2 font-bold ml-1">
                          ${el.price}
                        </span>
                      </div>
                      <div className="flex justify-center items-center invisible group-hover:visible transition-opacity duration-300">
                        <button className="w-[80%] bg-primary_4 hover:bg-primary_2 hover:text-white p-2 text-[18px] rounded-2xl">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tours;
