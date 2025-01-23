import { ProjectsType } from "../types";
import { Link } from "react-router-dom";

type ProjectsProps = {
  project: ProjectsType;
};

function Projects({ project }: ProjectsProps) {
  return (
    <>
      <section className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="h-full">
          <img
            className="object-cover w-full h-48 md:h-48 md:w-48 rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={project.image}
            alt={project.name}
          />
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal border-l-2 border-blue-700">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
          </div>

          <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description.substring(0, 100)}...
            </p>
          </div>

          <Link
            className="w-full text-center font-bold bg-blue-700 text-white p-2 rounded-lg uppercase hover:bg-blue-500"
            to={`/projects/${project.id}`}
          >
            Ver más
          </Link>
        </div>
      </section>
    </>
  );
}

export default Projects;
