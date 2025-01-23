import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Error404 from "./Error404";
import { Fragment } from "react/jsx-runtime";
import { useMemo } from "react";

export default function ModalProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find((project) => project.id === Number(id));

  const { pathname } = useLocation();
  const isProjects = useMemo(() => pathname === `/projects/${id}`, [pathname]);

  if (!id) {
    return <Error404 />;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden"
      onClick={() => navigate(-1)}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 m-6 max-w-md md:m-0 lg:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-3 border-b-2 border-blue-200 pb-2">
          <h2 className="text-xl font-bold ">{project?.name}</h2>
          
          <button
            className=" text-red-600 font-bold px-4 rounded"
            onClick={() => navigate(-1)}
          >
            X
          </button>
        </div>

        <div className="flex justify-center w-auto px-4">
          <p>{project?.description}</p>
        </div>

        {isProjects && (
          <div className="flex flex-col my-5">
            <p className="uppercase font-bold">Tecnologías utilizadas:</p>
            <div className="flex flex-wrap">
              {project?.technologies.map((tech, index) => (
                <Fragment key={index}>
                  <span className="italic">{tech}</span>
                  {index !== project.technologies.length - 1 && (
                    <span className="mr-1">,</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        )}

        <p className="my-3">
          <span className="uppercase font-bold">Rol:</span> {project?.role}
        </p>

        <div className="mt-auto p-2 rounded-lg flex justify-around bg-blue-100">
          <Link
            to={project?.projectLink || "#"}
            target={project?.projectLink ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`text-sm uppercase ${
              project?.projectLink
                ? "text-blue-500 hover:text-black"
                : "text-gray-500 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!project?.projectLink) e.preventDefault(); // Evita que haga algo si no hay link.
            }}
          >
            {project?.projectLink === "" ? "No Deploy" : "Deploy"}
          </Link>

          <Link
            to={project?.repositoryLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 uppercase text-sm hover:text-black"
          >
            Repositorio
          </Link>
        </div>
      </div>
    </div>
  );
}
