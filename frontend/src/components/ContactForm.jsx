import { useState } from "react";

function ContactForm({ apiBaseUrl, showHeader = true }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      setStatus({ kind: "success", message: "Message sent successfully. Thank you for reaching out." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({
        kind: "error",
        message: err.message || "Unable to send message. Please try again later."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="space-y-4">
      {showHeader && (
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Share feedback, interview invites, or backend problems to discuss
            </p>
          </div>
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start">
        <form
          onSubmit={handleSubmit}
          className="card p-5 space-y-4 text-sm text-slate-700 dark:text-slate-300"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <button type="submit" className="btn-primary text-xs" disabled={submitting}>
            {submitting ? "Sending..." : "Send message"}
          </button>
          {status && (
            <p
              className={`text-xs ${
                status.kind === "success" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <div className="card p-4 space-y-1">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Direct Contact
            </p>
            <p>
              Email:{" "}
              <a href="mailto:bhavyasrisanisetty@gmail.com" className="text-accent hover:underline">
                bhavyasrisanisetty@gmail.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Sanisetty-bhavya"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                github.com/Sanisetty-bhavya
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/bhavyasri-sanisetty-31948424b"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                linkedin.com/in/bhavyasri-sanisetty-31948424b
              </a>
            </p>
          </div>
          <div className="p-1">
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 italic">
              For a detailed overview of my ML systems and research work, please refer to the downloadable resume on the Home page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
