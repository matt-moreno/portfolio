import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Sidebar from "../components/Sidebar/Sidebar";

export interface SidebarTypes {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
}

export default function MainLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="site-wrapper">
      <Menu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
