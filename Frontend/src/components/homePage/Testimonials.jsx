import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import axios from "axios";
import { Rating } from "@mui/material";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [totalReview, setTotalReview] = useState(null);
  const [averageReview, setAverageReview] = useState(0);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/api/v1/reviews/getFiveStarReview"
        );
        setReviews(response.data?.data?.reviews);
      } catch (err) {
        console.error();
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchReviewStat = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:3000/api/v1/reviews/getReviewStat"
        );
        setTotalReview(response.data?.data[0]?.totalReview);
        setAverageReview(response.data?.data[0]?.avgRating);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviewStat();
  }, []);

  return (
    <div className={`${styles.paddingX} flex flex-col items-center`}>
      <div className="my-[40px]">
        <div className="text-center font-bold text-[18px]">
          <div className={`${styles.headerSubText}`}>Testimonials</div>
          <div className={`${styles.headerText}`}>
            Top-Rated Experiences from Our Guests
          </div>
          <div className="flex justify-center items-center gap-1">
            {totalReview} Reviews | {averageReview.toFixed(2)}
            <div className="pt-1">
              <Rating readOnly value={averageReview} precision={0.1} />
            </div>
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
