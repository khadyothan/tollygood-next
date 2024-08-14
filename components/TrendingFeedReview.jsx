"use client";

import React, { useState } from "react";
import Image from "next/image";

const TrendingFeedReview = ({ review }) => {
  const [showFullReview, setShowFullReview] = useState(false);

  function toggleReview() {
    setShowFullReview((prev) => !prev);
  }

  return (
    <div>
      <Image
        src={review.imageURL}
        alt={review.reviewTitle}
        width={200}
        height={200}
      />
      <h1>{review.reviewTitle}</h1>
      <p>
        {showFullReview
          ? review.review
          : `${review.review.substring(0, 300)}... `}
        <button onClick={toggleReview}>
          {showFullReview ? "Show Less" : "Show More"}
        </button>
      </p>
    </div>
  );
};

export default TrendingFeedReview;
