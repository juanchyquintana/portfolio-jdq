import { useInView } from "react-intersection-observer";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import profilePhoto from "../img/Perfil_Foto_Juan.jpeg";

export default function Aboutme() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section>
      <div className="my-3">
        <h2 className="text-3xl font-bold text-black dark:text-white text-center uppercase animate-bounce">
          ¡Hola, <span className="text-blue-500">Internauta</span>!
        </h2>
      </div>

      <div className="flex bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mx-auto mt-5">
        <div className="w-1/3 hidden lg:flex lg:flex-col justify-center items-center">
          <div
            ref={ref}
            className={`w-3/4 border-2 border-blue-500 rounded-full shadow-lg overflow-hidden transform ${
              inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
            } transition-all duration-500`}
          >
            <img
              src={profilePhoto}
              alt="Juan Diego Quintana"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8 bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <a
              href="/cv_juan_diego_quintana.pdf"
              download
              aria-label="Descargar mi currículum"
            >
              <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Descargar CV
            </a>
          </div>
        </div>

        <div className="lg:w-2/3 pl-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 dark:text-gray-300 mb-4"
          >
            Soy Juan Diego Quintana {"(23)"}, un programador en formación
            residente en Argentina y especializado como Desarrollador
            Full-Stack. Actualmente, estoy cursando la carrera de Software
            Engineer en
            <span className="font-bold"> Jala University</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-gray-700 dark:text-gray-300 mb-4"
          >
            Me destaco por mi iniciativa, proactividad y habilidades
            comunicativas. Soy una persona dinámica con capacidad para generar
            un ambiente laboral positivo. Poseo flexibilidad para adaptarme a
            diferentes contextos y un alto nivel de compromiso para desempeñar
            las responsabilidades asignadas con excelencia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 mb-4"
          >
            Como Desarrollador Full-Stack, cuento con una sólida base en
            tecnologías modernas y un enfoque en la creación de aplicaciones
            eficientes y escalables. Mi objetivo es aportar soluciones
            innovadoras que mejoren la experiencia del usuario y optimicen los
            procesos empresariales.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3"
          >
            Experiencia y Proyectos
          </motion.h3>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="list-disc list-inside text-gray-700 mb-4 space-y-3"
          >
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-700 dark:text-gray-300"
            >
              <strong>Desarrollador Full Stack - Freelancer</strong>:{" "}
              <span className="italic">
                Equipo Freelance de Desarrollo Web Devs 73 - 2024 - Actualidad
              </span>
              <p className="mt-2">
                Diseñé y desarrollé sitios web personalizados para clientes
                utilizando tecnologías como HTML, CSS, JavaScript y React.
                Implementé diseños responsivos y optimización de SEO, mejorando
                la accesibilidad y velocidad de los sitios. Coordiné con un
                equipo multidisciplinario para cumplir con plazos y
                requerimientos específicos de los clientes. Gestioné proyectos
                en Git, asegurando un flujo de trabajo eficiente y organizado.
              </p>
            </motion.li>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link
                to={"/projects"}
                className="text-blue-300 hover:text-blue-500 uppercase font-semibold"
              >
                Ver más proyectos
              </Link>
            </motion.p>
          </motion.ul>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3"
          >
            Educación
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4"
          >
            <li>
              Universidad San Pablo T (2019-2023) - Licenciatura en Periodismo
            </li>
            <li>Rolling Code School (2023-2024) - Full Stack Web Developer</li>
            <li>Jala University (2024-Actualidad) - Software Engineer</li>
          </motion.ul>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3"
          >
            Habilidades
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4"
          >
            <li>Trabajo en Equipo</li>
            <li>Gestión de Equipo</li>
            <li>Metodología Scrum</li>
            <li>HTML, CSS, JavaScript, TypeScript, React.js</li>
            <li>Java, Spring Boot</li>
            <li>Node.js, MySQL, NoSQL, MongoDB</li>
          </motion.ul>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3"
          >
            Idiomas
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4"
          >
            <li>Español (Nativo)</li>
            <li>Inglés (B1+)</li>
            <li>Portugués (B1)</li>
          </motion.ul>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3"
          >
            Contacto
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 2.8 }}
            className="flex items-center text-gray-700 dark:text-gray-300 mb-4"
          >
            <HiMail className="mr-2" />
            <span>quintanajuanchy25@gmail.com</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            <FaLinkedin className="mr-2" />
            <a
              href="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              Juan Diego Quintana
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="mt-8 text-center lg:hidden bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[8px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            <a
              href="/cv_juan_diego_quintana.pdf"
              download
              aria-label="Descargar mi currículum"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
