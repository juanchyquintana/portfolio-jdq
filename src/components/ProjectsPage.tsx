import { projects } from "../data/projects";
import CardProject from "./CardProject";

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {projects.map((project) => (
        <CardProject key={project.id} project={project} />
      ))}
    </div>
  );
}
