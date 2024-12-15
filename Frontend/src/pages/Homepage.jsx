import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "../components/Footer";
import AboutUs from "../components/homePage/AboutUs";
import BestTour from "../components/homePage/BestTour";
import Question from "../components/homePage/Question";
import SearchBar from "../components/homePage/SearchBar";
import Testimonials from "../components/homePage/Testimonials";
import { Intro } from "../components/homePage/Intro";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-[15px] ">
        <Intro />
        <div
          className="absolute top-20 left-0 right-0 z-10 flex justify-center"
          style={{
            transform: "translateY(170%)",
          }}
        >
          <SearchBar />
        </div>
      </div>
      <BestTour />
      <Testimonials />
      <AboutUs />
      <Question />
      <Footer />
    </div>
  );
};
export default HomePage;
