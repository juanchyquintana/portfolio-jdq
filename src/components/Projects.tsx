import { ProjectsType } from "../types";
import profilePhoto from "../img/Perfil_Foto_Juan.jpeg";
import { Link } from "react-router-dom";

type ProjectsProps = {
  project: ProjectsType;
};

function Projects({ project }: ProjectsProps) {
  return (
    <>
      <section className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-40 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={profilePhoto}
          alt={project.name}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
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

          <div className="w-full text-center font-bold bg-blue-700 text-white p-2 rounded-lg uppercase hover:bg-blue-500">
            <Link
              to={`/projects/${project.id}`}
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
