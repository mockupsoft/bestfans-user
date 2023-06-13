import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const SideLink = ({ name, Icon, slug, onMenuItemClick }) => {
  const {activeSidebar} = useContext(AppContext);
  const isActive = activeSidebar === name;
  return (
    <Link
      to={slug}
      className="block group cursor-pointer text-lg mb-2 lg:w-100"
      onClick={() => onMenuItemClick(name)}
    >
      <div className="inline-block lg:w-full">
        <div
          className={`flex items-center lg:justify-start px-2 py-2 group-hover:bg-blue-100 group-hover:text-blue-300 rounded-full ${
            isActive ? "text-primary-base" : "text-gray-400"
          } `}
        >
          <Icon />
          <span className="ml-4 font-bold hidden lg:block">{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default SideLink;
