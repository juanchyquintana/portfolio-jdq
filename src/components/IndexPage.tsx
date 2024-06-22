import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import CardProject from "./CardProject";
import { useMemo } from "react";
import Skills from "./Skills";

export default function IndexPage() {
  const hasProjects = useMemo(() => projects.length, [projects]);

  return (
    <div className="flex flex-col gap-8">
      <section className="my-3 space-y-4">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-bold tracking-tight uppercase">
            ¡Hola, <span className="text-blue-500">Juan Diego</span> aquí!
          </h1>
          <p>
            Soy un <span className="font-bold">entusiasta</span> del desarrollo
            web con un enfoque en la creación de experiencias digitales de alta
            calidad y gran impacto. Me{" "}
            <span className="font-bold">apasionan </span>
            los proyectos desafiantes que me permiten aplicar mis habilidades
            técnicas y creativas para desarrollar soluciones web excepcionales.
          </p>
          <p>
            Busco <span className="font-bold">colaborar </span> con un equipo
            talentoso en un entorno innovador donde pueda contribuir con mis
            capacidades para crear productos web sobresalientes. Mi{" "}
            <span className="font-bold">objetivo </span> es crecer
            profesionalmente y contribuir significativamente al éxito de los
            proyectos en los que me involucre.
          </p>
        </div>

        <div className="flex animate-in gap-3 text-sm">
          <Link
            className="underline-offset-4  flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-blue-500 hover:text-white"
            target="_blank"
            to="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
          >
            Linkedln
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-4 w-4 text-tertiary"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>

          <Link
            className="underline-offset-4  flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-blue-500 hover:text-white"
            target="_blank"
            to="https://www.instagram.com/juanchyquintana/"
          >
            Instagram
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-4 w-4 text-tertiary"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>

          <Link
            className="underline-offset-4 flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-blue-500 hover:text-white"
            target="_blank"
            to="https://github.com/juanchyquintana"
          >
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="h-4 w-4 text-tertiary"
            >
              <path
                fill-rule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </section>

      <section className="my-3 space-y-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-10">
            <h1 className="animate-in text-3xl font-bold tracking-tight uppercase">
              P R O Y E C T O S
            </h1>
            <Link
              className="uppercase font-bold text-gray-400 hover:text-blue-500 transition-colors"
              to={"/projects"}
            >
              Ver Más
            </Link>
          </div>

          {hasProjects ? (
            <>
              <div className="space-y-3 mt-5">
                {projects.slice(0, 3).map((project) => (
                  <CardProject key={project.id} project={project} />
                ))}
              </div>
            </>
          ) : (
            <p className="my-10 text-center text-blue-300 uppercase text-md">
              No hay proyectos aún...
            </p>
          )}
        </div>
      </section>

      <section className="my-3 space-y-4" id="skills">
        <Skills  />
      </section>
    </div>
  );
}
