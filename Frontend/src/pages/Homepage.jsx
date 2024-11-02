import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "../components/Footer";
import SearchBar from "../components/homePage/SearchBar";
import { NavBar } from "../components/NavBar";
import BestTour from "../components/homePage/BestTour";
import BestReview from "../components/homePage/BestReview";
import AboutUs from "../components/homePage/AboutUs";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <BestTour />
      <BestReview />
      <AboutUs />
      <Footer />
    </div>
  );
};
export default HomePage;
