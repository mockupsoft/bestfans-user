import { Link } from "react-router-dom";

// Layouts
import Sidebar from "../layout/Sidebar";
import Container from "../layout/Container";

//
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";


const Lists = () => {

  const listGroups = [
    {
      id: 1,
      header: "Following",
      number: "empty",
      slug: "following",
    },
    {
      id: 2,
      header: "Bookmarks",
      number: "empty",
      slug: "bookmarks-list",
    },
    {
      id: 3,
      header: "Close Friends",
      number: "empty",
      slug: "close-friends",
    },
    {
      id: 4,
      header: "Restricted",
      number: "empty",
      slug: "restricted",
    },
    {
      id: 5,
      header: "Blocked",
      number: "empty",
      slug: "blocked",
    },
  ];

  return (
    <Container>
      <Sidebar />
      <div className="lists border-r flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between items-center p-2 bg-white border-b">
          <Link
            to={-1}
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <Link to={-1} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600">
              <AiOutlineArrowLeft />
            </Link>
            <span className="font-semibold text-lg text-gray-900">LISTS</span>
          </Link>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 cursor-pointer rounded-full flex items-center gap-3 justify-center hover:bg-blue-200 hover:text-blue-600">
              <BsSearch />
            </div>
          </div>
        </header>
        <div className="head flex items-center justify-between py-2 px-4">
          <p className="text-gray-400 font-semibold">CUSTOM ORDER</p>
        </div>
        {listGroups.map((listItem) => {
          return (
            <Link to={`/${listItem.slug}`} className="p-1 border-t" key={listItem.index}>
              <div className="flex flex-col items-start justify-center p-2 cursor-pointer rounded-sm hover:bg-blue-100">
                <p className="font-semibold">{listItem.header}</p>
                <p className="text-gray-500">{listItem.number}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default Lists;
