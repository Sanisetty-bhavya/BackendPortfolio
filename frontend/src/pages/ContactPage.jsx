import ContactForm from "../components/ContactForm.jsx";

function ContactPage({ apiBaseUrl }) {
  return (
    <div className="space-y-20 pb-10">
      <header className="space-y-6 max-w-3xl">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Contact</h1>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Open to backend and machine learning engineering roles focused on scalable systems, APIs, and AI-driven applications.
          </p>
        </div>
        
        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            I build <strong>production-ready backend systems</strong> that power <strong>machine learning</strong> and <strong>GenAI applications</strong>, 
            including <strong>inference APIs</strong>, <strong>authentication systems</strong>, and <strong>data-driven services</strong>.
          </p>
          <p>
            If you're working on <strong>scalable platforms</strong> or <strong>intelligent systems</strong>, I’d be happy to connect.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-accent">Focus Areas</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Backend systems for ML and GenAI",
              "FastAPI & REST API design",
              "Authentication & security systems",
              "Scalable system architecture"
            ].map((area) => (
              <li key={area} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <ContactForm apiBaseUrl={apiBaseUrl} showHeader={false} />
    </div>
  );
}

export default ContactPage;
