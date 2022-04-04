import React from "react";

import { AiOutlineStar } from "react-icons/ai";

const Review = ({ review }) => {
  console.log(review);

  const { img, name, reviewtxt } = review;
  return (
    <div className="border-2 border-[#6d6875] p-2 md:w-80 w-72 mx-auto rounded-lg text-[#14213d]">
      <img className="w-full h-64 object-contain mx-auto" src={img} alt="" />
      <h1 className="md:text-2xl text-xl md:pt-4 pt-2 font-semibold">Name: {name}</h1>
      <p>
        <span className="md:text-2xl text-xl text-semibold">Customer says:</span> {reviewtxt}
      </p>

      <div className="flex justify-end pr-1  items-center">
        <p className="pr-1">4.9</p>
        <AiOutlineStar className="text-orange-400"></AiOutlineStar>
        <AiOutlineStar className="text-orange-400"></AiOutlineStar>
        <AiOutlineStar className="text-orange-400"></AiOutlineStar>
        <AiOutlineStar className="text-orange-400"></AiOutlineStar>
        <AiOutlineStar className="text-orange-400"></AiOutlineStar>
      </div>
    </div>
  );
};

export default Review;
