import { Link } from "react-router-dom";

// Layouts
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { FiSettings, FiCopy } from "react-icons/fi";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { SearchIcon } from "../icons/Icon";


const Profile = () => {
  return (
    <Container>
      <Sidebar />
      <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
        <div className="bg-gradient-to-b from-gray-500 to-gray-300 w-full h-52">
          <div className="header flex items-center justify-between py-2 px-4">
            <div className="header-left flex items-center gap-5">
            <Link to={-1} className="w-8 h-8 text-white rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600">
              <AiOutlineArrowLeft size={24} />
            </Link>
              <div className="flex flex-col items-start justify-center text-white">
                <p className="font-semibold text-lg">Eyüp Ömer Odabaşı</p>
                <p>No posts</p>
              </div>
            </div>
            <div className="header-right">
              <BiDotsVerticalRounded className="text-3xl cursor-pointer text-white hover:bg-gray-100 p-1 rounded-full" />
            </div>
          </div>
        </div>
        <div className="header-bottom flex flex-col px-4 pb-12 border-b">
          <div className="top flex items-center justify-between">
            <div className="flex flex-col ">
              <div className="-translate-y-10 w-24 h-24 rounded-full border-2 text-white bg-blue-300 flex items-center justify-center font-bold text-3xl">
                E
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <p className="font-semibold">Eyüp Ömer Odabaşı</p>
                <p className="flex gap-4 text-gray-400">
                  @u317012004 .{" "}
                  <a
                    className="hover:text-blue-400 hover:underline flex items-center"
                    href="/"
                  >
                    Available <BsArrowDownShort />
                  </a>{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link to='/edit-profile' className="flex items-center gap-4 px-4 py-2 border rounded-3xl text-blue-500 hover:border-blue-200 hover:bg-sky-100 hover:text-blue-600">
                <FiSettings />
                <p>Edit Profile</p>
              </Link>
              <div className="flex cursor-pointer items-center gap-4 px-4 py-2 border rounded-3xl text-blue-500 hover:border-blue-200 hover:bg-sky-100 hover:text-blue-600">
                <FiCopy />
                <p>Copy Link</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-100"></div>
        <div className="media flex flex-col py-2">
          <div className="media-top flex items-center py-2 border-b-2">
            <div className="w-1/2 text-center font-semibold cursor-pointer">NO POSTS</div>
            <div className="w-1/2 text-center font-semibold cursor-pointer">NO MEDIA</div>
          </div>
          <div className="media-body flex items-center justify-center">
            <img
              className="w-1/2 mt-24"
              src="https://static.onlyfans.com/theme/onlyfans/spa/img/empty-feed.svg"
              alt="logo"
            />
          </div>
        </div>
      </main>
      <aside className="w-96 hidden lg:block">
      <div className="flex items-center space-x-3 p-3 m-3 border rounded-sm text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <input
          type="text"
          placeholder="Search posts"
          className="focus:outline-none placeholder-dray-dark bg-transparent w-full text-sm"
        />
        <SearchIcon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-5 items-center space-x-3 p-3 m-3 border rounded-sm text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <div className="focus:outline-none placeholder-dray-dark bg-transparent w-full flex -center justify-between">
          <p>Spotify</p>
          <BsArrowUpShort size={24} />
        </div>
        <div className="flex items-center justify-between w-full bg-green-500 p-2 px-4 rounded-3xl text-white font-semibold">
          <FaSpotify size={24}/>
          <p>SIGN IN WITH SPOTIFY</p>
        </div>
      </div>
      <hr/>
      <div className="flex items-center justify-around mt-5 w-10/12 mx-auto">
        <p className="text-gray-400 text-xs">Privacy</p>
        <p className="text-gray-400 text-xs">.</p>
        <p className="text-gray-400 text-xs">Cookie Notice</p>
        <p className="text-gray-400 text-xs">.</p>
        <p className="text-gray-400 text-xs">Terms of Service</p>
      </div>
      </aside>
    </Container>
  );
};

export default Profile;
