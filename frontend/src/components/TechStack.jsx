function TechStack({ skills }) {
  return (
    <section id="tech-stack" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Tools used to build APIs, services, and ML-powered features</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="card p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 px-3 py-1 dark:border-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
