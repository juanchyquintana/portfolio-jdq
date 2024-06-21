import { Fragment, useMemo } from "react";
import { ProjectsType } from "../types";
import { useLocation } from "react-router-dom";

type CardProjectProps = {
  project: ProjectsType;
};

export default function CardProject({ project }: CardProjectProps) {
  const { pathname } = useLocation();
  const isProjects = useMemo(() => pathname === "/projects", [pathname]);

  return (
    <div className="border shadow-lg rounded-lg flex flex-col h-full">
      <div className="p-4 flex-grow">
        <h2 className="text-2xl text-center font-black mb-5 text-blue-500">{project.name}</h2>
        <p className="text-gray-500">{project.description}</p>

        {isProjects && (
          <div className="flex flex-col my-5">
            <p className="uppercase font-bold">Tecnologías utilizadas:</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <Fragment key={index}>
                  <span>{tech}</span>
                  {index !== project.technologies.length - 1 && (
                    <span className="mx-1">-</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        )}

        <p>
          <span className="uppercase font-bold">Rol:</span> {project.role}
        </p>
      </div>

      <div className="mt-auto p-4 flex justify-around bg-blue-100">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 uppercase text-sm hover:text-black"
        >
          Deploy
        </a>

        <a
          href={project.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 uppercase text-sm hover:text-black"
        >
          Repositorio
        </a>
      </div>
    </div>
  );
}
