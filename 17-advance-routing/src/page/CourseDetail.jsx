import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  return (
    <div className="min-h-[calc(100vh-6rem)] bg-slate-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Course Detail - {id}
      </h1>
    </div>
  );
};

export default CourseDetail;
