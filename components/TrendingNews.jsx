import React from "react";
import NewsCard from "./NewsCard";
import reviews from "@data/reviews";

const TrendingNews = () => {
  return (
    <div className="mt-14">
      <p>Trending News</p>
      <div className="flex gap-4 justify-evenly">
        <NewsCard news={reviews[0]} />
        <NewsCard news={reviews[3]} />
        <NewsCard news={reviews[2]} />
      </div>
      <div className="mt-4 flex justify-center">
        <button className="black_btn">See More</button>
      </div>
    </div>
  );
};

export default TrendingNews;
