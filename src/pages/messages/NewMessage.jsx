import { Link } from "react-router-dom";

// Layouts
import Sidebar from "../../layout/Sidebar";
import Container from "../../layout/Container";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";

const NewMessage = () => {
  return (
    <Container>
      <Sidebar />
      <div className="messages border-r flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white border-b">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <Link
              to={-1}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600"
            >
              <AiOutlineArrowLeft />
            </Link>
            <span className="font-semibold text-lg text-gray-900">
              NEW MESSAGE
            </span>
          </Link>
        </header>
        <div className="bg-gray-100 items-center justify-center p-4">
            <input className="w-full bg-inherit focus:outline-none focus:border focus:border-sky-300 p-2 rounded-md" type="text" placeholder="Add people..." />
        </div>
        <div className="flex items-center p-4 justify-between">
          <p className="text-gray-400 font-semibold">RECENT</p>
        </div>
        <div className="flex items-center justify-center mt-24">
          <p className="text-gray-400">Nothing was found</p>
        </div>
      </div>
      <div className="right-part border-r h-100 hidden lg:flex flex-col items-center">
        <div className="flex items-center p-5 justify-start w-full border-b">
          <p className="font-semibold">SELECT USERS TO SEND THEM A MESSAGE</p>
        </div>
        <div className="flex items-center justify-center h-full">
          <p className="text-black font-semibold text-center text-2xl w-10/12">
            Please subscribe to a creator to access this feature.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NewMessage;
