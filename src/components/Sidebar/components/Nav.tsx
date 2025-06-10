import { NavLink } from "react-router-dom";
import { SidebarTypes } from "../../../layouts/MainLayout";
import {
  BsHouseDoor,
  BsPerson,
  BsActivity,
  BsFolder,
  BsLightbulb,
  BsEnvelope,
} from "react-icons/bs";

interface NavItem {
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/", icon: BsHouseDoor, label: "Home" },
  { path: "/about", icon: BsPerson, label: "About" },
  { path: "/runs", icon: BsActivity, label: "Runs" },
  { path: "/projects", icon: BsFolder, label: "Projects" },
  { path: "/resources", icon: BsLightbulb, label: "Resources" },
  { path: "/contact", icon: BsEnvelope, label: "Contact" },
];

export default function Nav({ toggleSidebar }: SidebarTypes) {
  return (
    <nav className="flex flex-col gap-2 px-4 w-full max-w-[240px]">
      {navItems.map(({ path, icon: Icon, label }) => (
        <NavLink
          key={path}
          to={path}
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 relative ${
              isActive
                ? "bg-white text-slate-900 shadow-lg border-l-4 border-l-blue-600 font-semibold"
                : "text-slate-200 hover:text-white hover:bg-slate-700 hover:border-l-4 hover:border-l-slate-400 border-l-4 border-l-transparent"
            }`
          }
        >
          <Icon className="text-xl flex-shrink-0" />
          <span className="text-lg">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
