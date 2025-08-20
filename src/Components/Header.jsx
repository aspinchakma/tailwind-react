import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/loging">Login</Link>
      <Link to="/blogs">Blogs</Link>
    </nav>
  );
};

export default Header;
