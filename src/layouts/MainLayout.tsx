import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      {/* No top offset: pages scroll under the floating glass nav and pad themselves */}
      <main className="relative flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
