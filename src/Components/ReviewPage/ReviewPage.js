import React from "react";
import { useReview } from "../CustomHook/CustomHook";
import Review from "../Review/Review";

const ReviewPage = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="grid grid-cols-2 gap-6 py-16">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default ReviewPage;
