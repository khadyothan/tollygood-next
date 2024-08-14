import React from "react";
import TrendingFeedNews from "./TrendingFeedNews";
import TrendingFeedReview from "./TrendingFeedReview";
import reviews from "@data/reviews";

const TrendingFeed = () => {
  return (
    <div className="mt-16">
      <TrendingFeedNews news={reviews[0]} />
      <p>Top Reviews</p>
      <TrendingFeedReview review={reviews[1]} />
      <TrendingFeedReview review={reviews[1]} />
    </div>
  );
};

export default TrendingFeed;
