import { InView, useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import FilterButton from "../FilterButton";

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

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

      <div className="flex justify-center my-3">
        <FilterButton
          projects={projects}
          setFilteredProjects={setFilteredProjects}
        />
      </div>

      <div>
        {filteredProjects.length === 0 ? (

            <p className="text-center font-bold text-lg my-52">
              No hay proyectos para mostrar
            </p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {filteredProjects.map((project, index) => (
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Projects project={project} />
                  </motion.div>
                )}
              </InView>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
