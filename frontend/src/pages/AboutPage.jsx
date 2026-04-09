import About from "../components/About.jsx";
import TechStack from "../components/TechStack.jsx";

function AboutPage({ about, skills }) {
  return (
    <div className="space-y-10 pb-10">
      <About about={about} />
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="section-title text-3xl font-bold tracking-tight">Tech Stack</h2>
          <p className="section-subtitle text-lg">Tools used to build APIs, services, and ML-powered features</p>
        </div>
        <TechStack skills={skills} />
      </section>
    </div>
  );
}

export default AboutPage;

