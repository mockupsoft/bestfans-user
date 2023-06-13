import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Icons
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  AddCard,
} from "../icons/Icon";
import SideLink from "../components/SideLink";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
  const { user, setUser, setActiveSidebar } = useContext(AppContext);

  const [logout, setLogout] = useState(false);

  const mouseOnBtn = () => {
    const desc = document.querySelector(".hidden-desc");
    desc.classList.remove("hidden");
  };

  const mouseOutBtn = () => {
    const desc = document.querySelector(".hidden-desc");
    desc.classList.add("hidden");
  };

  const HandleMenuItemClick = (name) => {
    setActiveSidebar(name);
  };

  return (
    <>
      <div className="h-screen sticky top-0 mt-1 mb-4 ml-1 hidden md:flex flex-col justify-between w-24 lg:w-64 px-2 transform transition-colors duration-200 border-r">
        <div>
          <div className="flex w-full items-center justify-between h-12 rounded-full ">
            <button
              onClick={() => setLogout(!logout)}
              className="w-12 h-12 hover:bg-gray-lightest rounded-full  flex items-center justify-center font-bold text-3xl text-blue-400 cursor-pointer"
            >
              Ö
            </button>
            {logout ? (
              <Link
                to="/login"
                className="z-50 text-center rounded-md w-1/2 h-8 py-1 font-semibold cursor-pointer bg-red-100 text-red-600"
              >
                <p>Log out</p>
              </Link>
            ) : null}
          </div>
          <nav className="mb-4">
            <ul>
              <SideLink
                name={"Home"}
                Icon={HomeIcon}
                slug={"/"}
                onMenuItemClick={HandleMenuItemClick}
              />
              <SideLink
                name={"Notifications"}
                Icon={NotificationsIcon}
                slug="/notifications"
                onMenuItemClick={HandleMenuItemClick}
              />
              <SideLink
                name={"Messages"}
                Icon={MessagesIcon}
                slug="/messages"
                onMenuItemClick={HandleMenuItemClick}
              />
              <SideLink
                name={"Bookmarks"}
                Icon={BookmarksIcon}
                slug="/bookmarks"
                onMenuItemClick={HandleMenuItemClick}
              />
              <SideLink
                name={"Lists"}
                Icon={ListsIcon}
                slug={"/lists"}
                onMenuItemClick={HandleMenuItemClick}
              />
              {user === "user" ? (
                <SideLink
                  name={"Subscriptions"}
                  Icon={ExploreIcon}
                  slug={"/subscriptions"}
                  onMenuItemClick={HandleMenuItemClick}
                />
              ) : (
                <SideLink
                  name={"My Subscribers"}
                  Icon={ExploreIcon}
                  slug={"/my-subscribers"}
                  onMenuItemClick={HandleMenuItemClick}
                />
              )}

              {user === "user" ? (
                <SideLink
                  name={"Add Card"}
                  Icon={AddCard}
                  slug={"/addcard"}
                  onMenuItemClick={HandleMenuItemClick}
                />
              ) : (
                <SideLink
                  name={"Balance"}
                  Icon={AddCard}
                  slug={"/balance"}
                  onMenuItemClick={HandleMenuItemClick}
                />
              )}
              <SideLink
                name={"My Profile"}
                Icon={ProfileIcon}
                slug={"/myprofile"}
                onMenuItemClick={HandleMenuItemClick}
              />
              {user === "user" ? (
                <button
                  onMouseEnter={mouseOnBtn}
                  onMouseLeave={mouseOutBtn}
                  onClick={() => setUser("admin")}
                  className="border-2 border-blue-100 text-blue-400 p-2 rounded-md"
                >
                  Switch user to admin
                </button>
              ) : (
                <button
                  onMouseEnter={mouseOnBtn}
                  onMouseLeave={mouseOutBtn}
                  onClick={() => setUser("user")}
                  className="border-2 border-blue-100 text-blue-400 p-2 rounded-md"
                >
                  Switch admin to user
                </button>
              )}
              <p className="hidden-desc text-gray-400 p-2 border border-gray-400 mt-3 rounded-md hidden">
                This button for you to see the 'user' and 'admin' accounts
                during the development process.
              </p>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mobile-nav z-10 bg-white flex items-center justify-around md:hidden fixed bottom-0 left-0 w-screen border-t">
        <SideLink
          Icon={HomeIcon}
          slug="/"
          onMenuItemClick={HandleMenuItemClick}
        />
        <SideLink
          Icon={NotificationsIcon}
          slug="/notifications"
          onMenuItemClick={HandleMenuItemClick}
        />
        <SideLink
          Icon={MessagesIcon}
          slug="/messages"
          onMenuItemClick={HandleMenuItemClick}
        />
        <SideLink
          Icon={BookmarksIcon}
          slug="/bookmarks"
          onMenuItemClick={HandleMenuItemClick}
        />
        <div className="w-12 h-12 hover:bg-gray-lightest rounded-full  flex items-center justify-center font-bold text-3xl text-gray-400 cursor-pointer">
          Ö
        </div>
      </div>
    </>
  );
};

export default Sidebar;
