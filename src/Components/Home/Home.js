import React from "react";

import image from "../../images/shoe.png";

const Home = () => {
  return (
    <div className="flex justify-around items-center mx-6 pt-20">
      <div className="pr-4">
        <h1 className="text-6xl text-[#BCBAEA] mb-10">
          Wear the shoes <br />
          <span className="text-[#D72829]">of the town!</span>
        </h1>
        <p className="text-xl">
          We have the best Quality full products in town.We understand the taste of customers. Isn't it your
          next Shoe?
        </p>

        <button className="bg-[#bebbec] py-3 px-7 text-white text-xl mt-5 rounded-lg hover:bg-[#a2a0ca]">
          See More
        </button>
      </div>
      <div className="px-2">
        <img className="w-full mx-auto" src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
