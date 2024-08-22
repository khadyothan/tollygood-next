"use client";

import React, { useEffect, useState } from "react";
import ReviewCard from "@components/ReviewCard";
import Link from "next/link";
// import reviews from "@data/reviews";

const TrendingReviews = () => {
  const [trendingReviews, setTrendingReviews] = useState([]);
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/review", {
          method: "GET",
        });
        const data = await response.json();
        setTrendingReviews(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, []);

  return (
    <div className="mt-14">
      <p>Trending Reviews</p>
      {trendingReviews.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 justify-evenly">
          <ReviewCard review={trendingReviews[0]} />
          <ReviewCard review={trendingReviews[1]} />
          <ReviewCard review={trendingReviews[2]} />
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="mt-4 flex justify-center">
        <Link href="/reviews">
          <button className="black_btn">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingReviews;
