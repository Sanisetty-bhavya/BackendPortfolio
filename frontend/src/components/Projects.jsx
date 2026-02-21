import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const isFeatured = project.featured;
  const isSecurityProject = project.slug === "multi-factor-auth-system";
  const sourceUrl =
    project.slug === "multi-factor-auth-system"
      ? "https://github.com/Sanisetty-bhavya/Multi-Factor-Authentication-System/tree/main"
      : project.slug === "prompt-to-ui-generator"
        ? "https://github.com/Sanisetty-bhavya/Prompt-to-UI_Generator"
        : project.slug === "language-translation-client"
          ? "https://github.com/Sanisetty-bhavya/LanguageTranslationClient"
          : project.source_url || "https://github.com/Sanisetty-bhavya";
  return (
    <article className="card p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {project.role}
          </p>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            {project.name}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          {isFeatured && (
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
              Featured
            </span>
          )}
          {isSecurityProject && (
            <span className="rounded-full bg-slate-900/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
              Security Project
            </span>
          )}
        </div>
      </div>
      <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
        <p>
          <span className="font-semibold text-slate-900 dark:text-slate-200">
            Problem:
          </span>{" "}
          {project.problem}
        </p>
        <p>
          <span className="font-semibold text-slate-900 dark:text-slate-200">
            Approach:
          </span>{" "}
          {project.approach}
        </p>
        <p>
          <span className="font-semibold text-slate-900 dark:text-slate-200">
            Result:
          </span>{" "}
          {project.result}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-[10px] text-slate-800 dark:text-slate-300">
        {project.tech_stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800/80"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          to={`/projects/${project.slug}`}
          className="btn-primary text-xs"
        >
          View Details
        </Link>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-outline text-[11px]"
        >
          View Source Code
        </a>
      </div>
    </article>
  );
}

function Projects({ projects, showHeader = true }) {
  return (
    <section id="projects" className="space-y-4">
      {showHeader && (
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Problem-first backend projects with real APIs and data flows
            </p>
          </div>
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
