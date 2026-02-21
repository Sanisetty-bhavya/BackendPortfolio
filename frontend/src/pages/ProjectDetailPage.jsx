import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";

function ProjectDetailPage({ projects, apiBaseUrl }) {
  const { id } = useParams();

  const project = projects.find((p) => p.slug === id);

  const content = useMemo(() => {
    if (!project) return null;
    if (project.slug === "multi-factor-auth-system") {
      return {
        title: "Multi-Factor Authentication System",
        badge: "Security Project",
        architecture:
          "The backend exposes authentication endpoints for registration, login, OTP verification, and token refresh. " +
          "User credentials are stored with bcrypt-hashed passwords in SQLite. JWT-based middleware guards protected routes " +
          "and enforces token expiry, keeping authentication independent from business logic.",
        flowTitle: "Authentication Flow",
        flowDiagram: [
          "Client -> POST /auth/login (email, password)",
          "Backend -> Validate credentials with bcrypt",
          "Backend -> Generate and send OTP (email / mobile)",
          "Client -> POST /auth/verify-otp (otp, session)",
          "Backend -> Issue JWT access + refresh tokens",
          "Client -> Access protected APIs with Authorization: Bearer <token>",
          "Middleware -> Validate token, enforce expiry, attach user context"
        ],
        jsonExampleTitle: "Login + OTP Verification Example",
        jsonRequest: `POST ${apiBaseUrl}/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "********"
}`,
        jsonResponse: `HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "otp_sent",
  "channel": "email",
  "session_id": "session_123"
}`,
        result:
          "Prevents unauthorized access even if a password is compromised and clearly separates authentication from authorization using stateless, token-based security.",
        tech: ["Python/FastAPI", "JWT", "bcrypt", "SQLite", "REST APIs", "Postman"],
        sourceUrl:
          "https://github.com/Sanisetty-bhavya/Multi-Factor-Authentication-System/tree/main"
      };
    }
    if (project.slug === "smart-farming-ml-backend") {
      return {
        title: "Smart Farming ML Backend Service",
        badge: "ML Backend",
        architecture:
          "A FastAPI backend exposes REST endpoints for crop suitability prediction, wrapping a serialized ML model " +
          "and rule-based recommendation engine. Each prediction is logged to SQLite for monitoring, debugging, and model comparison.",
        flowTitle: "API Flow",
        flowDiagram: [
          "Client -> POST /api/smart-farming/predict (soil + environment features)",
          "Backend -> Validate and normalize input via Pydantic schema",
          "Backend -> Compute suitability score using ML-style scoring function",
          "Backend -> Build fertilizer, pest, and cost recommendations",
          "Backend -> Persist prediction log for later analysis",
          "Backend -> Return JSON recommendation to client"
        ],
        jsonExampleTitle: "Prediction Request Example",
        jsonRequest: `POST ${apiBaseUrl}/api/smart-farming/predict
Content-Type: application/json

{
  "crop": "rice",
  "soil_type": "loamy",
  "region": "Andhra Pradesh",
  "nitrogen": 90,
  "phosphorus": 40,
  "potassium": 40,
  "ph": 6.5,
  "rainfall": 180
}`,
        jsonResponse: `HTTP/1.1 200 OK
Content-Type: application/json

{
  "recommendation": {
    "crop": "rice",
    "suitability_score": 0.87,
    "fertilizer_plan": "...",
    "pest_management": "...",
    "cost_estimate": "...",
    "notes": "Conditions are highly favorable for this crop."
  }
}`,
        result:
          "Enables data-driven crop planning by providing low-latency, explainable recommendations derived from soil and weather features.",
        tech: ["Python", "FastAPI", "Pandas", "NumPy", "Scikit-learn-style logic", "SQLite"],
        sourceUrl: project.source_url || "https://github.com/Sanisetty-bhavya"
      };
    }
    if (project.slug === "prompt-to-ui-generator") {
      return {
        title: "Prompt-to-UI Generator",
        badge: "Full-Stack",
        architecture:
          "A FastAPI backend parses natural language prompts into structured UI JSON. The React frontend consumes " +
          "this JSON and renders layout components dynamically. This keeps the backend responsible for interpretation " +
          "and the frontend for presentation.",
        flowTitle: "Prompt Processing Flow",
        flowDiagram: [
          "Client -> POST /api/ui/generate (prompt)",
          "Backend -> Validate prompt and tokenize text",
          "Backend -> Map intent to UI components (forms, lists, buttons)",
          "Backend -> Return JSON layout description",
          "Frontend -> Render components dynamically from JSON schema"
        ],
        jsonExampleTitle: "Prompt Request/Response Example",
        jsonRequest: `POST ${apiBaseUrl}/api/ui/generate
Content-Type: application/json

{
  "prompt": "Create a login form with email and password inputs and a submit button."
}`,
        jsonResponse: `{
  "layout": [
    { "type": "input", "name": "email", "label": "Email" },
    { "type": "input", "name": "password", "label": "Password", "props": { "type": "password" } },
    { "type": "button", "variant": "primary", "label": "Login" }
  ]
}`,
        result:
          "Accelerates UI prototyping by turning product ideas into working components without manually wiring every layout.",
        tech: ["Python", "FastAPI", "React", "JavaScript", "Tailwind CSS"],
        sourceUrl: project.source_url || "https://github.com/Sanisetty-bhavya"
      };
    }
    if (project.slug === "language-translation-client") {
      return {
        title: "Language Translation Client",
        badge: "API Integration",
        architecture:
          "A backend wrapper around external translation APIs that validates input, normalizes responses, " +
          "and caches frequent translations. This isolates third-party API quirks from the rest of the application.",
        flowTitle: "Translation Flow",
        flowDiagram: [
          "Client -> POST /api/translate (text, source_lang, target_lang)",
          "Backend -> Validate payload and sanitize text",
          "Backend -> Check cache for previous translation",
          "Backend -> Call external translation API if cache miss",
          "Backend -> Normalize provider-specific JSON into a stable schema",
          "Backend -> Store result in cache and return JSON to client"
        ],
        jsonExampleTitle: "Translation Request/Response Example",
        jsonRequest: `POST ${apiBaseUrl}/api/translate
Content-Type: application/json

{
  "text": "Hello, how are you?",
  "source_lang": "en",
  "target_lang": "te"
}`,
        jsonResponse: `{
  "text": "Hello, how are you?",
  "translated_text": "హలో, మీరు ఎలా ఉన్నారు?",
  "provider": "external-api",
  "cached": false
}`,
        result:
          "Improves reliability and latency of translation by wrapping external APIs with validation, normalization, and caching.",
        tech: ["Python", "FastAPI", "Requests", "Caching", "JSON"],
        sourceUrl: project.source_url || "https://github.com/Sanisetty-bhavya"
      };
    }
    return null;
  }, [project, apiBaseUrl]);

  if (!project || !content) {
    return (
      <div className="space-y-4">
        <p className="section-title">Project not found</p>
        <p className="section-subtitle">
          The requested project does not exist.{" "}
          <Link to="/projects" className="text-accent hover:underline">
            Back to projects
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Project Detail
            </p>
            <h1 className="section-title text-2xl">{content.title}</h1>
            <p className="section-subtitle">{project.problem}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
              {content.badge}
            </span>
            <a
              href={content.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-[11px]"
            >
              View Source Code
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-700 dark:text-slate-200">
          {project.tech_stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <section className="card p-5 space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Architecture
            </p>
            <p className="mt-1 leading-relaxed">{content.architecture}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Approach
            </p>
            <p className="mt-1 leading-relaxed">{project.approach}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Result
            </p>
            <p className="mt-1 leading-relaxed">{content.result}</p>
          </div>
        </section>
        <section className="space-y-4">
          <div className="card p-4 space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {content.flowTitle}
            </p>
            <div className="code-window">
              <pre className="whitespace-pre-wrap">
                {content.flowDiagram.join("\n")}
              </pre>
            </div>
          </div>
          <div className="card p-4 space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {content.jsonExampleTitle}
            </p>
            <div className="code-window">
              <pre className="whitespace-pre-wrap mb-3">{content.jsonRequest}</pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectDetailPage;

