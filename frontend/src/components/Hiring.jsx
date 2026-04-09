function Hiring({ hiring }) {
  return (
    <section id="hiring" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="section-title">Hiring Information</h2>
          <p className="section-subtitle">Roles, availability, and links for recruiters</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Target Roles
          </p>
          <ul className="list-disc list-inside space-y-1">
            {hiring.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div className="card p-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Availability
            </p>
            <ul className="list-disc list-inside space-y-1">
              {hiring.availability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Contact
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${hiring.email}`} className="text-accent hover:underline">
                {hiring.email}
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href={hiring.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                {hiring.github}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href={hiring.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                {hiring.linkedin}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hiring;
