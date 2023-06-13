import { Link } from "react-router-dom";

// Components
import BookmarkItem from "../../components/BookmarkItem";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { BsFillBookmarksFill, BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { ImUnlocked } from "react-icons/im";

// Layouts
import Sidebar from "../../layout/Sidebar";
import Container from "../../layout/Container";

const Videos = () => {
  return (
    <Container>
      <Sidebar />
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="bookmarks border-r w-full lg:w-64 flex flex-col">
          <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white border-b">
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
                BOOKMARKS
              </span>
            </Link>
          </header>
          <div className="flex flex-row w-full gap-2 border-b lg:flex-col">
            <BookmarkItem
              text={"All BOOKMARKS"}
              icon={<BsFillBookmarksFill size={24} />}
              slug={"/bookmarks"}
            />
            <BookmarkItem
              text={"PHOTOS"}
              icon={<IoMdPhotos size={24} />}
              slug={"/photos"}
            />
            <BookmarkItem
              text={"VIDEOS"}
              icon={<BsFillCameraVideoFill size={24} />}
              slug={"/videos"}
            />
            <BookmarkItem
              text={"AUDIO"}
              icon={<MdKeyboardVoice size={24} />}
              slug={"/audio"}
            />
            <BookmarkItem
              text={"OTHER"}
              icon={<RxLetterCaseCapitalize size={24} />}
              slug={"/other"}
            />
            <BookmarkItem
              text={"LOCKED"}
              icon={<ImUnlocked size={24} />}
              slug={"/locked"}
            />
          </div>
        </div>
        <div className="right-part border-r flex-1 flex flex-col">
          <div className="flex items-center p-4 justify-between border-b">
            <p className="text-gray-400 font-semibold">VIDEOS</p>
            <CgDetailsMore size={24} />
          </div>
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <BsFillBookmarksFill />
            <p>No bookmarks yet</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Videos;
