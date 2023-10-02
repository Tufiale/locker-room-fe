import "../Header/Header.scss";
import LockerRoomHeader from "../../LockerRoomHeader.png";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <img
          className="header_image"
          src={LockerRoomHeader}
          alt="Locker room banner"
        />
      </div>
    </>
  );
};

export default Header;
