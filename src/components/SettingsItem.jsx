import { Link } from "react-router-dom";

// Icons
import { AiOutlineArrowRight } from "react-icons/ai";

const SettingsItem = ({text, slug}) => {

  return (
    <Link to={slug} className="flex items-center hover:text-blue-400 cursor-pointer justify-between gap-4 border-b p-3 text-sm">
            <p className="font-semibold">{text}</p>
            <AiOutlineArrowRight/>
        </Link>
  )
}

export default SettingsItem;