import React from "react";

const Review = ({ review }) => {
  console.log(review);

  const { img, name, reviewtxt } = review;
  return (
    <div className="border-2 border-[#6d6875] p-2 w-80 mx-auto rounded-lg text-[#14213d]">
      <img className="w-full h-64 object-contain mx-auto" src={img} alt="" />
      <h1 className="text-2xl pt-4 font-semibold">Name: {name}</h1>
      <p>
        <span className="text-2xl text-semibold">Customer says:</span> {reviewtxt}
      </p>
    </div>
  );
};

export default Review;
