import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLinkTypes } from "../../components/Card/CardLink";
import ProjectCard from "../../components/DynamicCard/ProjectCard";
import projectData from "./constants";

export default function Projects() {
  const [isOutletActive, setIsOutletActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is not the root path to determine if Outlet is active
    setIsOutletActive(location.pathname !== "/projects");
  }, [location]);

  const projectCards = projectData.map((project: CardLinkTypes, index) => {
    return <ProjectCard key={index} {...project} />;
  });

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-16 py-16 md:py-24">
      {!isOutletActive && (
        <div className="max-w-6xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Projects
          </h1>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {!isOutletActive && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectCards}
          </div>
        )}

        <Outlet />
      </div>
    </div>
  );
}
