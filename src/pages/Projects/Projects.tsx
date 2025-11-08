import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardLinkTypes } from "../../components/Card/CardLink";
import projectData from "./constants";

// New beautiful ProjectCard component using Tailwind
function ProjectCard({
  title,
  image,
  link,
  isWebsite,
  description,
  tag,
}: CardLinkTypes) {
  const CardContent = (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
        <img
          src={image}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {tag && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              {tag}
            </span>
          </div>
        )}
        {isWebsite && (
          <div className="absolute top-4 left-4 z-20">
            <div className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-slate-600 dark:text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            {isWebsite ? "View Repository" : "View Project"}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return isWebsite ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    <NavLink to={link} className="block">
      {CardContent}
    </NavLink>
  );
}

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
