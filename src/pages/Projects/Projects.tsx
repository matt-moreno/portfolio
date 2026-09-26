import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { cn } from "@/lib/utils";
import projectData, { mastersProjects, Project } from "./constants";

const sections = [
  { heading: "Master's projects", projects: mastersProjects },
  { heading: "Other projects", projects: projectData },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const Arrow = project.external ? BsArrowUpRight : BsArrowRight;

  const body = (
    <>
      <div className="overflow-hidden rounded-2xl ring-1 ring-border bg-secondary">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading={index === 0 ? "eager" : "lazy"}
          className={cn(
            "w-full aspect-[16/10] transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            project.imageFit === "contain"
              ? "object-contain bg-white p-4 md:p-6"
              : "object-cover object-top"
          )}
        />
      </div>

      <div>
        <p className="text-sm text-muted-foreground">{project.kind}</p>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-[48ch]">
          {project.summary}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {project.tools.join(", ")}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-medium text-primary">
          {project.cta}
          <Arrow className="text-sm transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </>
  );

  // Image and copy side by side from md up; stacked with the image first on mobile
  const rowClass =
    "group grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 md:gap-12 items-center rounded-2xl";

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {project.external ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={rowClass}
        >
          {body}
        </a>
      ) : (
        <Link to={project.href} className={rowClass}>
          {body}
        </Link>
      )}
    </motion.li>
  );
}

export default function Projects() {
  const { pathname } = useLocation();

  // Child routes (case studies) render full-page on their own
  if (pathname !== "/projects") return <Outlet />;

  return (
    <div className="px-6 md:px-12 lg:px-16 pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-[60ch]">
          Case studies from my Master's in MIS and things I've built.
        </p>

        {sections.map((section, s) => (
          <section key={section.heading} className="mt-14 md:mt-20">
            <h2 className="pb-4 border-b border-border text-sm font-medium text-muted-foreground">
              {section.heading}
            </h2>
            <ul className="mt-10 md:mt-14 space-y-16 md:space-y-24">
              {section.projects.map((project, i) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={s === 0 ? i : i + 1}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
