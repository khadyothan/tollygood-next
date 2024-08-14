"use client";

import React, { useState } from "react";
import Image from "next/image";

const TrendingFeedNews = ({ news }) => {
  const [showFullReview, setShowFullReview] = useState(false);

  function toggleReview() {
    setShowFullReview((prev) => !prev);
  }

  return (
    <div>
      <Image
        src={news.imageURL}
        alt={news.reviewTitle}
        width={200}
        height={500}
      />
      <h1>{news.reviewTitle}</h1>
      <p>
        {showFullReview ? news.review : `${news.review.substring(0, 300)}... `}
        <button onClick={toggleReview}>
          {showFullReview ? "Show Less" : " Show More"}
        </button>
      </p>
    </div>
  );
};

export default TrendingFeedNews;
