import { Link } from "react-router-dom";

const BookmarkItem = ({ text, slug, icon }) => {
  return (
    <Link
      to={slug}
      className="flex items-center hover:text-blue-400 cursor-pointer justify-start gap-4 lg:border-b p-3"
    >
      {icon}
      <p className="font-semibold hidden lg:block">{text}</p>
    </Link>
  );
};

export default BookmarkItem;
