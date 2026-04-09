function FeaturedProjectDetail({ detail, apiBaseUrl }) {
  return (
    <section id="featured-project" className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="section-title">Featured: Smart Farming ML Backend Service</h2>
          <p className="section-subtitle">Architecture, API design, and ML pipeline integration</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5 space-y-3 text-sm text-slate-300">
          <p className="text-xs uppercase tracking-wide text-slate-400">Architecture</p>
          <p>{detail.architecture}</p>
          <p className="text-xs uppercase tracking-wide text-slate-400 mt-4">API Flow</p>
          <p>{detail.api_flow}</p>
          <p className="text-xs uppercase tracking-wide text-slate-400 mt-4">ML Pipeline</p>
          <p>{detail.ml_pipeline}</p>
        </div>
        <div className="space-y-4">
          <div className="card p-4 space-y-2">
            <p className="text-xs uppercase tracking-wide text-slate-400">POST /api/smart-farming/predict</p>
            <div className="code-window">
              <pre className="whitespace-pre-wrap">
{`POST ${apiBaseUrl}/api/smart-farming/predict
Content-Type: application/json

${detail.json_example}`}
              </pre>
            </div>
          </div>
          <div className="card p-4 space-y-2 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-wide text-slate-400">Model Inference</p>
            <p>{detail.inference_details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectDetail;

