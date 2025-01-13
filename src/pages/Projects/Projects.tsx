import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLink, CardLinkTypes } from "../../components/Card/CardLink";
import projectData from "./constants";
import "./Projects.css";

export default function Projects() {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is not the root path to determine if Outlet is active
    setIsOutletActive(location.pathname !== "/projects");
  }, [location]);

  const projectCards = projectData.map((project: CardLinkTypes, index) => {
    const { link, isWebsite, title, description, image } = project;
    return (
      <CardLink
        key={index}
        isWebsite={isWebsite}
        link={link}
        title={title}
        description={description}
        image={image}
      />
    );
  });

  return (
    <div className="main-wrapper">
      <section className="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          {isOutletActive ? (
            <NavLink to="/projects">
              <p>Back to projects</p>
            </NavLink>
          ) : (
            <div className="projects-grid">{projectCards}</div>
          )}
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
