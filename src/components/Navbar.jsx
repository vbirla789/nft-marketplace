import React from "react";
import { AiOutlineDown, AiOutlineSearch, AiTwotoneBell } from "react-icons/ai";
import img1 from "../assets/unsplash_pmACe385Ruo.png";

const Navbar = () => {
  return (
    <section className="fixed top-2 text-white flex items-center gap-x-[10%] ml-[10%] z-200 md:ml-[4vh] md:top-3 lg:ml-[10vh] lg:gap-x-[5%] lg:top-2">
      <div className="flex items-center gap-2">
        {/* <AiOutlineSearch /> */}
        <input
          type="search"
          placeholder="Search by creator or collection"
          className="bg-[#080b2a57] placeholder-[#A1A5B6] rounded-full px-6 py-2 w-[70vh] text-base md:w-[32vh] md:absolute md:top-[7vh] md:left-[5vh] lg:absolute lg:mt-[25%] lg:w-[100%] lg:ml-[5%]"
        />
      </div>
      <div className="flex gap-4 text-[#FFF] text-sm md:gap-2 lg:gap-[10%]">
        <div className="bg-[#080b2a57] rounded-2xl min-w-[16vh] p-2">
          <span className="text-sm flex items-center justify-center">
            $ 3,25 ETH
          </span>
        </div>
        <div className="bg-[#080b2a57] rounded-2xl items-center justify-center min-w-[6vh] h-auto p-2 px-auto">
          <AiTwotoneBell className="text-[#373C70] text-xl" />
        </div>
        <div>
          <button className="rounded-2xl bg-[#080b2a57] items-center justify-center min-w-[12vh] p-2">
            Create
          </button>
        </div>
        <div className="flex items-center">
          <button className="rounded-2xl bg-[#080b2a57] items-center justify-center min-w-[12vh] p-2">
            Collect
          </button>
        </div>
      </div>
      <div className="flex items-center mt-2 lg:ml-[34%] ">
        <div className="relative">
          <span>Vishal Birla</span>
          <p className="text-[#FFF]">vishalbirla@gmail.com</p>
        </div>
        <div>
          <img
            src={img1}
            className="w-10 h-10 absolute top-3 md:right-[68vh] right-[4%]"
            alt="profile img"
          />
        </div>
        <div className="ml-8">
          <AiOutlineDown />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
