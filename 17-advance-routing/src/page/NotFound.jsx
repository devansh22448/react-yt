import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0A2328] text-white px-4">
      <div className="text-center max-w-lg">
        {/* 404 Heading */}
        <h1 className="text-8xl font-bold text-[#3AAFA9] animate-pulse">404</h1>

        {/* Message */}
        <h2 className="text-2xl mt-4 font-semibold">
          Oops! Ticket Not Found 🎫
        </h2>

        <p className="text-gray-300 mt-2">
          Looks like this page took the wrong route. Let’s get you back to
          booking amazing events.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-6 flex-wrap">
          {/* Home Button */}
          <Link
            to="/"
            className="px-6 py-3 bg-[#3AAFA9] text-[#0A2328] rounded-xl font-medium hover:scale-105 transition"
          >
            Go Home
          </Link>

          {/* Browse Events */}
          <button
            onClick={() => navigate("/events")}
            className="px-6 py-3 border border-[#3AAFA9] text-[#3AAFA9] rounded-xl hover:bg-[#3AAFA9] hover:text-[#0A2328] transition"
          >
            Browse Events
          </button>
        </div>

        {/* Optional Illustration */}
        <div className="mt-10 opacity-70">
          <p className="text-sm text-gray-400">
            Error Code: LOST_IN_BOOKING_FLOW
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
