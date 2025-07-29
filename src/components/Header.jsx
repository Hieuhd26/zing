import React from "react";
import { icons } from "../utils/icon";
import {Search} from "./index"; // mac dinh la index

const { FaArrowLeft, FaArrowRight } = icons;
const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-6 w-full items-center">
          {/* chi het cho 4 thi dung co san */}
          <div className="flex text-gray-400 gap-6"> 
            <span><FaArrowLeft size={24}/></span>
            <span><FaArrowRight size={24}/></span>
          </div>
          <div className="w-1/2 bg-red-500">
            <Search/>
          </div>
        </div>
        <div> Login</div>
      </div>
    </>
  );
};

export default Header;
