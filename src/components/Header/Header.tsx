import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import GlassSurface from "../GlassSurface/GlassSurface";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/runs", label: "Runs" },
  { path: "/projects", label: "Projects" },
  { path: "/resources", label: "Resources" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Once content starts passing under the nav, thicken the glass for legibility
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={isScrolled}
      className="fixed top-3 md:top-4 inset-x-0 z-[9999] flex justify-end md:justify-center px-4 pointer-events-none"
    >
      <div className="relative pointer-events-auto">
        <GlassSurface className="rounded-full flex items-center gap-1 p-1.5">
          <nav className="relative z-10 hidden md:flex items-center gap-0.5">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 h-9 flex items-center rounded-full text-sm transition-colors ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="glass-pill absolute inset-0 rounded-full"
                        transition={
                          reduce
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 380, damping: 32 }
                        }
                      />
                    )}
                    <span className="relative">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            className="relative z-10 md:hidden flex items-center justify-center w-9 h-9 rounded-full text-lg text-foreground hover:bg-foreground/5 transition-colors"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </GlassSurface>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }
              }
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute right-0 top-full mt-2 w-[min(16rem,calc(100vw-2rem))] origin-top-right"
            >
              <GlassSurface
                radius={24}
                blur={10}
                className="glass-thick rounded-3xl"
              >
                <nav className="relative z-10 p-2 flex flex-col">
                  {navItems.map(({ path, label }) => (
                    <NavLink
                      key={path}
                      to={path}
                      end={path === "/"}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-2xl text-base transition-colors ${
                          isActive
                            ? "glass-pill text-foreground font-medium"
                            : "text-foreground/70 hover:text-foreground"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </GlassSurface>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
