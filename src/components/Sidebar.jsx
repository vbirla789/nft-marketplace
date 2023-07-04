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
    <div className="fixed top-4 w-[10vh] md:w-[5vh] h-[90vh] md:h-[128vh] bg-[rgba(8,11,42,0.34)] rounded-xl ml-6 md:ml-2 ">
      <div className="mt-2">
        <img src={img2} alt="logo" />
      </div>
      <div className="flex flex-col text-2xl text-[#15BFFD] gap-y-4 mt-4 md:gap-y-10 md:mt-[20vh] px-3">
        <AiOutlineMessage />
        <AiOutlineShoppingCart />
        <FiActivity />
        <AiOutlineClockCircle />
      </div>
      <div className="flex flex-col text-2xl text-[#15BFFD] gap-y-4 mt-[10vh] px-3 md:gap-y-10 md:mt-[20vh]">
        <BsWallet2 />
        <FaUserFriends />
        <AiFillSetting />
      </div>
      <div className="flex flex-col text-2xl text-[#15BFFD] gap-y-4 mt-[13vh] px-3 md:mt-[20vh]">
        <BiLogOut />
      </div>
    </div>
  );
};

export default Sidebar;
