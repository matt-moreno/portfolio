import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiCamera, FiMail } from "react-icons/fi";
import { FaRunning, FaRegLightbulb } from "react-icons/fa";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <FiHome className="icon-style" />
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="nav-container">
        <FiUser className="icon-style" />
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="nav-container">
        <FiCamera className="icon-style" />
        <NavLink to="/photos">Photos</NavLink>
      </div>
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
