import { useState } from "react";
import React from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/",
    );
    setData  (response.data);
  };
  return (
    <div>
      <button onClick={getdata}>click heere</button>
      <div>
        {data.map(function (ele, ) {
         return  <h3>hello,{ele.name}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
