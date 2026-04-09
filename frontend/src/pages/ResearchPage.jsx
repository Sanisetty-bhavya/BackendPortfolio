function ResearchPage() {
  const contributions = [
    "Designed hybrid ANN + Transformer architecture for nonlinear feature extraction and temporal modeling",
    "Built preprocessing pipelines for noisy multivariate time-series signals",
    "Implemented fuzzy logic preprocessing for noise reduction",
    "Structured cross-validation workflows for reproducible benchmarking",
    "Benchmarked against Random Forest, Decision Tree, and Linear Regression",
    "Developed modular PyTorch training pipelines for scalable experimentation"
  ];

  const results = [
    "15–20% reduction in MAE and RMSE",
    "Improved peak-load prediction stability",
    "Strong generalization under noisy real-world conditions"
  ];

  const engineeringInsights = [
    "Hybrid models improve robustness over standalone approaches",
    "Transformer attention captures long-range temporal dependencies",
    "Fuzzy preprocessing stabilizes noisy real-world signals"
  ];

  const domainRelevance = [
    "Energy Load Forecasting",
    "Time-Series Modeling",
    "Predictive Machine Learning Systems"
  ];

  const technologies = [
    "Python", "PyTorch", "Transformers", "Time-Series Modeling", "Deep Learning", "Fuzzy Logic"
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20">
      {/* Page Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl border border-accent/20">
            🧠
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              Research Publication
            </h1>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Verified & Indexed ML System (Scientific Reports — Nature Portfolio, 2025)
            </p>
          </div>
        </div>
      </header>

      {/* Main Publication Card */}
      <section className="card p-8 bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 relative overflow-hidden group transition-all duration-300">
        <div className="absolute top-0 right-0 p-4">
          <span className="rounded-md bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500 border border-emerald-500/20">
            Nature Portfolio
          </span>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight max-w-3xl">
            Hybrid Transformer–ANN–Fuzzy Logic Model for Energy Load Forecasting
          </h2>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.nature.com/articles/s41598-025-04210-1"
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-5 py-2 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20"
            >
              View on Nature
            </a>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12137886/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline px-5 py-2 text-[10px] font-bold uppercase tracking-widest"
            >
              PMC
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/40467760/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline px-5 py-2 text-[10px] font-bold uppercase tracking-widest"
            >
              PubMed
            </a>
          </div>
        </div>
      </section>

      {/* Grid Layout for Content */}
      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <div className="space-y-12">
          {/* Overview */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="h-4 w-1 bg-accent rounded-full" />
              Overview
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium pl-3 border-l border-slate-200 dark:border-slate-800">
              Designed and implemented a hybrid deep-learning system combining fuzzy preprocessing, artificial neural networks (ANN), and Transformer attention mechanisms to improve multivariate time-series forecasting on real-world energy datasets.
            </p>
          </section>

          {/* Why Challenging */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="h-4 w-1 bg-slate-400 rounded-full" />
              Why This Problem is Challenging
            </h3>
            <ul className="grid gap-3 pl-3">
              {[
                "Noisy real-world energy consumption data",
                "Strong temporal dependencies across time steps",
                "Nonlinear interactions between multiple variables",
                "Need for stable peak-load prediction"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-semibold">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* My Contributions */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="h-4 w-1 bg-accent rounded-full" />
              My Contributions
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {contributions.map((item, idx) => (
                <div key={idx} className="card p-4 space-y-1 bg-slate-50/30 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-xs">✔</span>
                    <p className="text-[11px] font-bold leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* System Architecture & Evaluation */}
          <div className="grid gap-8 sm:grid-cols-2">
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="h-4 w-1 bg-accent rounded-full" />
                System Architecture
              </h3>
              <div className="code-window border-slate-800/50 bg-slate-950/90 shadow-xl rounded-lg overflow-hidden">
                <div className="flex gap-1 p-2 border-b border-slate-800/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/40" />
                </div>
                <pre className="p-4 whitespace-pre-wrap text-emerald-400/90 font-mono text-[10px] leading-relaxed font-bold">
{`Energy Data
   ↓
Feature Engineering
   ↓
Fuzzy Preprocessing
   ↓
ANN Layer (Feature Extraction)
   ↓
Transformer Attention Layer
   ↓
Prediction Output`}
                </pre>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="h-4 w-1 bg-emerald-500 rounded-full" />
                Evaluation Strategy
              </h3>
              <div className="card p-4 space-y-4 bg-slate-50/30 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Benchmarked Against</p>
                  <div className="flex flex-wrap gap-2">
                    {["Random Forest", "Decision Tree", "Linear Regression"].map(t => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/50 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Metrics</p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100">MAE</p>
                      <p className="text-[9px] text-slate-500">Mean Abs Error</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100">RMSE</p>
                      <p className="text-[9px] text-slate-500">Root Mean Sq Error</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Results */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="h-4 w-1 bg-emerald-500 rounded-full" />
              Results
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {results.map((r, idx) => (
                <div key={idx} className="card p-4 border-l-2 border-l-emerald-500 bg-emerald-500/5">
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-tight">{r}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Takeaway */}
          <section className="card p-6 bg-accent/5 border-accent/10">
            <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Key Takeaway</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-semibold italic">
              "This research demonstrates practical expertise in designing hybrid ML systems, benchmarking models, and building scalable training pipelines — directly applicable to production forecasting and predictive analytics systems."
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Engineering Insights */}
          <section className="card p-6 space-y-5 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
              Engineering Insights
            </p>
            <ul className="space-y-4">
              {engineeringInsights.map((insight, idx) => (
                <li key={idx} className="text-[11px] font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic relative pl-3">
                  <span className="absolute left-0 top-0 text-accent font-black">"</span>
                  {insight}
                </li>
              ))}
            </ul>
          </section>

          {/* Domain Relevance */}
          <section className="card p-6 space-y-5 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
              Domain Relevance
            </p>
            <div className="space-y-2">
              {domainRelevance.map((item) => (
                <p key={item} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent/50" />
                  {item}
                </p>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="card p-6 space-y-5 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 rounded bg-slate-200/50 dark:bg-slate-800/50 text-[9px] font-bold text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default ResearchPage;
