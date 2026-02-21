function ResearchPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div>
          <h1 className="section-title text-2xl">Research</h1>
          <p className="section-subtitle">
            Verified, indexed research work in modern energy load forecasting.
          </p>
        </div>
        <div className="card p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Featured Publication
              </p>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Hybrid Transformer–ANN–Fuzzy Logic Model for Energy Load Forecasting
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Published in Scientific Reports (Nature Portfolio), 2025
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
              Verified Indexed Publication
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            This research proposes a hybrid deep-learning framework combining fuzzy logic preprocessing,
            artificial neural networks, and transformer attention to improve short-term electrical load
            forecasting. The model processes real-world time-series electricity consumption data, performs
            feature engineering, and evaluates performance using MAE and RMSE metrics. The hybrid architecture
            reduces prediction error and produces more stable load forecasts compared to traditional
            statistical and standalone machine learning models.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-slate-100">Results</p>
              <ul className="list-disc list-inside space-y-1">
                <li>≈15–20% lower prediction error (MAE and RMSE)</li>
                <li>Improved peak-load prediction accuracy</li>
                <li>More stable and robust load forecasts under noisy conditions</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-slate-100">Technologies</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Python", "PyTorch", "Deep Learning", "Time-Series Forecasting", "Transformers", "Fuzzy Logic", "ANN"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-300 px-3 py-1 text-slate-800 dark:border-slate-600 dark:text-slate-100"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="https://www.nature.com/articles/s41598-025-04210-1"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View on Nature
            </a>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12137886/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View on PMC
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/40467760/"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View on PubMed
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResearchPage;

