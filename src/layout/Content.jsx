import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

// Components
import ContentCard from "../components/ContentCard";
import FakeContent from "../components/FakeContent";
import PostBox from "../components/PostBox";

// Icons
import { BsPencil } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Content = () => {
  const {newPost} = useContext(AppContext)
  const [content, setContent] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  return (
    <main className="flex flex-col flex-1 border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white">
        <span className="font-semibold text-lg text-gray-900">HOME</span>
        <BiDotsVerticalRounded onClick={() => setDropdown(!dropdown)} className="text-3xl cursor-pointer hover:bg-gray-100 p-1 rounded-full" />
        {
          dropdown ? <div className="flex flex-col items-start justify-center gap-1 py-1 px-3 border rounded-lg absolute right-4 top-16">
          <p className="font-semibold w-full text-start text-sm cursor-pointer p-1 hover:bg-blue-100 hover:text-blue-400">Hide all Locked Posts</p>
          <p className="font-semibold w-full text-start text-sm cursor-pointer p-1 hover:bg-blue-100 hover:text-blue-400">Hide all Promotional Posts</p>
          <p className="font-semibold w-full text-start text-sm cursor-pointer p-1 hover:bg-blue-100 hover:text-blue-400">Hide the Profile Banners</p>
        </div>: null
        }
      </header>
      <div className="flex px-4 pt-3 space-x-4">
        <PostBox />
      </div>
      <div className="bg-gray-100 h-2"></div>
      <div className="main-content flex flex-col">
        <div className="main-head mt-3 pl-5 flex items-center justify-start gap-2">
          <div className="bg-blue-200 rounded-lg w-10 text-center">All</div>
          <div className="bg-gray-200 rounded-full flex items-center justify-center p-2">
            <BsPencil size={14} />
          </div>
        </div>
        {
          newPost ? <FakeContent/> : null
        }
        <ContentCard />
      </div>
    </main>
  );
};

export default Content;
