import "../Header/Header.scss";
import LockerRoomHeader from "../../LockerRoomHeader.png";

const Header = () => {
  return (
    <>
      <img
        className="header_image"
        src={LockerRoomHeader}
        alt="Locker room banner"
      />
    </>
  );
};

export default Header;
