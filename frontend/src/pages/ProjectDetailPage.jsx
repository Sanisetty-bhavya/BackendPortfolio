import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetailPage({ apiBaseUrl }) {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      setLoading(true);
      try {
        const res = await fetch(`${apiBaseUrl}/api/projects/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to load project details (Status: ${res.status})`);
        }
        const data = await res.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id, apiBaseUrl]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm text-slate-400 animate-pulse font-mono">Loading system parameters...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="space-y-4 py-10 max-w-2xl mx-auto text-center">
        <h1 className="section-title text-3xl text-red-400 font-bold">404: System Not Found</h1>
        <p className="section-subtitle text-lg">
          {error || "The requested project module could not be initialized."}
        </p>
        <Link to="/projects" className="btn-outline inline-flex items-center gap-2 mt-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </div>
    );
  }

  const sections = [
    { title: "1. Problem", content: project.problem },
    { title: "2. Why this is hard", content: project.why_hard, icon: "⚡" },
    { title: "3. System Overview", content: project.system_overview, icon: "🌐" },
    { title: "4. Architecture", content: project.architecture_desc, icon: "🏗️" },
    { title: "5. Data Pipeline", content: project.data_pipeline, icon: "⚙️" },
    { title: "6. Model / Core Logic", content: project.model_core_logic, icon: "🧠" },
    { title: "7. Evaluation", content: project.evaluation, icon: "📊" },
    { title: "8. Deployment & Scaling", content: project.deployment_scaling, icon: "🚀" },
    { title: "9. API Example", content: project.api_example, isCode: true, icon: "🔌" },
    { title: "10. Engineering Decisions", content: project.engineering_decisions, icon: "🛠️" },
    { title: "11. Tradeoffs / Limitations", content: project.tradeoffs_limitations, icon: "⚖️" },
    { title: "12. Future Work", content: project.future_work, icon: "🔮" },
  ];

  return (
    <div className="space-y-20 max-w-5xl mx-auto pb-24">
      <header className="space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/projects" className="text-accent hover:underline text-sm font-bold flex items-center gap-2 group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            BACK TO SYSTEMS
          </Link>
          <div className="flex gap-2">
            <span className="rounded-md bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/20">
              System Live
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {project.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400">
            <p className="text-lg font-bold tracking-widest border-l-4 border-accent pl-4">
              {project.role}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech_stack.map((tech) => (
            <span key={tech} className="rounded-md bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:bg-slate-900 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-16 lg:grid-cols-[1fr_300px] items-start">
        <div className="space-y-16">
          {sections.map((section, idx) => (
            <section key={idx} className="group space-y-6 scroll-mt-24" id={`section-${idx + 1}`}>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xl group-hover:scale-110 transition-transform">
                  {section.icon || "📄"}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-3">
                  <span className="text-accent/50 tabular-nums">{section.title.split('.')[0]}.</span>
                  {section.title.split('. ')[1]}
                </h2>
              </div>
              
              <div className="pl-14">
                {section.isCode ? (
                  <div className="relative group/code">
                    <div className="absolute -inset-2 bg-accent/10 rounded-xl blur-lg opacity-0 group-hover/code:opacity-100 transition-opacity" />
                    <div className="relative code-window border-slate-800/50 bg-slate-950/90 shadow-2xl">
                      <div className="flex gap-1.5 mb-4 border-b border-slate-800 pb-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
                      </div>
                      <pre className="whitespace-pre-wrap text-emerald-400 font-mono text-sm leading-relaxed">
                        {section.content}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-700 dark:text-slate-300 text-base leading-loose whitespace-pre-line font-medium">
                      {section.content === "..." ? (
                        <span className="text-slate-400 italic">Documentation for this module is currently being finalized.</span>
                      ) : (
                        section.content
                      )}
                    </p>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        <aside className="sticky top-24 space-y-6 hidden lg:block">
          <div className="card p-6 space-y-6 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
              System Navigator
            </p>
            <nav className="space-y-1">
              {sections.map((section, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx + 1}`}
                  className="block py-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-accent transition-colors truncate uppercase tracking-wider"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            {project.source_url && (
              <a
                href={project.source_url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-accent/20"
              >
                <span>GET SOURCE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <Link to="/contact" className="btn-outline w-full py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2">
              SYSTEM INQUIRY
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
