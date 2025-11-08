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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <section className="container mx-auto px-6 py-8 lg:px-8">
        {!isOutletActive && (
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Projects
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          {!isOutletActive && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {projectCards}
            </div>
          )}
        </div>

        <div className={!isOutletActive ? "mt-12" : ""}>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
