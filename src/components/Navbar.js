import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="up bg-light-gray">
      <nav className="nav-bar container-c">
        <div className="nav-left">
          <h1 className="logo ">FT</h1>
        </div>
        <div className="nav-right">
          <ul className="nav-items md-font text-gray">
            <NavItem link="/" text="Home" />
            <NavItem link="/dashboard" text="Dashboard" />
            <NavItem link="/plans" text="Plans" />
            <NavItem link="/nutrition" text="Nutrition Tracking" />
            <NavItem link="/challenges" text="Challenges" />
            <NavItem link="/login" text="Login" />
            <NavItem link="/register" text="Register" />
          </ul>
        </div>
      </nav>
    </div>
  );
}

function NavItem({ link, text }) {
  return (
    <li className="item">
      <Link to={link}>{text}</Link>
    </li>
  );
}

export default Navbar;
