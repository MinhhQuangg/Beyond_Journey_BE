import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { blackBackground } from "../assets";
import { styles } from "../styles";
import Search from "../components/common/Search";
import axios from "axios";
import { Rating } from "@mui/material";

const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const fetchTour = async () => {
      const response = await axios.get("http://127.0.0.1:3000/api/v1/tours");
      console.log(response.data?.data?.tours);
      setTours(response.data?.data?.tours);
    };
    fetchTour();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
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
          <div
            className="flex justify-center items-center flex-col"
            style={{
              height: "35vh",
            }}
          >
            <span className="font-sans text-[80px] font-extrabold text-white tracking-wide">
              Tours
            </span>
          </div>

          <div
            className="absolute top-1/2 left-1/2 z-10 w-[70%]"
            style={{
              transform: "translate(-50%, 180%)",
            }}
          >
            <div className="flex justify-center w-full">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white-100">
        <div className={`${styles.paddingTour} grid grid-cols-8 gap-10`}>
          <div className="col-span-2 flex flex-col gap-10">
            <div className="rounded-2xl flex flex-col gap-3 shadow-lg p-7">
              <div className="font-bold text-[20px]">Filter by Price</div>
              <div>Filter by Price</div>
              <div>Price:</div>
            </div>
            <div className="rounded-2xl flex flex-col gap-3 shadow-lg p-7">
              <div className="font-bold text-[20px]">Filter by Review</div>
              <div>Filter by Review</div>
              <div>Price:</div>
            </div>
            <div className="rounded-2xl flex flex-col gap-3 shadow-lg p-7">
              <div className="font-bold text-[20px]">Filter by Duration</div>
              <div>Filter by Duration</div>
              <div>Price:</div>
            </div>
            <div className="rounded-2xl flex flex-col gap-3 shadow-lg p-7">
              <div className="font-bold text-[20px]">Top Rated Tour</div>
              <div>Filter by Price</div>
              <div>Price:</div>
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
                      className=" h-[280px] w-full hover:brightness-90 cursor-pointer"
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
                      <div className="text-[30px] font-bold hover:text-primary_2 cursor-pointer">
                        {el.name}
                      </div>
                      <div className="my-2">
                        From:
                        <span className="text-[18px] text-primary_2 font-bold ">
                          ${el.price}
                        </span>
                      </div>
                      <div className="flex justify-center items-center mt-5 invisible group-hover:visible transition-opacity duration-300">
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
