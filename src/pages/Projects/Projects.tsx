import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Projects.css";
import Card from "../../components/Card/Card";

export default function Projects() {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is not the root path to determine if Outlet is active
    setIsOutletActive(location.pathname !== "/projects");
  }, [location]);

  // TODO: Create constants file when more projects are completed.

  return (
    <div className="main-wrapper">
      <h1>Projects</h1>
      <div className="projects-container">
        {isOutletActive ? (
          <NavLink to="/projects">
            <p>Back to projects</p>
          </NavLink>
        ) : (
          <NavLink to="/projects/bellabeat-case-study">
            <Card
              title="Bellabeat Case Study"
              description="Google Coursera Capstone Project"
              image="/src/assets/Bellabeat.png"
            />
          </NavLink>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
