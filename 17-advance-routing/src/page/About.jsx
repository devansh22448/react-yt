import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  const btnClicked = () => {
    navigate("/");
  };
  return (
    <div className="p-8 bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <button
        className=" bg-emerald-700 px-5 py-2 rounded text-semibold  cursor-pointer "
        onClick={btnClicked}
      >
        {" "}
        Return to the Home page{" "}
      </button>
      <p>This is the about page content.</p>
    </div>
  );
};

export default About;
