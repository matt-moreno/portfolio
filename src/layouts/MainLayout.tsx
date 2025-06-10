import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Sidebar from "../components/Sidebar/Sidebar";

export interface SidebarTypes {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
}

export default function MainLayout() {
  // Start with sidebar closed on mobile, but responsive CSS will handle desktop visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Menu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area - add left margin to account for fixed sidebar */}
      <main className="flex-1 ml-0 md:ml-[300px] transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}
