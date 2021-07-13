import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/user";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Header">
      <Link className="page-title" to="/">
        <h1>NC Games</h1>
      </Link>
      <h3 className="user">{user}</h3>
    </div>
  );
};

export default Header;
