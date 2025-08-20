import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav_container mt-1">
      <Link className="nav_link lg:mx-2 mx-2" to="/">
        Home
      </Link>
      <Link className="nav_link lg:mx-2 mx-2" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
