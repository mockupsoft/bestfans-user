import { Link } from "react-router-dom";
import { useState } from "react";

// Layouts
import Sidebar from "../layout/Sidebar";
import Container from "../layout/Container";

// Icons
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { BsSearch, BsPencil } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

const Messages = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Container>
      <Sidebar />
      <div className="messages border-r flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white border-b">
          <div
            
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            {!isSearchOpen ? (
              <Link to={-1} className="flex items-center gap-4">
                <AiOutlineArrowLeft />
              <span className="font-semibold text-lg text-gray-900">
                  MESSAGES {isSearchOpen}
                </span>
              </Link>
                
              
            ) : (
                <input
                  type="text"
                  placeholder="Search"
                  className="focus:outline-none placeholder-dray-dark bg-transparent w-full text-sm"
                />
            )}
          </div>
          <div className="flex items-center justify-center gap-3">
            <div
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-10 h-10 cursor-pointer rounded-full flex items-center gap-3 justify-center hover:bg-blue-200 hover:text-blue-600"
            >
              {
                !isSearchOpen ? <BsSearch /> : <button className="font-semibold text-gray-700">X</button>
              }
              
            </div>
            <Link
              to="/new-message"
              className="w-10 h-10 cursor-pointer rounded-full flex items-center gap-3 justify-center hover:bg-blue-200 hover:text-blue-600"
            >
              <AiOutlinePlus />
            </Link>
          </div>
        </header>
        <div className="flex items-center p-4 justify-between">
          <p className="text-gray-400 font-semibold">NEWEST FIRST</p>
        </div>
        <div className="main-head mt-3 pl-5 flex items-center justify-start gap-2">
          <div className="bg-blue-200 rounded-lg w-10 text-center">All</div>
        </div>
        <div className="flex items-center justify-center mt-24">
          <p className="text-gray-400">Nothing was found</p>
        </div>
      </div>
      <div className="right-part border-r h-100 hidden lg:flex items-center justify-center">
        <p className="text-black font-semibold text-center text-2xl w-10/12">
          Please subscribe to a creator to access this feature.
        </p>
      </div>
    </Container>
  );
};

export default Messages;
