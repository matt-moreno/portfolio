import { NavLink } from "react-router-dom";

export default function Bellabeat() {
  return (
    <div className="w-full min-h-screen px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 relative">
          <div className="flex items-center justify-center">
            <NavLink
              to="/projects"
              className="absolute left-0 inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground font-medium text-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to projects
            </NavLink>
            <div className="text-center">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-2">
                Bellabeat Case Study
              </h1>
              <p className="text-muted-foreground text-sm">
                Google Coursera Data Analytics Capstone Project
              </p>
            </div>
          </div>
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
