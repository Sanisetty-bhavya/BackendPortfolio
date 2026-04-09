import Hero from "../components/Hero.jsx";
import TechStack from "../components/TechStack.jsx";
import Projects from "../components/Projects.jsx";
import Hiring from "../components/Hiring.jsx";

function HomePage({ about, skills, projects, hiring, apiBaseUrl }) {
  const homeProjects = projects.filter((p) => 
    ["smart-agriculture-ml-platform", "mfa-backend-system", "prompt-to-ui-generator"].includes(p.slug)
  );

  return (
    <div className="space-y-8 pb-10">
      <Hero about={about} apiBaseUrl={apiBaseUrl} />
      
      <section className="space-y-6">
        <h2 className="section-title text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Backend Engineering Highlights</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: API */}
          <div className="card p-6 space-y-4 group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
              Designed <strong>REST APIs</strong> for ML inference and real-time predictions
            </p>
          </div>

          {/* Card 2: Security */}
          <div className="card p-6 space-y-4 group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
              Built <strong>authentication systems</strong> with JWT, OTP, and middleware
            </p>
          </div>

          {/* Card 3: Validation */}
          <div className="card p-6 space-y-4 group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
              Implemented <strong>structured validation</strong> and response schemas
            </p>
          </div>

          {/* Card 4: Architecture */}
          <div className="card p-6 space-y-4 group flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
              Developed <strong>scalable backend architectures</strong> for AI applications
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="section-title text-2xl font-bold tracking-tight">Tech Stack</h2>
          <p className="section-subtitle text-base">Tools used to build APIs, services, and ML-powered features</p>
        </div>
        <TechStack skills={skills} />
      </section>

      <section className="space-y-6">
        <h2 className="section-title text-2xl font-bold tracking-tight">Featured Systems</h2>
        <Projects projects={homeProjects} />
      </section>

      {hiring && (
        <section className="space-y-6">
          <Hiring hiring={hiring} />
        </section>
      )}
    </div>
  );
}

export default HomePage;

