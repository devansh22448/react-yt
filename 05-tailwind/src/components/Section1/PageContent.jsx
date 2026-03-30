import React from "react";
import Leftpage from "./Leftpage";
import RightPage from "./RightPage";

const PageContent = () => {
  return (
    <div className="py-10 h-[90vh]  px-18 flex items-center gap-2">
      <Leftpage />
      <RightPage />
    </div>
  );
};

export default PageContent;
