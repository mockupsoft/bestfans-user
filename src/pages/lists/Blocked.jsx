import React from "react";
import { Link } from "react-router-dom";

// Layouts
import Sidebar from "../../layout/Sidebar";
import Container from "../../layout/Container";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SearchIcon } from "../../icons/Icon";
import { BiFilter } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";

const Blocked = () => {
  return (
    <Container>
      <Sidebar />
      <div className="lists border-r flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between items-center p-2 bg-white border-b">
          <Link
            to={-1}
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <Link
              to={-1}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600"
            >
              <AiOutlineArrowLeft />
            </Link>
            <span className="font-semibold text-lg text-gray-900">
              BLOCKED
            </span>
          </Link>
        </header>
        <div className="flex items-center justify-between p-4">
          <p className="text-gray-500 font-semibold">LAST ACTIVITY</p>
          <div className="icons flex items-center justify-center gap-2">
            <SearchIcon className="cursor-pointer w-5 h-5 text-gray-500" />
            <BiFilter className="cursor-pointer w-5 h-5 text-gray-500" />
            <CgDetailsMore className="cursor-pointer w-5 h-5 text-gray-500" />
          </div>
          
        </div>
        <div className="main-head mt-3 pl-5 flex items-center justify-start gap-2">
          <div className="bg-gray-200 rounded-lg px-2 text-center text-sm">
            All 0
          </div>
          <div className="bg-gray-200 rounded-lg px-2 text-center text-sm">
            Active 0
          </div>
          <div className="bg-gray-200 rounded-lg px-2 text-center text-sm">
            Expired 0
          </div>
          <div className="bg-gray-200 rounded-lg px-2 text-center text-sm">
            Blocked 0
          </div>
          <div className="bg-blue-200 rounded-lg px-2 text-center text-sm">
            Blocked 0
          </div>
        </div>
        <div className="flex items-center justify-center mt-72">
          <p className="text-gray-400">Nothing was found</p>
        </div>
      </div>
    </Container>
  );
};

export default Blocked;
