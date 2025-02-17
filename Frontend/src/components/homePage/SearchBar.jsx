import { React } from "react";
import { styles } from "../../styles";
import Search from "../common/Search";

const SearchBar = () => {
  return (
    <div className={`${styles.paddingX} md:w-[90%] w-[70%]`}>
      <div className="flex flex-col items-center rounded-3xl shadow-lg bg-white pb-[40px] ">
        <div className="text-center my-[30px]">
          <div
            className={`${styles.headerSubText} font-sans font-extrabold text-primary_3`}
          >
            Search Tours
          </div>
          <div className={`${styles.headerText}`}>Find Your Perfect Tour</div>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
