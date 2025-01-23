import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";

export default function Aboutme() {
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
            className={`w-3/4 border-2 border-blue-500 rounded-full shadow-lg overflow-hidden transform transition-all duration-500`}
          >
            <img
              src="https://i.imgur.com/2BIshCW.jpeg"
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

        <div className="lg:w-2/3">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Soy Juan Diego Quintana {"(23)"}, un programador en formación
            residente en Argentina y especializado como Desarrollador
            Full-Stack. Actualmente, estoy cursando la carrera de Software
            Engineer en
            <span className="font-bold"> Jala University</span>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Me destaco por mi iniciativa, proactividad y habilidades
            comunicativas. Soy una persona dinámica con capacidad para generar
            un ambiente laboral positivo. Poseo flexibilidad para adaptarme a
            diferentes contextos y un alto nivel de compromiso para desempeñar
            las responsabilidades asignadas con excelencia.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Como Desarrollador Full-Stack, cuento con una sólida base en
            tecnologías modernas y un enfoque en la creación de aplicaciones
            eficientes y escalables. Mi objetivo es aportar soluciones
            innovadoras que mejoren la experiencia del usuario y optimicen los
            procesos empresariales.
          </p>

          <h3 className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3">
            Experiencia y Proyectos
          </h3>

          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-3">
            <li className="text-gray-700 dark:text-gray-300">
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
            </li>

            <p className="text-center">
              <Link
                to={"/projects"}
                className="text-blue-600 hover:text-blue-400 hover:border-b-2 hover:border-blue-400 uppercase font-semibold"
              >
                Ver más proyectos
              </Link>
            </p>
          </ul>

          <h3 className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3">
            Educación
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 italic">
            <li>
              Universidad San Pablo T (2019-2023) -
              <span className="font-bold">Licenciatura en Periodismo</span>
            </li>

            <li>
              Rolling Code School (2023-2024) -{" "}
              <span className="font-bold">Full Stack Web Developer</span>
            </li>

            <li>
              Jala University (2024-Actualidad) -{" "}
              <span className="font-bold">Software Engineer</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3">
            Habilidades
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
            <li className="font-bold">
              Lenguajes de Programación:{" "}
              <span className="font-normal italic">
                HTML, CSS, JavaScript, TypeScript, Java
              </span>
            </li>

            <li className="font-bold">
              Frameworks/Libraries:{" "}
              <span className="font-normal italic">
                React.js, Node.js, Spring Boot, Bootstrap, TailwindCSS
              </span>
            </li>

            <li className="font-bold">
              Databases:{" "}
              <span className="font-normal italic">
                MySQL, NoSQL, MongoDB, PostgreSQL
              </span>
            </li>

            <li className="font-bold">
              Version Control:{" "}
              <span className="font-normal italic">Git, GitHub, GitLab</span>
            </li>

            <li className="font-bold">
              Metodologías:{" "}
              <span className="font-normal italic">Agile (Scrum, Kanban)</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3">
            Idiomas
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
            <li>Español (Nativo)</li>
            <li>Inglés (Intermedio)</li>
            <li>Portugués (Intermedio)</li>
          </ul>

          <h3 className="text-xl font-bold uppercase text-gray-800 dark:text-gray-300 mb-3">
            Contacto
          </h3>

          <div className="flex items-center text-gray-700 dark:text-gray-300 mb-4">
            <HiMail className="mr-2" />
            <span>quintanajuanchy25@gmail.com</span>
          </div>

          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaLinkedin className="mr-2" />
            <Link
              to="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:underline"
            >
              Juan Diego Quintana
            </Link>
          </div>

          <div className="mt-8 text-center lg:hidden bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[8px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            <Link
              to="/cv_juan_diego_quintana.pdf"
              download
              aria-label="Descargar mi currículum"
            >
              Descargar CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
