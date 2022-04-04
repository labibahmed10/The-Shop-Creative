import React from "react";
import { useReview } from "../CustomHook/CustomHook";
import Review from "../Review/Review";

const ReviewPage = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <h1 className="text-center pt-12 text-3xl text-[#779c84]">What Our Valuable Customer Says</h1>
      <div className="grid md:grid-cols-3 gap-6 py-12">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
