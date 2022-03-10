import react from "react";
import logo from "../../images/react-icon-small.png";
import "./Header.style.css";

const Header = () => (
  <nav className="header-nav">
    <img src={logo} className="nav-logo" />
    <h3 className="nav-logo_text">React facts</h3>
    <h4 className="nav-title">React Course- Project 1</h4>
  </nav>
);

export default Header;
