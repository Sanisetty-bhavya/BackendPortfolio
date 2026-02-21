import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkBase =
  "text-xs font-medium tracking-wide transition-colors px-2 py-1 rounded-md";

function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-slate-50/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-12 lg:px-20 lg:max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg overflow-hidden bg-slate-900/90">
            <img
              src="/logo.png"
              alt="Bhavyasri Sanisetty logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Bhavyasri Sanisetty
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Backend Software Engineer
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-4 text-xs text-slate-600 dark:text-slate-300 sm:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-accent" : "hover:text-accent"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-accent" : "hover:text-accent"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/research"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-accent" : "hover:text-accent"}`
            }
          >
            Research
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-accent" : "hover:text-accent"}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/playground"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-accent" : "hover:text-accent"}`
            }
          >
            API Playground
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-accent" : "hover:text-accent"}`
            }
          >
            Contact
          </NavLink>
          <a
            href="/Resume.pdf"
            className="btn-outline text-[11px]"
            download
          >
            Download Resume
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-[11px] text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-600 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-700 shadow-sm transition hover:border-accent hover:text-accent dark:border-slate-600 dark:text-slate-200 sm:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="mr-1 text-[11px]">Menu</span>
          <span className="flex flex-col gap-[3px]">
            <span className="h-[1px] w-3 bg-current" />
            <span className="h-[1px] w-3 bg-current" />
          </span>
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-slate-50/95 px-6 pb-4 pt-2 text-xs text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950/95 sm:hidden">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={closeMobile}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "bg-slate-200 text-accent" : "hover:text-accent"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMobile}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "bg-slate-200 text-accent" : "hover:text-accent"}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/research"
              onClick={closeMobile}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "bg-slate-200 text-accent" : "hover:text-accent"}`
              }
            >
              Research
            </NavLink>
            <NavLink
              to="/projects"
              onClick={closeMobile}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "bg-slate-200 text-accent" : "hover:text-accent"}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/playground"
              onClick={closeMobile}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "bg-slate-200 text-accent" : "hover:text-accent"}`
              }
            >
              API Playground
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMobile}
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? "bg-slate-200 text-accent" : "hover:text-accent"}`
              }
            >
              Contact
            </NavLink>
            <a
              href="/Resume.pdf"
              className="btn-outline mt-1 text-[11px]"
              download
              onClick={closeMobile}
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => {
                onToggleTheme();
              }}
              className="mt-1 inline-flex h-8 w-8 items-center justify-center self-start rounded-full border border-slate-300 text-[11px] text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-600 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
