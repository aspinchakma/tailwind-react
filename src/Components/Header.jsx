import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav_container flex items-center justify-between border-b-2 border-b-gray-200 py-4">
      <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
      {/* Link Container */}
      <div>
        <Link className="nav_link lg:mx-2 mx-2" to="/">
          Home
        </Link>
        <Link className="nav_link lg:mx-2 mx-2" to="/contact">
          Contact
        </Link>
      </div>
      <img
        className="w-[55px] rounded-full"
        src="https://i.pravatar.cc/150?img=12"
        alt=""
      />
    </nav>
  );
};

export default Header;
