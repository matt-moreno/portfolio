import { SidebarTypes } from "../../layouts/MainLayout";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarTypes) {
  return (
    <header
      className={`
        fixed top-0 left-0 h-full z-[9999]
        bg-sidebar border-r border-border text-foreground
        flex flex-col justify-between items-center
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "w-300" : "w-0 md:w-300"}
        ${!isSidebarOpen ? "overflow-hidden md:overflow-visible" : ""}
      `}
    >
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Profile toggleSidebar={toggleSidebar} />
      <Nav toggleSidebar={toggleSidebar} />

      <div className="w-full p-6 border-t border-border">
        <a
          className="block text-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm py-2 px-4 rounded-lg"
          href="mailto:morenomatthew83@gmail.com"
        >
          morenomatthew83@gmail.com
        </a>
      </div>
    </header>
  );
}
