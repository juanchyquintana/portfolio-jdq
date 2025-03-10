import type { ProjectsType } from "../types";

export const projects: ProjectsType[] = [
  {
    id: 1,
    name: "Rolling Coffe - Frontend",
    description: "Este proyecto fue creado con React y demás dependencias para lograr un frontend fuerte para luego realizar pruebas con json-server. Por otro lado, se creó un backend para conectarlo posteriormente. Para ello tendrán que clonar el repositorio del backend.",
    technologies: ["React.js", "Bootstrap 5", "React Bootstrap", "React Hook Form", "React Router", "Json Server", "SweetAlert v2"],
    projectLink: "https://rollingcoffejdq.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/rollingCoffe",
    role: "Frontend Developer",
    image: "https://i.imgur.com/pPuUapD.jpeg"
  },
  {
    id: 2,
    name: "Lotus Restaurante - Frontend",
    description: "Este proyecto es el frontend de un sistema de gestión para un restaurante de cocina China llamado Lotus Restaurante. Aquí encontrarás la interfaz de usuario y todas las funcionalidades necesarias para que los usuarios administren los pedidos, menús, clientes y empleados del restaurante de forma intuitiva y eficiente.",
    technologies: ["React.js", "React Bootstrap", "React DOM", "React Hook Form", "React Icons", "React Leaflet", "React Router", "SweetAlert v2", "Bootstrap 5", "Esri Leaflet Geocoder", "Leaflet", "Leaflet Geosearch", "Moment Timezone"],
    projectLink: "https://lotusrestaurante.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/restauranteFrontend",
    role: "Frontend Developer",
    image: "https://i.imgur.com/KioXWWh.jpeg"
  },
  {
    id: 3,
    name: "Ritmo Web",
    description: "En este proyecto se trabajó en grupo y nos dividimos las tareas necesarias para diseñar un sitio que permita administrar canciones. El alcance de este proyecto se centró en cómo realizar todos los pasos del CRUD y mostrará los datos en forma de un catálogo de música. Por otro lado, se cumplieron otros requisitos solicitados.",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "Javascript", "Sweetalert v2"],
    projectLink: "https://ritmoweb.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/proyectoModuloDos",
    role: "Frontend Developer",
    image: "https://i.imgur.com/ZGaqkbW.jpeg"
  },
  {
    id: 4,
    name: "Dona Pirola Recetas",
    description: "En este proyecto se creó una página para mostrar las recetas. En el hicimos uso de JSON-Server como Base de Datos",
    technologies: ["React.js", "React Form Hook", "React Router", "Json Server", "SweetAlert v2"],
    projectLink: "https://donapirolarecetas.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/blogRecetasRolling",
    role: "Frontend Developer",
    image: "https://i.imgur.com/tUueuyl.jpeg"
  },
  {
    id: 5,
    name: "Messiento Vintage",
    description:
      "En esta tarea, practiqué todas las habilidades aprendidas en el curso y este fue mi primer trabajo con mi equipo. El Scrum Master dividió las tareas para cada compañero de equipo. Hice la página 404 y sobre nosotros. También hice el logotipo y el fondo.",
    technologies: ["HTML5", "CSS3", "Bootstrap 5"],
    projectLink: "https://messientovintagerolling.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/messientovintagerolling",
    role: "Frontend Developer",
    image: "https://i.imgur.com/ivLD07G.jpeg"
  },
  {
    id: 6,
    name: "Rolling Coffe - Backend",
    description: "Este proyecto fue creado con Node.js usando Mongo.db como base de datos. Este backend se creó para conectarlo con su frontend. Para ello tendrán que clonar el repositorio del frontend.",
    technologies: ["Javascript", "Node.js", "cors", "bcrypt", "dotenv", "Express", "Express Validator", "mongoose", "Morgan"],
    projectLink: "https://rolling-coffe-backend.vercel.app/",
    repositoryLink: "https://github.com/juanchyquintana/rollingCoffeBackend",
    role: "Backend Developer",
    image: "https://i.imgur.com/xPqJKlT.jpeg"
  },
  {
    id: 7,
    name: "Lotus Restaurante - Backend",
    description: "Este proyecto es el backend de un sistema de gestión para un restaurante de cocina China llamado Lotus Restaurante. Aquí encontrarás toda la lógica y funcionalidad necesarias para administrar los pedidos, menús, clientes y empleados del restaurante.",
    technologies: ["Javascript", "Node.js", "Mongo.db", "Cors", "dotenv", "Express", "Express Validator", "mongoose", "Morgan", "Bcrypt"],
    projectLink: "https://lotus-restaurante-backend.vercel.app/",
    repositoryLink: "https://github.com/juanchyquintana/restauranteBackend",
    role: "Backend Developer",
    image: "https://i.imgur.com/xPqJKlT.jpeg"
  },
  {
    id: 8,
    name: "Calculador de Propinas",
    description: "Este proyecto es una calculadora de propinas desarrollada con React, TypeScript y TailwindCSS. La aplicación permite calcular propinas basándose en el monto total y el porcentaje de propina deseado. También hace uso de una base de datos local para guardar configuraciones o historial de cálculos.",
    technologies: ["React.js", "TypeScript", "Tailwindcss"],
    projectLink: "https://tipcalculatorts.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/calculador-propinas-ts",
    role: "Frontend Developer",
    image: "https://i.imgur.com/qARhTgp.jpeg"
  },
  {
    id: 9,
    name: "Contador de Calorias",
    description: "Este proyecto es un contador de calorías desarrollado con React, TypeScript y TailwindCSS. La aplicación permite a los usuarios registrar y realizar un seguimiento de su consumo de calorías diario.",
    technologies: ["React.js", "TypeScript", "Tailwindcss", "Vite", "uuid", "heroicons"],
    projectLink: "https://calorietrackertsjdq.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/calorie-tracker",
    role: "Frontend Developer",
    image: "https://i.imgur.com/Aq9QSRF.jpeg"
  },
  {
    id: 10,
    name: "Control de Gastos",
    description: "Este proyecto es una aplicación de control de gastos desarrollada con React utilizando Context API. Permite a los usuarios llevar un registro de sus gastos y visualizarlos de manera clara y organizada.",
    technologies: ["React.js", "Context API", "Tailwindcss", "Vite"],
    projectLink: "https://controlgastosapijdq.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/control-gastos-contextapi",
    role: "Frontend Developer",
    image: "https://i.imgur.com/iDggVjp.jpeg"
  },
  {
    id: 11,
    name: "Pacientes de Veterinaria",
    description: "Este proyecto es una aplicación para registrar pacientes de veterinarias, desarrollada con React, TypeScript, React Hook Form, Zustand y TailwindCSS. Permite a los usuarios llevar un control detallado de los pacientes, sus datos y visitas.",
    technologies: ["React.js", "TypeScript", "React Hook", "Zustand", "Tailwindcss", "Vite", "React Toastify"],
    projectLink: "https://veterinariajdqtsz.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/pacientesvet-zustand-ts",
    role: "Frontend Developer",
    image: "https://i.imgur.com/a8BmGzn.jpeg"
  },
  {
    id: 12,
    name: "Consulta de Clima",
    description: "Este proyecto es una aplicación para consultar el clima desarrollada con React y TypeScript. La aplicación permite a los usuarios obtener información meteorológica actualizada consultando una API.",
    technologies: ["React.js", "TypeScript", "Axios", "Zod", "Vite"],
    projectLink: "https://climapptsjdq.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/clima-react-ts",
    role: "Frontend Developer",
    image: "https://i.imgur.com/9Zfrenx.jpeg"
  },
  {
    id: 13,
    name: "Consulta de Precios de Criptomonedas",
    description: "Este proyecto es una aplicación para consultar el precio de las criptomonedas desarrollada con React y TypeScript. La aplicación permite a los usuarios obtener información actualizada sobre los precios de diferentes criptomonedas consultando una API.",
    technologies: ["React.js", "TypeScript", "Axios", "Zod", "Zustand", "Vite"],
    projectLink: "https://cryptoseatrchjdq.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/cripto-react-ts",
    role: "Frontend Developer",
    image: "https://i.imgur.com/YTl0Dny.jpeg"
  },
  {
    id: 14,
    name: "Bebidas React",
    description: "Este proyecto es una aplicacion para consultar recetas de bebidas. Estas consultas las realizo con Axios.",
    technologies: ["React.js", "Typescript", "Tailwindcss", "Axios", "Zod", "Zustand", "Heroicons", "Headlessui"],
    projectLink: "https://recetasdetragosjdq.netlify.app/",
    repositoryLink: "https://github.com/juanchyquintana/bebidas-react-ts",
    role: "Frontend Developer",
    image: "https://i.imgur.com/aZ3ootv.jpeg"
  },
];
