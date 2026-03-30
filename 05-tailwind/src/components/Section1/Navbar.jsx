import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center  justify-between px-16 py-6">
      <h4
        className="bg-black text-white px-6 py-2  upper
        rounded-full"
      >
        {" "}
        Target Audience
      </h4>
      <button
        className="bg-gray-300 rounded-full px-6 py-2 uppercase  text-sm
         tracking-widest"
      >
        {" "}
        Digital Banking Platform{" "}
      </button>
    </div>
  );
};

export default Navbar;
