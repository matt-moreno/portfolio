import "./Sidebar.css";
import { SidebarTypes } from "../../layouts/MainLayout";
import Profile from "./components/Profile";
import Nav from "./components/Nav";

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarTypes) {
  return (
    <header
      className={`
        fixed top-0 left-0 h-full z-10
        bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900
        border-r border-slate-700/50
        flex flex-col justify-between items-center
        transition-all duration-300 ease-in-out
        shadow-2xl
        ${
          isSidebarOpen
            ? "w-300"
            : "w-0 md:w-300 overflow-hidden md:overflow-visible"
        }
      `}
    >
      <Profile toggleSidebar={toggleSidebar} />
      <Nav toggleSidebar={toggleSidebar} />

      {/* Email Footer */}
      <div className="p-6 border-t border-slate-700/30 w-full">
        <a
          className="block text-center text-slate-300 hover:[color:#61dafbaa] transition-colors duration-300 text-sm"
          href="mailto:morenomatthew83@gmail.com"
        >
          morenomatthew83@gmail.com
        </a>
      </div>
    </header>
  );
}
