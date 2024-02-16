import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Sidebar.css";
import { SidebarTypes } from "../../layouts/MainLayout";

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarTypes) {
  return (
    <header className={isSidebarOpen ? "open" : "closed"}>
      <Profile toggleSidebar={toggleSidebar} />
      <Nav toggleSidebar={toggleSidebar} />
      <Footer />
    </header>
  );
}
