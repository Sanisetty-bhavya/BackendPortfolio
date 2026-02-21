import { useState } from "react";

function ApiPlayground({ apiBaseUrl, showHeader = true }) {
  const [activeEndpoint, setActiveEndpoint] = useState(null);
  const [responseJson, setResponseJson] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function callEndpoint(endpoint) {
    setActiveEndpoint(endpoint);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${apiBaseUrl}${endpoint}`);
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const json = await res.json();
      setResponseJson(JSON.stringify(json, null, 2));
    } catch (e) {
      setError(e.message || "Unexpected error");
      setResponseJson("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="api-playground" className="space-y-4">
      {showHeader && (
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="section-title">API Playground</h2>
            <p className="section-subtitle">
              Hit real portfolio endpoints and inspect raw JSON responses
            </p>
          </div>
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
        <div className="card p-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Endpoints
          </p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => callEndpoint("/api/about")}
              className="btn-outline justify-start text-xs"
            >
              GET /api/about
            </button>
            <button
              type="button"
              onClick={() => callEndpoint("/api/skills")}
              className="btn-outline justify-start text-xs"
            >
              GET /api/skills
            </button>
            <button
              type="button"
              onClick={() => callEndpoint("/api/projects")}
              className="btn-outline justify-start text-xs"
            >
              GET /api/projects
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            Responses are served by the FastAPI backend and streamed directly into the code window.
          </p>
        </div>
        <div className="card p-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">
              {activeEndpoint ? `curl ${apiBaseUrl}${activeEndpoint}` : "Select an endpoint to execute"}
            </span>
            {loading && <span className="text-[10px] text-accent">Loading...</span>}
          </div>
          <div className="code-window min-h-[180px]">
            {error && (
              <p className="text-[11px] text-red-400 mb-2">
                {error}
              </p>
            )}
            {!error && !responseJson && (
              <p className="text-[11px] text-slate-500">
                Awaiting request. Choose an endpoint to see a JSON response.
              </p>
            )}
            {responseJson && (
              <pre className="whitespace-pre-wrap">
                {responseJson}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApiPlayground;
