import ApiPlayground from "../components/ApiPlayground.jsx";

function PlaygroundPage({ apiBaseUrl }) {
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="section-title text-2xl">API Playground</h1>
        <p className="section-subtitle">
          Execute real portfolio APIs and inspect raw JSON responses.
        </p>
      </header>
      <ApiPlayground apiBaseUrl={apiBaseUrl} showHeader={false} />
    </div>
  );
}

export default PlaygroundPage;
