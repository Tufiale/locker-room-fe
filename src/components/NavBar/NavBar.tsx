import homeIcon from "../../homeIcon.jpeg";
import footballPlayerIcon from "../../footballPlayerIcon.webp";
import stadiumIcon from "../../stadiumIcon.png";

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="/home">
        <img src={homeIcon} alt="home icon" />
      </a>

      <a href="/player">
        <img src={footballPlayerIcon} alt="player icon" />
      </a>

      <a href="/stadium">
        <img src={stadiumIcon} alt="stadium icon" />
      </a>
    </nav>
  );
};

export default NavBar;
