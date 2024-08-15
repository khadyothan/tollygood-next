import React from "react";
import TrendingFeed from "./TrendingFeed/TrendingFeed.jsx";
import TrendingNews from "./TrendingNews.jsx";
import TrendingReviews from "./TrendingReviews.jsx";

const Feed = () => {
  return (
    <div>
      <TrendingFeed />
      <TrendingNews />
      <TrendingReviews />
    </div>
  );
};

export default Feed;
