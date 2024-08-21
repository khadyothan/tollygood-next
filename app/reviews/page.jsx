"use client";

import React, { useEffect, useState } from "react";
import ReviewCard from "@components/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/review", {
          method: "GET",
        });
        const data = await response.json();
        setReviews(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewCard key={review.id} review={review} />
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
