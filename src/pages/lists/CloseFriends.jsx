import React from "react";
import { Link } from "react-router-dom";

// Layouts
import Sidebar from "../../layout/Sidebar";
import Container from "../../layout/Container";

// Icons
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const CloseFriends = () => {
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
              CLOSE FRIENDS
            </span>
          </Link>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 cursor-pointer rounded-full flex items-center gap-3 justify-center hover:bg-blue-200 hover:text-blue-600">
              <BsSearch />
            </div>
            <div className="w-16 h-16 cursor-pointer rounded-full flex items-center gap-3 justify-center hover:bg-blue-200 hover:text-blue-600">
              <AiOutlinePlus />
            </div>
          </div>
        </header>
        <div className="p-4">
          <div className="flex items-center justify-center text-3xl text-gray-500 bg-gray-200 hover:bg-blue-200 hover:text-blue-600 cursor-pointer w-52 h-52 font-bold rounded-sm">+</div>
          
        </div>
        </div>
    </Container>
  );
};

export default CloseFriends;
