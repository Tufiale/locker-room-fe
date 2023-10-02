import "../Header/Header.scss";
import LockerRoomHeader from "../../assets/images/Locker-Room-Header.png";

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
