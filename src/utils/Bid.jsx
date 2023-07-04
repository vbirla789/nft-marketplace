import React from "react";

const Bid = ({ id, img, time, bid, btn }) => {
  console.log(img);
  return (
    <div key={id} className="">
      <div className="mt-4 mr-5 relative md:mt-8">
        <img
          src={img}
          alt="bid img"
          className="rounded-xl w-[58vh] md:w-[32vh]"
        />
      </div>
      <div
        className={` ${
          id == 2 ? "md:top-[54vh]" : "md:top-[29vh] "
        } absolute z-40 top-[38vh] flex flex-col items-center text-[#fff]`}
      >
        <div className="flex justify-around items-center mx-5 md:mx-2 bg-[#00000021] w-[50vh] h-[15vh] md:w-[30vh] md:h-[8vh] rounded-lg">
          <div>
            <span>{time}</span>
            <p className="text-sm">Time Remaining</p>
          </div>
          <div>
            <span>{bid}</span>
            <p className="text-sm">Highest Bid</p>
          </div>
        </div>
        <div>
          <button className="bg-[#090D2F] w-[50vh] md:w-[30vh] mt-2 rounded-md text-sm font-normal py-1.5">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bid;
