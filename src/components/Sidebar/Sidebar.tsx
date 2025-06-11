import { SidebarTypes } from "../../layouts/MainLayout";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
// import ThemeToggle from "./components/ThemeToggle";

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarTypes) {
  return (
    <header
      // Edit this to change the sidebar color
      className={`
        fixed top-0 left-0 h-full z-[9999]
        bg-slate-800 border-r border-slate-600/30 text-slate-100 
        flex flex-col justify-between items-center
        transition-all duration-300 ease-in-out
        shadow-2xl
        ${isSidebarOpen ? "w-300" : "w-0 md:w-300"}
        ${!isSidebarOpen ? "overflow-hidden md:overflow-visible" : ""}
      `}
    >
      <Profile toggleSidebar={toggleSidebar} />
      <Nav toggleSidebar={toggleSidebar} />

      {/* Theme Toggle */}
      {/* <div className="px-6 pb-4">
        <ThemeToggle />
      </div> */}

      {/* Email Footer */}
      <div className="p-6 border-t border-slate-700/30 w-full flex flex-row items-center">
        <a
          className="block text-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300 text-sm py-2 px-4 rounded-lg"
          href="mailto:morenomatthew83@gmail.com"
        >
          morenomatthew83@gmail.com
        </a>
      </div>
    </header>
  );
}
