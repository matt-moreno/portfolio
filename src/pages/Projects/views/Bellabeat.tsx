import { NavLink } from "react-router-dom";

export default function Bellabeat() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8 relative">
          <div className="flex items-center justify-center">
            <NavLink
              to="/projects"
              className="absolute left-0 inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium"
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
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Bellabeat Case Study
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Google Coursera Data Analytics Capstone Project
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
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
