import ContactForm from "../components/ContactForm.jsx";

function ContactPage({ apiBaseUrl }) {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="section-title text-2xl">Contact</h1>
        <p className="section-subtitle">
          Reach out for interview opportunities, collaborations, or backend discussions.
        </p>
      </header>
      <ContactForm apiBaseUrl={apiBaseUrl} showHeader={false} />
    </div>
  );
}

export default ContactPage;
