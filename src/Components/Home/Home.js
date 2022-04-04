import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../../images/shoe.png";
import { useReview } from "../CustomHook/CustomHook";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReview();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-around items-center flex-col-reverse md:flex-row mx-6 pt-20">
        <div className="md:pr-4">
          <h1 className="md:text-6xl text-5xl font-semibold text-[#BCBAEA] md:mb-10 mb-5">
            Wear the shoes <br />
            <span className="text-[#D72829]">of the town!</span>
          </h1>
          <p className="md:text-xl">
            We have the best Quality full products in town.We understand the taste of customers. Pick your
            next shoe from us.
          </p>

          <button
            onClick={() => navigate("/moreshoes")}
            className="bg-[#bebbec] md:py-3 py-2 md:px-7 px-5 text-white text-xl mt-5 rounded-lg hover:bg-[#a2a0ca] "
          >
            See More
          </button>
        </div>
        <div className="md:px-2">
          <img className="w-full mx-auto pb-5" src={image} alt="" />
        </div>
      </div>

      <section>
        <h2 className="text-4xl text-center font-semibold pt-28 text-[#84a59d]">Customers Feedback</h2>

        <div className="grid md:grid-cols-3 px-2 gap-4 md:pt-24 pt-16">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button
          onClick={() => navigate("/reviews")}
          className="mx-auto block mt-8 md:mb-24 mb-14 px-4 py-3 rounded-md text-white bg-[#84a59d] hover:bg-[#6b8d86]"
        >
          See All Reviews
        </button>
      </section>
    </div>
  );
};

export default Home;
