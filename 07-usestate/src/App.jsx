import React, { useState } from "react";


const App = () => {
  const [nums, setnums] = useState(0);

  function incresednum() {
    setnums(nums + 1);
  }

  function decreasednum() {
    setnums(nums - 1);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">{nums}</h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={incresednum}
            className="px-6 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
          >
            Increase
          </button>

          <button
            onClick={decreasednum}
            className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
