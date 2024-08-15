"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TrendingFeedReview = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);

  function toggleReview() {
    setShowFullReview((prev) => !prev);
  }

  return (
    <div className="grid grid-cols-10 gap-6 p-4 bg-white shadow-lg rounded-lg">
      <div
        className="col-span-3 overflow-hidden rounded-lg"
        style={{ position: "relative", height: "100px" }}
      >
        <Image
          src={review.imageURL}
          alt={review.reviewTitle}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "contain",
          }}
          className="hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="col-span-7 flex flex-col justify-between">
        <div>
          {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {review.reviewTitle}
          </h1> */}
          <p className="text-gray-600 text-left">
            {review.review.substring(0, 60) + "..."}
            {/* {showFullReview
              ? news.review
              : `${news.review.substring(0, 300)}... `} */}
            <Link href="/review/:id">
              <button
                // onClick={toggleReview}
                className="mt-4 outline_btn"
              >
                {review.movieTitle + " Review"}
                {/* {showFullReview ? "Show Less" : "Show More"} */}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingFeedReview;
