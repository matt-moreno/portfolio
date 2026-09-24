import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:font-medium"
      >
        Skip to content
      </a>
      <Header />

      {/* No top offset: pages scroll under the floating glass nav and pad themselves.
          Flex column so short pages can use flex-1 to fill the space above the footer. */}
      <main id="main" tabIndex={-1} className="relative flex-1 flex flex-col focus:outline-none">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
