import { InView, useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { projects } from "../data/projects";
import { useEffect } from "react";
import Projects from "./Projects";

export default function ProjectsPage() {
  const controls = useAnimation();
  const { inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <p className="text-center text-lg font-bold mb-5">
        Estos son algunos de mis proyectos en los que he trabajado y practicado
        desde mis comienzos como autodidacta hasta la actualidad.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {projects.map((project, index) => (
          <InView key={project.id} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Añade un pequeño delay a cada proyecto
                className="w-full"
              >
                <Projects project={project} />
              </motion.div>
            )}
          </InView>
        ))}
      </div>
    </>
  );
}
