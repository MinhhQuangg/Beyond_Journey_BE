import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import axios from "axios";
import { Rating } from "@mui/material";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/api/v1/reviews/getFiveStarReview"
        );
        console.log(response.data.data.reviews);
        setReviews(response.data.data.reviews);
      } catch (err) {
        console.error();
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="my-[40px]">
        <div className="text-center">
          <div className={`${styles.headerSubText}`}>Testimonials</div>
          <div className={`${styles.headerText}`}>
            Top-Rated Experiences from Our Guests
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center my-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col w-[30%] p-4 border rounded-xl"
            >
              <div className="pb-4">
                <Rating readOnly defaultValue={review.rating} />
              </div>
              <span className="text-[18px] line-clamp-5">
                "{review.review}..."
              </span>
              <div className="flex gap-4 items-center pt-4">
                <img
                  src={`http://127.0.0.1:3000${review.user.photo}`}
                  alt={review.user.name}
                  className="w-[60px] h-[60px] border-2 rounded-full"
                />
                <span className="font-bold">{review.user.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
