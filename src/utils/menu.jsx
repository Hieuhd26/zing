import React from "react";
import { icons } from "./icon";

const { MdOutlineVideoLibrary,FaChartLine,FaCompactDisc,CgFeed } = icons;

export const menuSidebar = [
  {
    path: "myMusic",
    text: "Cá nhân",
    icon: <MdOutlineVideoLibrary size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icon: <FaCompactDisc size={24} />,
  },
  {
    path: "zing-chart",
    text: "#zing-chart",
    icon: <FaChartLine size={24} />,
  },
   {
    path: "feed",
    text: "Bảng tin",
    icon: <CgFeed size={24} />,
  },
];

