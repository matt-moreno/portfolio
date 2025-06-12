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
          <div className="flex bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200 dark:border-slate-700 shadow-lg">
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                `px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`
              }
            >
              Websites
            </NavLink>
            <NavLink
              to="/resources/videos"
              className={({ isActive }) =>
                `px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`
              }
            >
              Videos
            </NavLink>
            <NavLink
              to="/resources/books"
              className={({ isActive }) =>
                `px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg transform scale-105"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700/50"
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
