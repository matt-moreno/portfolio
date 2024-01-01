import { NavLink } from "react-router-dom";
// Temporarily removing FiCamera from React Icons import
import { FiHome, FiUser, FiMail } from "react-icons/fi";
import { FaRunning, FaRegLightbulb } from "react-icons/fa";
import "./Nav.css";
// Will not be doing Photo section at this time

// TODO: CONVERT NAVLINK INTO PARENT CONTAINER
export default function Nav() {
  return (
    <nav className="nav-sidebar">
      <div className="nav-container">
        <NavLink to="/" end>
          <FiHome className="icon-style" />
          Home
        </NavLink>
      </div>
      <div className="nav-container">
        <NavLink to="/about">
          <FiUser className="icon-style" />
          About
        </NavLink>
      </div>
      {/* <div className="nav-container">
        <FiCamera className="icon-style" />
        <NavLink to="/photos">Photos</NavLink>
      </div> */}
      <div className="nav-container">
        <NavLink to="/runs">
          <FaRunning className="icon-style" />
          Runs
        </NavLink>
      </div>
      <div className="nav-container">
        <NavLink to="/resources">
          <FaRegLightbulb className="icon-style" />
          Resources
        </NavLink>
      </div>
      <div className="nav-container">
        <NavLink to="/contact">
          <FiMail className="icon-style" />
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
