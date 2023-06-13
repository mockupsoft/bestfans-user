import { Link } from "react-router-dom";

// Layouts
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SearchIcon } from "../icons/Icon";
import { BiFilter } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";

const Subscriptions = () => {
  return (
    <Container>
      <Sidebar />
      <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
        <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white border-b">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <Link to={-1} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600">
              <AiOutlineArrowLeft />
            </Link>
            <span className="font-semibold text-lg text-gray-900">
              FOLLOWING
            </span>
          </Link>
        </header>
        <div className="flex items-center justify-between p-4">
          <p className="text-gray-500 font-semibold">PREVIOUS SUBSCRIPTION</p>
          <div className="icons flex items-center justify-center gap-2">
            <SearchIcon className="cursor-pointer w-5 h-5 text-gray-500" />
          </div>
          
        </div>
        <div className="main-head mt-3 pl-5 flex items-center justify-start gap-2">
          <div className="bg-gray-200 rounded-lg px-2 text-center text-sm cursor-pointer">
            All 0
          </div>
          <div className="bg-gray-200 rounded-lg px-2 text-center text-sm cursor-pointer">
            Active 0
          </div>
          <div className="bg-blue-200 rounded-lg px-2 text-center text-sm cursor-pointer">
            Expired 0
          </div>
          <div className="bg-gray-200 rounded-lg px-2 text-center text-sm cursor-pointer">
            Attention required 0
          </div>
        </div>
        <div className="flex items-center justify-center mt-72">
          <p className="text-gray-400">Nothing was found</p>
        </div>
      </main>
    </Container>
  );
};

export default Subscriptions;
