import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  px-8 py-4 justify-between bg-cyan-800">
      <h3 className="text-lg font-bold">Devansh</h3>
      <div className=" flex  gap-8">
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium" to="/contact">
          Contact
        </Link>
        <Link className="text-lg font-medium" to="/product">
          Product
        </Link>
        <Link className="text-lg font-medium" to="/course">
          Course
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
