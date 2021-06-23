import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section>
      <h2>Projects</h2>
      <p>Here are a few of the recent crypto projects I've worked on. These range from fullstack Dapps for minting NFTs to using Web3.js on Ethereum & Solana Blockchains.</p>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  )
}
