import { Link } from "react-router-dom";

const RESUME_URL = "/Resume.pdf";

function Hero({ about, apiBaseUrl }) {
  // Helper to render bold text from ** markdown
  const renderBoldText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className="py-6 sm:py-8">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] items-center">
        <div className="space-y-6">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 dark:text-accent/80">
            ML Systems Engineer | Backend & Scalable AI Infrastructure
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {about.name}
          </h1>
          <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl space-y-4">
            <p>{renderBoldText(about.summary)}</p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-accent">✔</span>
                Built and deployed ML-backed APIs serving real-time predictions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✔</span>
                Designed secure authentication systems using JWT and OTP workflows
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✔</span>
                Engineered scalable backend architectures for AI-driven applications
              </li>
            </ul>
          </div>
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
{`GET ${apiBaseUrl}/api/profile
Accept: application/json

{
  "name": "${about.name}",
  "role": "ML Systems Engineer",
  "focus": ["Backend Systems", "ML Inference", "API Architecture"],
  "stack": ["Python", "FastAPI", "PyTorch", "JWT", "React"]
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
