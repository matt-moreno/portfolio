import { NavLink, useParams } from "react-router-dom";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import projectData, { mastersProjects, CaseStudy as CaseStudyData, Figure } from "../constants";
import NotFound from "../../NotFound/NotFound";
import { cn } from "@/lib/utils";

const allProjects = [...mastersProjects, ...projectData];

function FigureImage({ figure, eager = false }: { figure: Figure; eager?: boolean }) {
  return (
    <figure>
      <div className="flex justify-center overflow-hidden rounded-2xl ring-1 ring-border bg-secondary">
        {figure.video ? (
          // Muted with controls and no autoplay, so nothing moves until the viewer asks
          <video
            src={figure.video}
            poster={figure.src}
            aria-label={figure.alt}
            width={figure.width}
            height={figure.height}
            controls
            muted
            loop
            playsInline
            preload="none"
            style={{ maxWidth: figure.width }}
            className="w-full h-auto"
          />
        ) : (
          <img
            src={figure.src}
            alt={figure.alt}
            width={figure.width}
            height={figure.height}
            loading={eager ? "eager" : "lazy"}
            // Natural size at most, and never taller than the viewport, so square charts don't take over
            className="w-auto h-auto max-w-full max-h-[70vh]"
          />
        )}
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">{figure.caption}</figcaption>
    </figure>
  );
}

function Funnel({ funnel }: { funnel: NonNullable<CaseStudyData["funnel"]> }) {
  const start = funnel.steps[0].value;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <p className="text-sm font-medium text-foreground">{funnel.title}</p>
      <ol className="mt-4 space-y-3">
        {funnel.steps.map((step) => {
          const share = step.value / start;
          return (
            <li key={step.label}>
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="text-foreground">{step.label}</span>
                <span className="tabular-nums text-muted-foreground">
                  {step.value.toLocaleString()} · {Math.round(share * 100)}%
                </span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${share * 100}%` }}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = allProjects.find((p) => p.href === `/projects/${slug}`);

  if (!project?.caseStudy) return <NotFound />;

  const study = project.caseStudy;
  const [hero, ...figures] = study.figures;

  return (
    <div className="w-full px-6 md:px-12 lg:px-16 pt-28 pb-16 md:pt-32 md:pb-24">
      <article className="max-w-4xl mx-auto">
        <NavLink
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <BsArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
          All projects
        </NavLink>

        <header className="mt-6">
          {study.logo && (
            <img
              src={study.logo.src}
              alt={study.logo.alt}
              width={study.logo.width}
              height={study.logo.height}
              className="mb-5 h-7 md:h-8 w-auto"
            />
          )}
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {study.course} · {study.term} · {study.team ?? "Solo"}
          </p>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-[62ch]">
            {project.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
          {study.links && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {study.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-medium text-primary"
                  >
                    {link.label}
                    <BsArrowUpRight className="text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </header>

        {hero && (
          <div className="mt-10">
            <FigureImage figure={hero} eager />
          </div>
        )}

        {study.stats && (
          <dl
            className={cn(
              "mt-10 grid grid-cols-2 gap-3",
              study.stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
            )}
          >
            {study.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-4">
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-xl md:text-2xl font-semibold tabular-nums text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-12 space-y-10 max-w-[68ch]">
          {study.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                {section.heading}
              </h2>
              {section.body && (
                <p className="mt-3 text-muted-foreground leading-relaxed">{section.body}</p>
              )}
              {section.bullets && (
                <ul className="mt-3 space-y-2 list-disc pl-5 marker:text-primary text-muted-foreground leading-relaxed">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {study.funnel && <Funnel funnel={study.funnel} />}
        </div>

        {figures.length > 0 && (
          <div
            className={cn(
              "mt-14 grid grid-cols-1 gap-8",
              // Videos need the full width to be watchable; charts and stills sit two up
              figures.length > 1 && !figures.some((f) => f.video) && "md:grid-cols-2"
            )}
          >
            {figures.map((figure) => (
              <FigureImage key={figure.src} figure={figure} />
            ))}
          </div>
        )}
      </article>
    </div>
  );
}
