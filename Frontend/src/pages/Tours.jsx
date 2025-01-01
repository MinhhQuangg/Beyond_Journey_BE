import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { blackBackground } from "../assets";
import { styles } from "../styles";
import Search from "../components/common/Search";
import axios from "axios";
import { Checkbox, Rating, Slider } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const ratings = [5, 4, 3, 2, 1];
const durations = ["0-3 days", "3-5 days", "> 5 days"];

const Tours = () => {
  const [searchParams] = useSearchParams();

  const [tours, setTours] = useState([]);
  const [topTours, setTopTours] = useState([]);
  const [range, setRange] = useState([100, 900]);
  const handleChange = (event, newValue) => {
    setRange(newValue);
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
      const response = await axios.get(
        `http://127.0.0.1:3000/api/v1/tours?${searchParams.toString()}`
      );
      setTours(response.data?.data?.tours);
    };
    fetchTour();
  }, [searchParams]);
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
                  max={900}
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
                  <Checkbox />
                  <Rating defaultValue={rating} readOnly />
                </div>
              ))}
            </div>
            <div className="rounded-2xl flex flex-col shadow-lg p-7">
              <div className="font-bold text-[20px]">Filter by Duration</div>
              {durations.map((duration) => (
                <div key={duration} className="flex items-center">
                  <Checkbox />
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
              <div className="col-start-5 col-span-2 flex gap-10">
                <div>Sort By</div>
                <div>Filter</div>
              </div>
              {tours.map((el, i) => (
                <div
                  key={i}
                  className="col-span-2 h-[450px] shadow-xl rounded-2xl group"
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
                      <div className="text-[25px] font-bold hover:text-primary_2 cursor-pointer">
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
