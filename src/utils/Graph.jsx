import React from "react";

const Graph = ({ img, text, num, graphImg }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <div className="flex gap-x-3">
        <div className="rounded-full px-2 flex items-center bg-[#0DDC851F] py-2">
          <img src={img} className="h-4 w-4" />
        </div>
        <p>{text}</p>
      </div>
      <div className="">
        <span className="text-lg font-semibold">{num}</span>
      </div>
      <div className="mr-6 mb-6">
        <img src={graphImg} className="w-[28vh]" />
      </div>
    </div>
  );
};

export default Graph;
