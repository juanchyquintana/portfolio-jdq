import { projects } from "../data/projects";
import CardProject from "./CardProject";

export default function ProjectsPage() {
  return (
    <>
      <p className="text-center text-lg font-bold mb-5">
        Estos son algunos de mis proyectos en los que he trabajado y practicado
        desde mis comienzos como autodidacta hasta la actualidad.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
