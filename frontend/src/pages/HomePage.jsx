import Hero from "../components/Hero.jsx";
import TechStack from "../components/TechStack.jsx";
import Projects from "../components/Projects.jsx";
import Hiring from "../components/Hiring.jsx";

function HomePage({ about, skills, projects, hiring, apiBaseUrl }) {
  const featuredProject = projects.find((p) => p.slug === "smart-farming-ml-backend");

  return (
    <div className="space-y-16">
      <Hero about={about} apiBaseUrl={apiBaseUrl} />
      <TechStack skills={skills} />
      <Projects projects={projects} featuredProject={featuredProject} />
      {hiring && <Hiring hiring={hiring} />}
    </div>
  );
}

export default HomePage;

