import { NavLink } from "react-router-dom";

const navLinkBase =
  "text-xs font-medium tracking-wide transition-colors px-2 py-1 rounded-md";

function Navbar({ theme, onToggleTheme }) {
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
      </div>
    </header>
  );
}

export default Navbar;
