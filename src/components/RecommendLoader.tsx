import React from "react";

const RecommendLoader = () => {
  return (
    <div>
      <div className="w-[150px] h-[180px] bg-gray-300 rounded-md animate-pulse" />
      <div className="w-[120px] h-4 bg-gray-300 rounded-md mt-2 animate-pulse" />
      <div className="w-[100px] h-3 bg-gray-300 rounded-md mt-1 animate-pulse" />
    </div>
  );
};

export default RecommendLoader;
