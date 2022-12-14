import React from "react";
import Logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
