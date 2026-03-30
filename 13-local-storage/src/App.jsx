import React from "react";

const App = () => {
  sessionStorage.clear();
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: "1",
      name: "vansh",
    }),
  );
  const user =localStorage.getItem("user");
  console.log(user)
  return <div>
    
  </div>;
};

export default App;
