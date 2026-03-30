import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [title, settitle] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    console.log("form submitted:", title);
    settitle("");
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={title}
          placeholder="Enter your name"
          onChange={(e) => settitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
