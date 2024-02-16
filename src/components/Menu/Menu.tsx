import { FiMenu, FiX } from "react-icons/fi";
import { SidebarTypes } from "../../layouts/MainLayout";
import "./Menu.css";

export default function Menu({ isSidebarOpen, toggleSidebar }: SidebarTypes) {
  return (
    <button className="mobile-menu" onClick={toggleSidebar}>
      {isSidebarOpen ? <FiX /> : <FiMenu />}
    </button>
  );
}
