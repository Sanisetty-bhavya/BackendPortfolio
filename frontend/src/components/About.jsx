function About({ about }) {
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
    <section id="about" className="space-y-6">
      <div className="flex items-baseline justify-between gap-4">
        <div className="space-y-2">
          <h2 className="section-title text-2xl font-bold">About</h2>
          <p className="section-subtitle text-sm font-medium text-slate-900 dark:text-slate-100">
            Backend Engineer focused on building scalable systems for machine learning and AI applications
          </p>
        </div>
      </div>
      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="card p-8 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            <p className="whitespace-pre-line">{renderBoldText(about.summary)}</p>
          </div>
          
          <div className="space-y-6">
            <h3 className="section-title flex items-center gap-2 text-2xl font-bold tracking-tight">
              <span className="text-accent">🔥</span> Core Focus
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card p-5 flex items-start gap-4 group hover:border-accent/40 transition-all duration-300">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">Backend Architecture</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Scalable systems for ML & GenAI</p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4 group hover:border-emerald-500/40 transition-all duration-300">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">API Engineering</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">FastAPI with structured validation</p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4 group hover:border-amber-500/40 transition-all duration-300">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">Secure Systems</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">JWT, OTP, and secure middleware</p>
                </div>
              </div>

              <div className="card p-5 flex items-start gap-4 group hover:border-blue-500/40 transition-all duration-300">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">ML Inference</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Model integration and pipelines</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="section-title text-2xl font-bold tracking-tight">What I Build</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card p-5 flex items-start gap-4 border-l-4 border-l-slate-400 hover:border-l-accent transition-all">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Production ML APIs</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Ready-to-deploy inference services</p>
                </div>
              </div>
              <div className="card p-5 flex items-start gap-4 border-l-4 border-l-slate-400 hover:border-l-emerald-500 transition-all">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Secure Workflows</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Authentication & identity systems</p>
                </div>
              </div>
              <div className="card p-5 flex items-start gap-4 border-l-4 border-l-slate-400 hover:border-l-amber-500 transition-all">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Data Services</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Structured responses & validation</p>
                </div>
              </div>
              <div className="card p-5 flex items-start gap-4 border-l-4 border-l-slate-400 hover:border-l-blue-500 transition-all">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100">AI Architecture</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Scalable backends for AI apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
          <div className="card p-6 space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-bold">Education</p>
            <p className="font-bold text-slate-900 dark:text-slate-100">{about.education}</p>
          </div>
          <div className="card p-6 space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-bold">Location</p>
            <p className="font-bold text-slate-900 dark:text-slate-100">{about.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
