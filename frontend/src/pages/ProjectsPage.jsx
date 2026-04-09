import Projects from "../components/Projects.jsx";

function ProjectsPage({ projects }) {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="section-title text-2xl">Projects</h1>
        <p className="section-subtitle">
          Backend, security, and ML-focused work with real APIs and data flows.
        </p>
      </header>
      <Projects projects={projects} showHeader={false} />
    </div>
  );
}

export default ProjectsPage;
