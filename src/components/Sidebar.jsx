import React from "react";
import img2 from "../assets/Untitled-1 2.png";
import {
  AiFillSetting,
  AiOutlineClockCircle,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { BsWallet2 } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="fixed top-4 w-[10vh] lg:p-2 lg:pb-3 lg:items-center h-[90vh] lg:h-auto md:h-auto bg-[rgba(8,11,42,0.34)] rounded-xl ml-6 md:ml-5 md:top-[12vh] lg:top-[4vh] lg:ml-3 lg:px-0">
      <div className="">
        <img src={img2} alt="logo" />
      </div>
      <div className="flex flex-col text-2xl text-[#15BFFD] gap-y-4 mt-4 md:gap-y-5 md:mt-[5vh] px-4 md:px-4 lg:mt-[5vh]">
        <AiOutlineMessage />
        <AiOutlineShoppingCart />
        <FiActivity />
        <AiOutlineClockCircle />
      </div>
      <div className="flex flex-col text-2xl text-[#15BFFD] gap-y-4 mt-[10vh] px-4 md:gap-y-5 md:mt-[5vh] md:px-4 lg:mt-[10vh]">
        <BsWallet2 />
        <FaUserFriends />
        <AiFillSetting />
      </div>
      <div className="flex flex-col text-2xl text-[#15BFFD] gap-y-4 mt-[13vh] px-4 md:mt-[10vh] md:px-4">
        <BiLogOut />
      </div>
    </div>
  );
};

export default Sidebar;
