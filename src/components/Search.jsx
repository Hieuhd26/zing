import React from "react";
import { icons } from "../utils/icon";
const { IoIosSearch } = icons;
const Search = () => {
  return (
    <>
      <div className="w-full flex items-center">
        <span className="h-10 pl-4 bg-[#DDE4E4] rounded-l-[20px] flex items-center justify-center  text-gray-500">
          <IoIosSearch size={24} />
        </span>

        <input
          type="text"
          className="outline-none bg-[#DDE4E4] px-4 py-2 rounded-r-[20px] h-10 w-full text-gray-500 "
          placeholder="Tìm kiếm bài hát, nghệ sĩ ..."
        />
      </div>
    </>
  );
};

export default Search;
