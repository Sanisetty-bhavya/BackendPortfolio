function About({ about }) {
  return (
    <section id="about" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Backend-focused, debugging-friendly, data-driven engineer</p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="card p-5 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <p>{about.summary}</p>
          <p>
            I enjoy designing clear API contracts, modeling data, and building small, composable services that are easy
            to test and observe. My recent work focuses on REST APIs, authentication flows, and integrating machine
            learning models into real applications.
          </p>
        </div>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="card p-4 space-y-1">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Education</p>
            <p className="font-medium text-slate-900 dark:text-slate-100">{about.education}</p>
          </div>
          <div className="card p-4 space-y-1">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Location</p>
            <p className="font-medium text-slate-900 dark:text-slate-100">{about.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
