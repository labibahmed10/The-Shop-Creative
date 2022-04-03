import React from "react";
import { useReview } from "../CustomHook/CustomHook";

const ReviewPage = () => {
  const [reviews, setReviews] = useReview();
  return <div>
    {
      reviews.map()
    }
  </div>;
};

export default ReviewPage;
