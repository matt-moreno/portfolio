import { NavLink } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
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
  const reduce = useReducedMotion();

  return (
    <nav className="flex flex-col gap-1 px-4 w-full max-w-[240px]">
      {navItems.map(({ path, icon: Icon, label }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"}
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `relative flex items-center gap-4 px-4 py-2.5 rounded-lg transition-colors ${
              isActive
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 bg-primary/10 rounded-lg"
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 32 }
                  }
                />
              )}
              <Icon className="relative z-10 text-lg flex-shrink-0" />
              <span className="relative z-10 text-[15px]">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
