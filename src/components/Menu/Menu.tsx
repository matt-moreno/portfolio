import { FiMenu, FiX } from "react-icons/fi";
import { SidebarTypes } from "../../layouts/MainLayout";

export default function Menu({ isSidebarOpen, toggleSidebar }: SidebarTypes) {
  return (
    <button
      className="flex md:hidden fixed top-5 right-5 z-[10000] text-2xl cursor-pointer text-white bg-slate-800/90 p-2 rounded border border-slate-400/30"
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? <FiX /> : <FiMenu />}
    </button>
  );
}
