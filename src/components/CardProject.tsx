import { useMemo } from "react";
import { ProjectsType } from "../types";
import { useLocation } from "react-router-dom";

type CardProjectProps = {
  project: ProjectsType;
};

export default function CardProject({ project }: CardProjectProps) {
  const { pathname } = useLocation();
  const isProjects = useMemo(() => pathname === "/projects", [pathname]);

  return (
    <div className="border shadow-lg rounded-lg">
      <div className="p-5 space-y-5">
        <h2 className="text-2xl text-center font-black mb-5">{project.name}</h2>
        <p className="text-gray-500">{project.description}</p>

        {isProjects && (
          <div>
            <p className="uppercase font-bold mb-3">Tecnologías utilizadas:</p>
            <ul className="list-disc list-inside">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        <p>
          <span className="uppercase font-bold">Rol:</span> {project.role}
        </p>

        <div>
          <div className="flex justify-around">
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 uppercase text-sm hover:underline"
            >
              Ver proyecto
            </a>

            <a
              href={project.repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 uppercase text-sm hover:underline"
            >
              Ver repositorio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
