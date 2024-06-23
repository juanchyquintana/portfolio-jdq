import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profilePhoto from "../img/Perfil_Foto_Juan.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Aboutme() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="flex bg-white p-8 rounded-lg shadow-lg mx-auto mt-10">
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
            className="w-full"
          />
        </div>

        <div className="mt-8 bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <a href="/cv_juan_diego_quintana.pdf" download>
            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Descargar CV
          </a>
        </div>
      </div>

      <div className="lg:w-2/3 pl-8">
        <h2 className="text-3xl font-bold text-black mb-4 text-center uppercase animate-bounce">
          ¡Hola, <span className="text-blue-500">Internauta</span>!
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={`text-gray-700 mb-4`}
        >
          Mi nombre es Juan Diego Quintana, un programador en formación con sede
          en Argentina, especializado en desarrollo web, tanto en frontend como
          en backend.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-gray-700 mb-4`}
        >
          Soy un desarrollador web con una sólida base en tecnologías modernas y
          un enfoque en la creación de aplicaciones eficientes y escalables. Mi
          objetivo es contribuir con soluciones innovadoras que mejoren la
          experiencia del usuario y optimicen los procesos empresariales.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-bold uppercase text-gray-800 mb-3"
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
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <strong>Messiento Vintage</strong>: "Las camisetas vintage no solo
            visten, sino que cuentan la historia de quienes las llevaron antes."
            En esta tarea, practiqué todas las habilidades aprendidas en el
            curso y este fue mi primer trabajo con mi equipo. El Scrum Master
            dividió las tareas para cada compañero de equipo. Hice la página 404
            y sobre nosotros. También hice el logotipo y el fondo.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <strong>Ritmo Web</strong>: En este proyecto se trabajó en grupo y
            nos dividimos las tareas necesarias para diseñar un sitio que
            permita administrar canciones. El alcance de este proyecto se centró
            en cómo realizar todos los pasos del CRUD y mostrará los datos en
            forma de un catálogo de música. Por otro lado, se cumplieron otros
            requisitos solicitados.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <strong>Lotus Restaurante</strong>: Este proyecto utilizamos el
            stack MERN para crear un sistema de gestión para un restaurante de
            cocina China llamado Lotus Restaurante. En este proyecto logré la
            implementacion de un mapa para elegir una ubicación en el mapa con
            Leaflet. Así como también en la lógica del backend y parte del
            frontend.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link
              to={"/projects"}
              className="text-blue-200 hover:text-blue-500 uppercase font-semibold"
            >
              Ver más proyectos
            </Link>
          </motion.li>
        </motion.ul>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-xl font-bold uppercase text-gray-800 mb-3"
        >
          Habilidades Técnicas
        </motion.h3>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="list-disc list-inside text-gray-700 mb-4"
        >
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <strong>Frontend</strong>: Experto en React, CSS y TailwindCSS, con
            un fuerte enfoque en la creación de interfaces de usuario atractivas
            y funcionales.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <strong>Backend</strong>: Sólido conocimiento de Node.js, Express, y
            experiencia con bases de datos como MongoDB y PostgreSQL.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <strong>Herramientas de Desarrollo</strong>: Familiaridad con
            herramientas como Postman para pruebas de API, y uso de metodologías
            ágiles para una gestión eficiente del desarrollo.
          </motion.li>
        </motion.ul>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="text-xl font-bold uppercase text-gray-800 mb-3"
        >
          Intereses Personales
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className={`text-gray-700 mb-4`}
        >
          Además de mi pasión por la programación, soy un entusiasta del fútbol
          y disfruto de los videojuegos, particularmente MuPlatas2, donde estoy
          desarrollando un personaje Dark Lord para PvP. Estos intereses me
          ayudan a mantener un equilibrio entre mi vida profesional y personal,
          y a mantenerme motivado y creativo.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="text-xl font-bold uppercase text-gray-800 mb-3"
        >
          Contacto
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 2.8 }}
          className="flex items-center text-gray-700 mb-4"
        >
          <HiMail className="mr-2" />
          <span>quintanajuanchy25@gmail.com</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="flex items-center text-gray-700"
        >
          <FaLinkedin className="mr-2" />
          <a
            href="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
            className="text-blue-500 hover:underline"
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
          <a href="/cv_juan_diego_quintana.pdf" download>
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
