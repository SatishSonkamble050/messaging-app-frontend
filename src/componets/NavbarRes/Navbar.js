import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";

function Navbar() {
  const [mobilePopup, setMobilePoup] = useState(false);

  const mobilePopupHandler = () => {
    setMobilePoup(!mobilePopup);
  };
  return (
    <>
      <div className="navbarContainer">
        <div className="logo">
          {/* <img src='' /> */}
          LOGO
        </div>
        <div className={`${mobilePopup ? "mobileMenu" : "menuContent"}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="mobileIcon">
          {mobilePopup ? (
            <GiTireIronCross onClick={() => mobilePopupHandler()} />
          ) : (
            <IoMenu onClick={() => mobilePopupHandler()} />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
