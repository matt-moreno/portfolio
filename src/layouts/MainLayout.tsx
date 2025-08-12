import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Heart } from "lucide-react";
import Menu from "../components/Menu/Menu";
import Sidebar from "../components/Sidebar/Sidebar";
import Banner, { BannerData } from "../components/Banner/Banner";

export interface SidebarTypes {
  isSidebarOpen?: boolean;
  toggleSidebar: () => void;
}

export default function MainLayout() {
  // Start with sidebar closed on mobile, but responsive CSS will handle desktop visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleBannerDismiss = () => {
    setIsBannerVisible(false);
  };

  // Banner data for RMHC fundraising
  const bannerData: BannerData = {
    title:
      "On October 12, I’m Running the Chicago Marathon to Help Keep Families Close",
    description: "Support Ronald McDonald House Charity",
    shortDescription: "RMHC for Chicago Marathon",
    buttonText: "Learn More",
    buttonUrl: "https://give.rmhc.org/fundraiser/6549467",
    icon: Heart,
    isDismissible: true,
  };

  return (
    <div>
      <Banner
        data={bannerData}
        isVisible={isBannerVisible}
        onDismiss={handleBannerDismiss}
      />
      <Menu
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isBannerVisible={isBannerVisible}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area - add left margin to account for fixed sidebar and conditional top padding for sticky banner */}
      <main
        className={`flex-1 ml-0 md:ml-[300px] transition-all duration-300 text-gray-900 dark:text-gray-100 ${
          isBannerVisible ? "pt-16" : "pt-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
