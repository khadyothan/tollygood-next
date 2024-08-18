"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreateReview = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [review, setReview] = useState({
    movieTitle: "",
    reviewTitle: "",
    reviewContent: "",
    imageURL: "",
  });

  async function createReview(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/review/new", {
        method: "POST",
        body: JSON.stringify({
          movieTitle: review.movieTitle,
          reviewTitle: review.reviewTitle,
          reviewContent: review.reviewContent,
          imageURL: review.imageURL,
        }),
      });
      console.log(response.ok);
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Create"
      review={review}
      setReview={setReview}
      submitting={submitting}
      handleSubmit={createReview}
    />
  );
};

export default CreateReview;
