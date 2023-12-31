import { NavLink } from "react-router-dom";
// Temporarily removing FiCamera from React Icons import
import { FiHome, FiUser, FiMail } from "react-icons/fi";
import { FaRunning, FaRegLightbulb } from "react-icons/fa";
import "./Nav.css";
// Will not be doing Photo section at this time

export default function Nav() {
  return (
    <nav className="nav-sidebar">
      <div className="nav-container">
        <FiHome className="icon-style" />
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-container">
        <FiUser className="icon-style" />
        <NavLink to="/about">About</NavLink>
      </div>
      {/* <div className="nav-container">
        <FiCamera className="icon-style" />
        <NavLink to="/photos">Photos</NavLink>
      </div> */}
      <div className="nav-container">
        <FaRunning className="icon-style" />
        <NavLink to="/runs">Runs</NavLink>
      </div>
      <div className="nav-container">
        <FaRegLightbulb className="icon-style" />
        <NavLink to="/resources">Resources</NavLink>
      </div>
      <div className="nav-container">
        <FiMail className="icon-style" />
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
