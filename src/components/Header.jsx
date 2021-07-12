import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/user";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Header">
      <Link to="/">
        NC Games <span id="username">{user}</span>
      </Link>
    </div>
  );
};

export default Header;
