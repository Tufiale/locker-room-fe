import "../Nav/Nav.scss";
import { Link } from "react-router-dom";
import homeicon from "../../homeicon.svg";
import playericon from "../../playericon.svg";
import addplayericon from "../../addplayericon.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={homeicon} alt="home icon" className="nav__image" />
      </Link>

      <Link to="/viewPlayers">
        <img src={playericon} alt="player icon" className="nav__image" />
      </Link>

      <Link to="/addPlayers">
        <img src={addplayericon} alt="stadium icon" className="nav__image" />
      </Link>
    </nav>
  );
};

export default Nav;
