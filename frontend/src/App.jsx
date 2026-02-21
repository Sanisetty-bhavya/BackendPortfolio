import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ResearchPage from "./pages/ResearchPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import PlaygroundPage from "./pages/PlaygroundPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

function App() {
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [hiring, setHiring] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });

  useEffect(() => {
    async function loadData() {
      try {
        const [aboutRes, skillsRes, projectsRes, hiringRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/about`),
          fetch(`${API_BASE_URL}/api/skills`),
          fetch(`${API_BASE_URL}/api/projects`),
          fetch(`${API_BASE_URL}/api/hiring`)
        ]);
        if (!aboutRes.ok || !skillsRes.ok || !projectsRes.ok || !hiringRes.ok) {
          throw new Error("Failed to load portfolio data");
        }
        const [aboutJson, skillsJson, projectsJson, hiringJson] = await Promise.all([
          aboutRes.json(),
          skillsRes.json(),
          projectsRes.json(),
          hiringRes.json()
        ]);
        setAbout(aboutJson);
        setSkills(skillsJson);
        setProjects(projectsJson);
        setHiring(hiringJson);
      } catch (e) {
        setError(e.message || "Unexpected error");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-slate-100">
        <p className="text-sm text-slate-400">Loading portfolio...</p>
      </div>
    );
  }

  if (error || !about) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-slate-100">
        <div className="card max-w-md p-6">
          <p className="text-sm text-red-400 mb-2">There was a problem loading the portfolio.</p>
          <p className="text-xs text-slate-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-50">
      <div className="min-h-screen flex flex-col">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-1 pt-16">
          <div className="mx-auto max-w-6xl px-6 py-10 md:px-12 md:py-14 lg:max-w-7xl lg:px-20 lg:py-16">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    about={about}
                    skills={skills}
                    projects={projects}
                    hiring={hiring}
                    apiBaseUrl={API_BASE_URL}
                  />
                }
              />
              <Route
                path="/about"
                element={<AboutPage about={about} skills={skills} />}
              />
              <Route path="/research" element={<ResearchPage />} />
              <Route
                path="/projects"
                element={<ProjectsPage projects={projects} />}
              />
              <Route
                path="/projects/:id"
                element={<ProjectDetailPage projects={projects} apiBaseUrl={API_BASE_URL} />}
              />
              <Route
                path="/playground"
                element={<PlaygroundPage apiBaseUrl={API_BASE_URL} />}
              />
              <Route
                path="/contact"
                element={<ContactPage apiBaseUrl={API_BASE_URL} />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
