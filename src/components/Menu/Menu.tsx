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
      className={`flex md:hidden fixed right-5 z-[10000] text-2xl cursor-pointer text-foreground bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-border shadow-sm transition-all duration-300 ${
        isBannerVisible ? "top-20" : "top-5"
      }`}
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? <FiX /> : <FiMenu />}
    </button>
  );
}
