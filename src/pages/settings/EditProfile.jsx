import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import SettingsItem from "../../components/SettingsItem";
import { settings } from "../../data/Settings";

// Layouts
import Container from "../../layout/Container";
import Sidebar from "../../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const EditProfile = () => {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );
  const [displayName, setDisplayName] = useState(
    window.localStorage.getItem("displayName")
  );
  const [bio, setBio] = useState(window.localStorage.getItem("bio"));
  const [location, setLocation] = useState(
    window.localStorage.getItem("location")
  );
  const [web, setWeb] = useState(window.localStorage.getItem("web"));

  const handleSave = (e) => {
    e.preventDefault();
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("displayName", displayName);
    window.localStorage.setItem("bio", bio);
    window.localStorage.setItem("location", location);
    window.localStorage.setItem("web", web);
    toast.success("Updated Successfully");
  };

  return (
    <Container>
      <Sidebar />
      <div className="bookmarks border-r w-full md:w-96 flex flex-col">
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
              SETTINGS
            </span>
          </Link>
        </header>
        {settings.map((setting) => {
          return <SettingsItem text={setting.name} slug={setting.slug} />;
        })}
        <div className="h-2 bg-gray-100 w-full"></div>
        <div className="flex items-center justify-between gap-4 border-b p-3 text-sm">
          <p className="font-semibold">General</p>
        </div>
        <SettingsItem text="Display" slug="/display" />
      </div>
      <div className="right-part border-r flex-1 hidden md:flex flex-col">
        <div className="flex items-center p-4 justify-between border-b">
          <p className="font-semibold">EDIT PROFILE</p>
          <button
            onClick={handleSave}
            className="py-1 px-2 border rounded-3xl text-white bg-blue-500 border-blue-400 hover:text-blue-500 hover:bg-white"
          >
            SAVE
          </button>
        </div>
        <ToastContainer />
        <div className="h-full flex flex-col gap-2">
          <div className="bg-gradient-to-b from-gray-500 to-gray-300 w-full h-52">
            <div className="header flex justify-between py-2 px-4">
              <div className="header-left flex items-center gap-5">
                <Link
                  to={-1}
                  className="w-8 h-8 text-white rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600"
                >
                  <AiOutlineArrowLeft size={24} />
                </Link>
                <div className="flex flex-col text-white">
                  <p className="font-semibold text-lg">Eyüp Ömer Odabaşı</p>
                  <p>No posts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-5">
            <div className="-translate-y-10 cursor-pointer w-24 h-24 rounded-full border-2 text-white bg-blue-300 flex items-center justify-center font-bold text-3xl">
              E
            </div>
            <form onSubmit={handleSave} className="flex flex-col gap-4 items-center" action="">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
                name="username"
                id="username"
                placeholder="Username"
                type="text"
              />
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
                name="displayName"
                id="displayName"
                placeholder="Display name"
                type="text"
              />
              <input
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
                name="bio"
                id="bio"
                placeholder="Bio"
                type="text"
              />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
                name="location"
                id="location"
                placeholder="Location"
                type="text"
              />
              <input
                value={web}
                onChange={(e) => setWeb(e.target.value)}
                className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
                name="webUrl"
                id="webUrl"
                placeholder="Website URL"
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditProfile;
