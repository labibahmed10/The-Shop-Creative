import React from "react";

import image from "../../images/shoe.png";
import { useReview } from "../CustomHook/CustomHook";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div>
      <div className="flex justify-around items-center mx-6 pt-20">
        <div className="pr-4">
          <h1 className="text-6xl font-semibold text-[#BCBAEA] mb-10">
            Wear the shoes <br />
            <span className="text-[#D72829]">of the town!</span>
          </h1>
          <p className="text-xl">
            We have the best Quality full products in town.We understand the taste of customers. Isn't it your
            next Shoe?
          </p>

          <button className="bg-[#bebbec] py-3 px-7 text-white text-xl mt-5 rounded-lg hover:bg-[#a2a0ca] ">
            See More
          </button>
        </div>
        <div className="px-2">
          <img className="w-full mx-auto" src={image} alt="" />
        </div>
      </div>

      <section>
        <h2 className="text-4xl text-center font-semibold pt-28 text-[#84a59d]">Customers Feedback</h2>

        <div className="grid grid-cols-3 px-2 gap-2 pt-24">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button className="mx-auto block mt-8 mb-24 px-4 py-3 rounded-md text-white bg-[#84a59d] hover:bg-[#6b8d86]">
          See All Reviews
        </button>
      </section>
    </div>
  );
};

export default Home;
