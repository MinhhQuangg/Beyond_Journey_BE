import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "../components/Footer";
import AboutUs from "../components/homePage/AboutUs";
import BestTour from "../components/homePage/BestTour";
import Question from "../components/homePage/Question";
import SearchBar from "../components/homePage/SearchBar";
import { NavBar } from "../components/NavBar";
import Testimonials from "../components/homePage/Testimonials";

const HomePage = () => {
  return (
    <div>
      <NavBar />
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
