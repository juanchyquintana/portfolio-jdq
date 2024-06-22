import profilePhoto from "../img/Perfil_Foto_Juan.jpeg";
import { FaLinkedin } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Aboutme() {
  return (
    <section className="hidden md:flex bg-white p-8 rounded-lg shadow-lg mx-auto mt-10">
      <div className="w-1/3 hidden lg:flex justify-center items-center">
        <img
          src={profilePhoto}
          alt="Juan Diego Quintana"
          className="rounded-full shadow-lg w-3/4 border-2 border-blue-500" 
        />
      </div>

      <div className="lg:w-2/3 pl-8">
        <h2 className="text-3xl font-bold text-black mb-4 text-center uppercase animate-bounce">¡Hola, <span className="text-blue-500">Internauta</span>!</h2>

        <p className="text-gray-700 mb-4">
          Mi nombre es Juan Diego Quintana, un programador en formación con sede
          en Argentina, especializado en desarrollo web, tanto en frontend como
          en backend.
        </p>

        <p className="text-gray-700 mb-4">
          Soy un desarrollador web con una sólida base en tecnologías modernas y
          un enfoque en la creación de aplicaciones eficientes y escalables. Mi
          objetivo es contribuir con soluciones innovadoras que mejoren la
          experiencia del usuario y optimicen los procesos empresariales.
        </p>

        <p className="text-gray-700 mb-4">
          Mi enfoque se centra en la aplicación de buenas prácticas de
          desarrollo, manteniendo un código limpio y bien documentado. Disfruto
          trabajando en equipo y colaborando con otros profesionales para lograr
          objetivos comunes, siempre buscando aprender y mejorar continuamente.
        </p>

        <h3 className="text-xl font-bold uppercase text-gray-800 mb-3">
          Experiencia y Proyectos
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-3">
          <li>
            <strong>Messiento Vintage</strong>: "Las camisetas vintage no solo visten, sino que cuentan la historia de quienes las llevaron antes." En esta tarea, practiqué todas las habilidades aprendidas en el curso y este fue mi primer trabajo con mi equipo. El Scrum Master dividió las tareas para cada compañero de equipo. Hice la página 404 y sobre nosotros. También hice el logotipo y el fondo.
          </li>
          <li>
            <strong>Ritmo Web</strong>: En este proyecto se trabajó en grupo y nos dividimos las tareas necesarias para diseñar un sitio que permita administrar canciones. El alcance de este proyecto se centró en cómo realizar todos los pasos del CRUD y mostrará los datos en forma de un catálogo de música. Por otro lado, se cumplieron otros requisitos solicitados.
          </li>
          <li>
            <strong>Lotus Restaurante</strong>: Este proyecto utilizamos el stack MERN para crear un sistema de gestión para un restaurante de cocina China llamado Lotus Restaurante. En este proyecto logré la implementacion de un mapa para elegir una ubicación en el mapa con Leaflet. Así como también en la lógica del backend y parte del frontend.
          </li>
          <li>
            <Link to={"/projects"} className="text-blue-200 hover:text-blue-500 uppercase font-semibold">Ver más proyectos</Link>
          </li>
        </ul>

        <h3 className="text-xl font-bold uppercase text-gray-800 mb-3">
          Habilidades Técnicas
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Frontend</strong>: Experto en React, CSS y TailwindCSS, con
            un fuerte enfoque en la creación de interfaces de usuario atractivas
            y funcionales.
          </li>
          <li>
            <strong>Backend</strong>: Sólido conocimiento de Node.js, Express, y
            experiencia con bases de datos como MongoDB y PostgreSQL.
          </li>
          <li>
            <strong>Herramientas de Desarrollo</strong>: Familiaridad con
            herramientas como Postman para pruebas de API, y uso de metodologías
            ágiles para una gestión eficiente del desarrollo.
          </li>
        </ul>

        <h3 className="text-xl font-bold uppercase text-gray-800 mb-3">
          Intereses Personales
        </h3>
        <p className="text-gray-700 mb-4">
          Además de mi pasión por la programación, soy un entusiasta del fútbol
          y disfruto de los videojuegos, particularmente MuPlatas2, donde estoy
          desarrollando un personaje Dark Lord para PvP. Estos intereses me
          ayudan a mantener un equilibrio entre mi vida profesional y personal,
          y a mantenerme motivado y creativo.
        </p>

        <h3 className="text-xl font-bold uppercase text-gray-800 mb-3">Contacto</h3>
        <div className="flex items-center text-gray-700 mb-4">
          <HiMail className="mr-2" />
          <span>quintanajuanchy25@gmail.com</span>
        </div>
        <div className="flex items-center text-gray-700">
          <FaLinkedin className="mr-2" />
          <a
            href="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
            className="text-blue-500 hover:underline"
          >
            Juan Diego Quintana
          </a>
        </div>
      </div>
    </section>
  );
}
