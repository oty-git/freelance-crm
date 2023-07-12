import { Link } from "react-router-dom";
import Languages from "../layout/main/header/Languages";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="outer__header">
          <div className="left__header">
            <div className="logo__wrapper">
              <Link to={"/"}>
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="inner-header__lang">
              <Languages className={"select--bordered select--auto"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
