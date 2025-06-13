import { NavLink, Outlet } from "react-router-dom";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <section className="container mx-auto px-6 py-8 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Resources
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Curated resources to help you grow and learn across different
            domains
          </p>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-1.5 border border-slate-200/50 dark:border-slate-700/50">
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50"
                }`
              }
            >
              Websites
            </NavLink>
            <NavLink
              to="/resources/videos"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50"
                }`
              }
            >
              Videos
            </NavLink>
            <NavLink
              to="/resources/books"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50"
                }`
              }
            >
              Books
            </NavLink>
          </div>
        </nav>

        {/* Content Area */}
        <div className="relative">
          <Outlet />
        </div>
      </section>
    </div>
  );
}
