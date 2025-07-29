import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
import { menuSidebar } from "../utils/menu";

const SideBarLeft = () => {
  const activeStyle =
    "py-2 px-[25px] font-bold flex gap-[12px] text-[#0F7070] text-[13px] items-center";
  const notActiveStyle =
    "py-2 px-[25px] font-bold flex gap-[12px] text-[#32323D] text-[13px] items-center";
  return (
    <>
      <div className="flex flex-col bg-[#DDE4E4]">
        <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center">
          <img className="w-[120px] h-10" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col">
          {menuSidebar.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              to={item.path}
              key={item.path}
              end={item.end}
            >
              {item.icon}
              <span>{item.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBarLeft;
