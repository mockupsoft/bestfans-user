import { BiDotsVerticalRounded } from "react-icons/bi";
import {Link} from "react-router-dom";

const WidgetItem = ({to, hero, name, link, backGround}) => {
  return (
    <Link to={to} target={"_blank"} className={`relative w-full h-36 bg-[url("https://pbs.twimg.com/profile_banners/1067125260124860416/1645677025/1080x360")] bg-no-repeat bg-center bg-cover cursor-pointer rounded-xl flex flex-col justify-between`}>
      <div className="widget-head flex items-center justify-between p-1">
        <div className="bg-transparent">
            <p className="text-white ">Free</p> 
        </div>
        <div>
        <BiDotsVerticalRounded className="text-3xl text-white cursor-pointer p-1 rounded-full" />
        </div>
      </div>
      <div className="widget-img w-20 h-20 absolute top-8 left-3 rounded-full border overflow-hidden">
        <img className="w-full h-full" src={hero} alt="img" />
      </div>
      <div className="widget-bottom mb-5 flex flex-col items-center justify-center">
        <Link to='/publisher-page' className="text-white font-bold">{name}</Link>
        <p className="text-white font-semibold">{link}</p>
      </div>
    </Link>
  );
};

export default WidgetItem;
