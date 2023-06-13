import { SearchIcon } from "../icons/Icon";
import { SiOnlyfans } from "react-icons/si";
import { FiRefreshCw } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import WidgetItem from "../components/WidgetItem";
import { Link } from "react-router-dom";

const Widgets = () => {
  return (
    <aside className="w-96 hidden lg:block">
      <div className="flex items-center space-x-3 p-3 m-3 border rounded-sm text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <input
          type="text"
          placeholder="Search posts"
          className="focus:outline-none placeholder-dray-dark bg-transparent w-full text-sm"
        />
        <SearchIcon className="w-5 h-5" />
      </div>
      <div className="px-4 flex justify-between mt-4 mb-4 items-center">
        <p className="text-gray-500 font-semibold text-sm">SUGGESTIONS</p>
        <div className="flex items-center gap-2">
          <SiOnlyfans className="cursor-pointer" size={18} />
          <FiRefreshCw className="cursor-pointer" size={18} />
          <MdKeyboardArrowLeft className="cursor-pointer" size={18} />
          <MdKeyboardArrowRight className="cursor-pointer" size={18} />
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2">
        <WidgetItem
          to="/publisher-page"
          hero="https://pbs.twimg.com/profile_images/3032363142/a16a150bf6def6614d6b38096fd03330_400x400.jpeg"
          name="Heather"
          link="@keytomyheart"
          backGround="https://pbs.twimg.com/profile_banners/3030879222/1429285493/1080x360"
        />
        <WidgetItem
          to="/publisher-page"
          hero="https://pbs.twimg.com/profile_images/3032363142/a16a150bf6def6614d6b38096fd03330_400x400.jpeg"
          name="Amanda Cerny"
          link="@amandacerny"
          backGround="https://pbs.twimg.com/profile_banners/3030879222/1429285493/1080x360"
        />
        <WidgetItem
          to="/publisher-page"
          hero="https://pbs.twimg.com/profile_images/3032363142/a16a150bf6def6614d6b38096fd03330_400x400.jpeg"
          name="Coking With Nati"
          link="@itsnataliarosetv"
          backGround="https://pbs.twimg.com/profile_banners/3030879222/1429285493/1080x360"
        />
      </div>
      
      <div className="dots flex items-center justify-center gap-1 pt-2 pb-5 border-b px-2 w-11/12 mx-auto">
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
        <div className="bg-gray-200 w-2 h-2 rounded-full cursor-pointer hover:bg-gray-300"></div>
      </div>
      <div className="flex items-center justify-around w-10/12 mx-auto">
        <Link to={'/privacy-policy'} className="text-gray-400 text-xs">Privacy</Link>
        <p className="text-gray-400 text-xs">.</p>
        <Link to={'/cookie'} className="text-gray-400 text-xs">Cookie Notice</Link>
        <p className="text-gray-400 text-xs">.</p>
        <Link to={'/terms'} className="text-gray-400 text-xs">Terms of Service</Link>
      </div>
    </aside>
  );
};

export default Widgets;
