// Layouts
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";
import Widgets from "../layout/Widgets";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const index = () => {
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
              NOTIFICATIONS
            </span>
          </Link>
          <Link to='/notifications-settings' className="w-8 h-8 cursor-pointer rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600">
            <FiSettings />
          </Link>
        </header>
        <div className="flex items-center justify-center gap-2 p-4">
          <span className="bg-blue-200 hover:bg-blue-100 hover:text-blue-400 rounded-xl cursor-pointer text-sm py-1 px-2">
            All
          </span>
          <span className="bg-gray-200 hover:bg-blue-100 hover:text-blue-400 rounded-xl cursor-pointer text-sm p-2">
            Comments
          </span>
          <span className="bg-gray-200 hover:bg-blue-100 hover:text-blue-400 rounded-xl cursor-pointer text-sm p-2">
            Mentions
          </span>
          <span className="bg-gray-200 hover:bg-blue-100 hover:text-blue-400 rounded-xl cursor-pointer text-sm p-2">
            Subscriptions
          </span>
          <span className="bg-gray-200 hover:bg-blue-100 hover:text-blue-400 rounded-xl cursor-pointer text-sm p-2">
            Promotions
          </span>
        </div>
        <div className="mt-64 flex items-center justify-center ">
          <p className="text-gray-300"> No notifications currently!</p>
        </div>
      </main>
      <Widgets />
    </Container>
  );
};

export default index;
