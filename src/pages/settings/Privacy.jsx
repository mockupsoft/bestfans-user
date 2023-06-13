import { Link } from "react-router-dom";

import SettingsItem from "../../components/SettingsItem";
import {settings} from "../../data/Settings";

// Layouts
import Container from "../../layout/Container";
import Sidebar from "../../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const Privacy = () => {
  return (
    <Container>
      <Sidebar />
      <div className="bookmarks border-r w-96 hidden md:flex flex-col">
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
      <div className="right-part border-r flex-1 flex flex-col">
        <div className="flex items-center p-4 justify-between border-b">
          <p className="font-semibold">PRIVACY and SAFETY</p>
          <button className="py-1 px-2 border rounded-3xl text-white bg-blue-500 border-blue-400 hover:text-blue-500 hover:bg-white">
            SAVE
          </button>
        </div>
        <div className="h-full flex flex-col gap-2 px-5">
          <form className="flex flex-col gap-4 items-center" action="">
            <h4 className="text-sm text-start font-semibold w-full border-b py-2">
              Profile
            </h4>
            <div className="flex items-center justify-between w-full gap-3">
              <div className="font-medium flex-1">Show activity status</div>
              <div className="flex items-center justify-center">
                <label for="toogleA" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input id="toogleA" type="checkbox" className="sr-only" />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-3">
              <div className="font-medium flex-1">Show subscription offers</div>
              <div className="flex items-center justify-center">
                <label for="toogleB" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input id="toogleB" type="checkbox" className="sr-only" />
                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                  </div>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Privacy;
