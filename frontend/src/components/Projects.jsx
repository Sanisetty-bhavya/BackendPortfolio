import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const isFeatured = project.featured;
  const sourceUrl = project.source_url || "https://github.com/Sanisetty-bhavya";
  
  // Helper to get system signal label
  const getSystemSignal = (slug) => {
    if (slug.includes("agriculture")) return "Production System";
    if (slug.includes("mfa")) return "Security System";
    if (slug.includes("prompt")) return "GenAI System";
    if (slug.includes("translation")) return "API System";
    if (slug.includes("academic")) return "ML Pipeline";
    return null;
  };
  
  const systemSignal = getSystemSignal(project.slug);

  return (
    <article className="card p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
            {project.role}
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-1">
            {project.name}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          {systemSignal && (
            <span className="rounded-md bg-accent/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-accent border border-accent/20">
              {systemSignal}
            </span>
          )}
          {isFeatured && (
            <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="text-xs space-y-4 text-slate-700 dark:text-slate-300">
        <div className="space-y-1">
          <p className="font-bold text-slate-900 dark:text-slate-100 uppercase text-[10px] tracking-wider">Problem</p>
          <p className="leading-relaxed">{project.problem}</p>
        </div>
        
        <div className="space-y-1">
          <p className="font-bold text-slate-900 dark:text-slate-100 uppercase text-[10px] tracking-wider">Approach</p>
          <div className="whitespace-pre-line leading-relaxed pl-1 border-l-2 border-slate-200 dark:border-slate-800">
            {project.approach}
          </div>
        </div>

        <div className="space-y-1">
          <p className="font-bold text-slate-900 dark:text-slate-100 uppercase text-[10px] tracking-wider">Result</p>
          <div className="whitespace-pre-line leading-relaxed">
            {project.result}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tech_stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-600 dark:bg-slate-800/80 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="pt-2 grid grid-cols-2 gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="btn-primary w-full text-xs py-2 flex items-center justify-center gap-2"
        >
          <span>View Details</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-outline w-full text-xs py-2 flex items-center justify-center gap-2"
        >
          <span>Source Code</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function Projects({ projects, showHeader = true }) {
  return (
    <section id="projects" className="space-y-12">
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
