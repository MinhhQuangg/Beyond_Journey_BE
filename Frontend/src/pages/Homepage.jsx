import { React } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "../components/Footer";
import SearchBar from "../components/homePage/SearchBar";
import { NavBar } from "../components/NavBar";
import BestTour from "../components/homePage/BestTour";
import BestReview from "../components/homePage/BestReview";
import AboutUs from "../components/homePage/AboutUs";
import Question from "../components/homePage/Question";
import CreateStar from "../components/common/CreateStar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <BestTour />
      <BestReview />
      <AboutUs />
      <Question />
      <CreateStar />
      <Footer />
    </div>
  );
};
export default HomePage;
