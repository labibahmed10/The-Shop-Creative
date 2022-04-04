import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="bg-[#D8E2DC] w-screen h-[91.5vh] text-center  flex flex-col items-center justify-center text-[#023047]">
          <h1 className="text-[10rem] text-center">404!</h1>
          <p className="text-5xl">Sorry Page Not Found</p>

          <p className="text-3xl py-3">The page you requested could not be found</p>

          <button
            onClick={() => navigate("/")}
            className="mt-10 bg-[#bebbec] py-3 px-4 rounded-md text-white hover:bg-[#9f9cc5]"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
