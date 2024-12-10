import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "../components/Footer";
import AboutUs from "../components/homePage/AboutUs";
import BestTour from "../components/homePage/BestTour";
import Question from "../components/homePage/Question";
import SearchBar from "../components/homePage/SearchBar";
import Testimonials from "../components/homePage/Testimonials";
import { Intro } from "../components/homePage/Intro";

const HomePage = () => {
  return (
    <div>
      <Intro />
      <SearchBar />
      <BestTour />
      <Testimonials />
      <AboutUs />
      <Question />
      <Footer />
    </div>
  );
};
export default HomePage;
