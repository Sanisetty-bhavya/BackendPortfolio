import About from "../components/About.jsx";
import TechStack from "../components/TechStack.jsx";

function AboutPage({ about, skills }) {
  return (
    <div className="space-y-10">
      <About about={about} />
      <TechStack skills={skills} />
    </div>
  );
}

export default AboutPage;

