import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export default function Bellabeat() {
  return (
    <div className="w-full min-h-screen px-6 md:px-12 lg:px-16 pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <NavLink
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <BsArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
            All projects
          </NavLink>
          <h1 className="mt-6 text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Bellabeat Case Study
          </h1>
          <p className="mt-2 text-muted-foreground">
            Google Data Analytics capstone, written in R on Kaggle
          </p>
        </div>

        <div className="relative w-full bg-card rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://www.kaggle.com/embed/morenomatt/bellabeat-case-study-r?kernelSessionId=180358905"
            className="w-full h-[80vh] lg:h-[85vh] border-0"
            title="Bellabeat Case Study | R"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
