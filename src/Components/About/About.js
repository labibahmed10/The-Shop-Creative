import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import image from "../../images/logo.jpg";

const About = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img className="md:w-1/5 " src={image} alt="" />
      <h1
        className="text-4xl font-semibold text-[#779c84]
      "
      >
        The Shop Creative
      </h1>
      <div className="pt-16 border-b-[1px] border-[#023047] flex">
        <input
          className="md:w-96 py-2 focus:outline-0"
          type="email"
          name="email"
          id="email"
          placeholder="Email Here.."
        />

        <button className="pl-2 md:text-md flex items-center duration-500 hover:bg-[#D8E2DC]">
          Subscribe<AiOutlineArrowRight className="ml-1"></AiOutlineArrowRight>
        </button>
      </div>

      <p className="pt-12 text-md font-semibold text-[#779c84]">Subscribe for exciting update</p>
    </div>
  );
};

export default About;
