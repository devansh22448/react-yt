import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=32`,
      );
      setUserData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>

      {/* Loader */}
      {loading && (
        <p className="text-center text-gray-400 animate-pulse">
          Loading images...
        </p>
      )}

      {/* Grid */}
      {!loading && userData.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userData.map((ele, idx) => (
            <a
              key={idx}
              href={ele.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={ele.download_url}
                    alt="random"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="p-3 flex justify-between items-center">
                  <p className="text-sm text-gray-300 font-semibold truncate">
                    {ele.author}
                  </p>
                  <span className="text-xs text-gray-500">View</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* No Data */}
      {!loading && userData.length === 0 && (
        <p className="text-center text-gray-400">No Data Available</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          disabled={index === 1}
          className={`px-5 py-2 rounded font-semibold transition-all ${
            index === 1
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-amber-400 text-black hover:bg-amber-500 active:scale-95"
          }`}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>

        <h4 className="text-lg font-semibold">Page {index}</h4>

        <button
          className="px-5 py-2 bg-amber-400 text-black rounded font-semibold hover:bg-amber-500 active:scale-95 transition-all"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
