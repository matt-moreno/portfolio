import { NavLink } from "react-router-dom";
import { BsArrowRight, BsBoxArrowUpRight } from "react-icons/bs";
import { CardLinkTypes } from "../Card/CardLink";

export default function ProjectCard({
  title,
  image,
  link,
  isWebsite,
  description,
  tag,
}: CardLinkTypes) {
  const CardContent = (
    <div className="group h-full flex flex-col overflow-hidden rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
      <div className="relative h-44 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        {tag && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full border border-border">
              {tag}
            </span>
          </div>
        )}
        {isWebsite && (
          <div className="absolute top-3 left-3">
            <div className="p-1.5 bg-background/90 rounded-full border border-border">
              <BsBoxArrowUpRight className="w-3.5 h-3.5 text-foreground" />
            </div>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          {isWebsite ? "View Repository" : "View Project"}
          <BsArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );

  return isWebsite ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {CardContent}
    </a>
  ) : (
    <NavLink to={link} className="block h-full">
      {CardContent}
    </NavLink>
  );
}
