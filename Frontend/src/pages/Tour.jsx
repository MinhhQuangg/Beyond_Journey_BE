import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blackBackground } from "../assets";
import TripInfo from "../components/detailPage/TripInfo";
import { Footer } from "../components/Footer";
import NavBar from "../components/NavBar";
import { styles } from "../styles";
import BookTrip from "../components/detailPage/BookTrip";
import TripDetail from "../components/detailPage/TripDetail";

const Detail = () => {
  const params = useParams();
  const [tour, setTour] = useState([]);
  useEffect(() => {
    const tourId = params.id;
    const fetchTour = async () => {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/v1/tours/${tourId}`
      );
      setTour(response.data?.data?.tour);
    };
    fetchTour();
  }, [params]);

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
              {tour.name}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[50px] bg-white-100">
        <div className={`${styles.paddingDetail} grid grid-cols-3 gap-10`}>
          <div className="col-span-2 flex flex-col">
            <div className="flex justify-between">
              <div className="text-[40px] font-bold">{tour.name}</div>
              <div className="flex flex-col shadow-lg rounded-b-lg">
                <span className="flex justify-center text-[32px] px-[28px] py-[5px] bg-primary_3 text-white rounded-t-lg">
                  {tour.duration}
                </span>
                <span className="flex justify-center text-[16px] py-[5px]">
                  Days
                </span>
              </div>
            </div>
            <div className="border-2 border-slate-500">
              <div>
                <img
                  alt="black"
                  src={blackBackground}
                  className="h-[500px] w-full"
                />
              </div>
              <div className="my-[20px]">
                <span className="text-[28px] px-[32px] font-bold">
                  Trip Info
                </span>
                <TripInfo tour={tour} />
              </div>
            </div>
            <div className="pt-[24px]">
              <TripDetail tour={tour} />
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="border-2 rounded-lg shadow-lg py-[20px] mt-[92px]">
              <span className="text-[20px] px-[32px] font-bold">
                Book This Tour
              </span>
              <BookTrip />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
