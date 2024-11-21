import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "../components/Footer";
import AboutUs from "../components/homePage/AboutUs";
import BestReview from "../components/homePage/BestReview";
import BestTour from "../components/homePage/BestTour";
import Question from "../components/homePage/Question";
import SearchBar from "../components/homePage/SearchBar";
import { NavBar } from "../components/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <BestTour />
      <BestReview />
      <AboutUs />
      <Question />
      <Footer />
    </div>
  );
};
export default HomePage;
