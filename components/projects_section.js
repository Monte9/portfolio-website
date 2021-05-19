import ProjectCard from "./project_card";

export default function ProjectsSection({ projects }) {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  )
}
