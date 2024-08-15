import React from "react";
import TrendingFeedNews from "./TrendingFeedNews";
import TrendingFeedReview from "./TrendingFeedReview";
import reviews from "@data/reviews";

const TrendingFeed = () => {
  return (
    <div className="mt-16 grid grid-cols-12 px-0">
      {/* Main News Section */}
      <div className="col-span-7 relative overflow-hidden rounded-lg p-6">
        <TrendingFeedNews news={reviews[5]} />
      </div>

      {/* Sidebar with Top Reviews */}
      <div className="col-span-5 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-xl font-bold text-gray-800">
              Popular Reviews
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
        </h2>
        <div className="space-y-4">
          <TrendingFeedReview review={reviews[3]} />
          <TrendingFeedReview review={reviews[4]} />
        </div>
      </div>
    </div>
  );
};

export default TrendingFeed;
