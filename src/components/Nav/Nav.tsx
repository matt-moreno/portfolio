import { NavLink } from "react-router-dom";
// Temporarily removing FiCamera from React Icons import
import { FiHome, FiUser, FiMail } from "react-icons/fi";
import { FaRunning, FaRegLightbulb } from "react-icons/fa";
import { SidebarTypes } from "../../layouts/MainLayout";
import "./Nav.css";
// Will not be doing Photo section at this time

// TODO: CONVERT NAVLINK INTO PARENT CONTAINER
export default function Nav({ toggleSidebar }: SidebarTypes) {
  return (
    <nav className="nav-sidebar" onClick={toggleSidebar}>
      <div className="nav-container">
        <NavLink to="/" end>
          <FiHome className="icon-style" />
          Home
        </NavLink>
      </div>
      <div className="nav-container" onClick={toggleSidebar}>
        <NavLink to="/about">
          <FiUser className="icon-style" />
          About
        </NavLink>
      </div>
      {/* <div className="nav-container">
        <FiCamera className="icon-style" />
        <NavLink to="/photos">Photos</NavLink>
      </div> */}
      {/* <div className="nav-container" onClick={toggleSidebar}>
        <NavLink to="/projects">
          <FaRegLightbulb className="icon-style" />
          Projects
        </NavLink>
      </div> */}
      <div className="nav-container" onClick={toggleSidebar}>
        <NavLink to="/runs">
          <FaRunning className="icon-style" />
          Runs
        </NavLink>
      </div>
      <div className="nav-container" onClick={toggleSidebar}>
        <NavLink to="/resources">
          <FaRegLightbulb className="icon-style" />
          Resources
        </NavLink>
      </div>
      <div className="nav-container" onClick={toggleSidebar}>
        <NavLink to="/contact">
          <FiMail className="icon-style" />
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
