import React from "react";
import LeftHeader from "./header/LeftHeader";
import RightHeader from "./header/RightHeader";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="outer__header">
          <LeftHeader />
          <RightHeader />
          <div className="menu__button--header">
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
