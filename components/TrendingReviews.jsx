import React from "react";
import ReviewCard from "./ReviewCard";
import reviews from "@data/reviews";

const TrendingReviews = () => {
  return (
    <div className="mt-14">
      <p>Trending Reviews</p>
      <div className="flex gap-6">
        <ReviewCard review={reviews[5]} />
        <ReviewCard review={reviews[1]} />
        <ReviewCard review={reviews[2]} />
      </div>
      <div className="mt-4 flex justify-center">
        <button className="black_btn">See More</button>
      </div>
    </div>
  );
};

export default TrendingReviews;
