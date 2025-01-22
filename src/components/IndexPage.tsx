import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import CardProject from "./CardProject";
import { useMemo } from "react";
import Skills from "./Skills";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaPlus } from "react-icons/fa6";

export default function IndexPage() {
  const hasProjects = useMemo(() => projects.length, [projects]);

  // Define animation controls for each section
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  return (
    <div className="flex flex-col gap-8">
      <InView
        as="section"
        className="flex items-center my-32"
        onChange={(inView) => {
          if (inView) {
            controls1.start("visible");
          } else {
            controls1.start("hidden");
          }
        }}
      >
        <motion.div
          initial="hidden"
          animate={controls1}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tight uppercase">
            ¡Hola, <span className="text-blue-500">Juan Diego</span> aquí!
          </h1>
          <div className="space-y-5">
            <p>
              Soy un <span className="font-bold">entusiasta</span> del
              desarrollo web con un enfoque en la creación de experiencias
              digitales de alta calidad y gran impacto. Me{" "}
              <span className="font-bold">apasionan </span>
              los proyectos desafiantes que me permiten aplicar mis habilidades
              técnicas y creativas para desarrollar soluciones web
              excepcionales.
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
          <div className="flex gap-2">
            <Link
              className="underline-offset-4 flex w-fit items-center rounded-full px-3 py-1 no-underline border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white"
              target="_blank"
              to="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
            >
              LinkedIn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-4 w-4 text-tertiary"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>

            <Link
              className="underline-offset-4 flex w-fit items-center rounded-full px-3 py-1 no-underline border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white"
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
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>

            <Link
              className="underline-offset-4 flex w-fit items-center rounded-full px-3 py-1 no-underline border-b-2 border-blue-500 hover:bg-blue-500 hover:text-white"
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
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </motion.div>
      </InView>

      <InView
        as="section"
        className=" flex items-center my-10"
        onChange={(inView) => {
          if (!inView) {
            controls2.start("hidden");
          } else {
            controls2.start("visible");
          }
        }}
      >
        <motion.div
          initial="hidden"
          animate={controls2}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight uppercase">
              P R O Y E C T O S
            </h1>
            <Link
              className="uppercase font-bold text-gray-400 hover:text-blue-500 transition-colors"
              to={"/projects"}
            >
              <FaPlus />
            </Link>
          </div>

          {hasProjects ? (
            <div className="space-y-3 mt-5">
              {projects.slice(0, 3).map((project) => (
                <CardProject key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="my-10 text-center text-blue-300 uppercase text-md">
              No hay proyectos aún...
            </p>
          )}
        </motion.div>
      </InView>

      <InView
        as="section"
        className="flex items-center my-10"
        onChange={(inView) => {
          if (!inView) {
            controls3.start("hidden");
          } else {
            controls3.start("visible");
          }
        }}
      >
        <motion.div
          initial="hidden"
          animate={controls3}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5 }}
          className="space-y-4 w-full"
        >
          <Skills />
        </motion.div>
      </InView>
    </div>
  );
}
