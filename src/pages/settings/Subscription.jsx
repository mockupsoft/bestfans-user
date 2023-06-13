import { Link } from "react-router-dom";

import SettingsItem from "../../components/SettingsItem";
import {settings} from "../../data/Settings";

// Layouts
import Container from "../../layout/Container";
import Sidebar from "../../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";


const Display = () => {
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
          <p className="font-semibold">SUBSCRIPTION</p>
          <button className="py-1 px-2 border rounded-3xl text-white bg-blue-500 border-blue-400 hover:text-blue-500 hover:bg-white">
            SAVE
          </button>
        </div>
        <div className="h-full flex flex-col gap-2 px-5">
          <form className="flex flex-col gap-4 items-center" action="">
            <h4 className="text-sm text-start font-semibold w-full border-b py-2">
              Price per month
            </h4>
            <div className="flex flex-col items-center mx-auto w-full gap-3">
              <input
                className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
                name="price"
                id="price"
                placeholder="$ Free"
                type="text"
              />
              <div className="felx flex-col w-full border-b pb-4">
                <p className="text-xs text-gray-300 text-start w-full">
                  Minimum $0 USD or free.
                </p>
                <p className="text-xs text-gray-300 text-start w-full">
                  You must Add a Bank Account or Payment Information before you
                  can set your price or accept tips.
                </p>
                <div className="flex justify-end gap-4 mt-3 ml-auto">
                  <button className="py-1 px-2 rounded-lg font-semibold text-white bg-red-500 border border-red-500 hover:bg-white hover:text-red-500">
                    CANCEL
                  </button>
                  <button className="py-1 px-2 rounded-lg font-semibold text-white bg-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500">
                    SAVE
                  </button>
                </div>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Display;
