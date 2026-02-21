import { Link } from "react-router-dom";

const RESUME_URL = "/Resume.pdf";

function Hero({ about, apiBaseUrl }) {
  return (
    <section className="py-10 sm:py-16">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-center">
        <div className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 dark:text-accent/80">
            Backend Engineer
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {about.name}
          </h1>
          <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">
            {about.title}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            I build backend services, authentication systems, and machine learning powered applications using Python.
            Comfortable debugging APIs, handling databases, and integrating external services.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <a
              href="https://github.com/Sanisetty-bhavya"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
            <a href={RESUME_URL} className="btn-outline" download>
              Download Resume
            </a>
            <Link to="/contact" className="btn-outline">
              Contact
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-accent/20 blur-3xl opacity-70" />
          <div className="relative card p-4 sm:p-5">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-mono">curl portfolio-api</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow shadow-emerald-500/60" />
            </div>
            <div className="code-window bg-slate-950/90 border-slate-800">
              <div className="flex gap-2 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <pre className="whitespace-pre-wrap">
{`GET ${apiBaseUrl}/api/projects
Accept: application/json

{
  "name": "${about.name}",
  "role": "Backend Software Engineer",
  "focus": ["REST APIs", "Authentication", "Machine Learning"],
  "stack": ["Python", "FastAPI", "React", "SQLite"]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
