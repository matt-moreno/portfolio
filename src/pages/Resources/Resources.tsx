import { NavLink, Outlet } from "react-router-dom";

export default function Resources() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-16 pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-[60ch]">
            Curated resources to help you grow and learn across different
            domains.
          </p>
        </div>

        <nav className="flex mb-10 border-b border-border">
          {[
            { to: ".", end: true, label: "Websites" },
            { to: "/resources/videos", end: false, label: "Videos" },
            { to: "/resources/books", end: false, label: "Books" },
          ].map((tab) => (
            <NavLink
              key={tab.label}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <Outlet />
      </div>
    </div>
  );
}
