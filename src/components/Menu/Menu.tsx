import { FiMenu, FiX } from "react-icons/fi";
import { SidebarTypes } from "../../layouts/MainLayout";

interface MenuProps extends SidebarTypes {
  isBannerVisible?: boolean;
}

export default function Menu({
  isSidebarOpen,
  toggleSidebar,
  isBannerVisible = true,
}: MenuProps) {
  return (
    <button
      className={`flex md:hidden fixed right-5 z-[10000] text-2xl cursor-pointer text-white bg-slate-800/90 p-2 rounded border border-slate-400/30 transition-all duration-300 ${
        isBannerVisible ? "top-20" : "top-5"
      }`}
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? <FiX /> : <FiMenu />}
    </button>
  );
}
