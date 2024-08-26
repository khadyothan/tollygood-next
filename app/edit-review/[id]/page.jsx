"use client";

import Form from "@components/Form";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const EditReview = () => {
  const { id } = useParams();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState({
    id: id,
    movieTitle: "",
    reviewTitle: "",
    reviewContent: "",
    imageURL: "",
  });

  useEffect(() => {
    if (id) {
      async function fetchReview() {
        try {
          const response = await fetch(`/api/review/${id}`, {
            method: "GET",
          });
          const data = await response.json();
          setReview({
            id: data.id,
            movieTitle: data.movie_title,
            reviewTitle: data.review_title,
            reviewContent: data.review_content,
            imageURL: data.imageurl,
          });
          setLoading((prev) => {
            !prev;
          });
        } catch (error) {
          console.log(error);
        }
      }
      fetchReview();
    }
  }, [id]);

  async function editReview(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`/api/review/edit/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          id: review.id,
          movieTitle: review.movieTitle,
          reviewTitle: review.reviewTitle,
          reviewContent: review.reviewContent,
          imageURL: review.imageURL,
        }),
      });
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
    !loading && (
      <Form
        type="Edit"
        review={review}
        setReview={setReview}
        submitting={submitting}
        handleSubmit={editReview}
      />
    )
  );
};

export default EditReview;
