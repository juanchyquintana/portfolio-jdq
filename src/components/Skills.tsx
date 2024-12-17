import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-8">
        H A B I L I D A D E S
      </h2>
      <section className="bg-white p-8 rounded-lg shadow-lg mx-auto mt-10 space-y-10">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
            Hard Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-2">
              <FaHtml5 className="text-orange-500 text-2xl" />
              <span>HTML</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaCss3Alt className="text-blue-500 text-2xl" />
              <span>CSS</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiJavascript className="text-yellow-500 text-2xl" />
              <span>JavaScript</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaJava className="text-yellow-500 text-2xl" />
              <span>Java</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiTypescript className="text-blue-500 text-2xl" />
              <span>TypeScript</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiPython className="text-blue-500 text-2xl" />
              <span>Python</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaReact className="text-blue-500 text-2xl" />
              <span>React.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaNodeJs className="text-green-500 text-2xl" />
              <span>Node.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiExpress className="text-black text-2xl" />
              <span>Express</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiPostgresql className="text-blue-600 text-2xl" />
              <span>SQL / NoSQL</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiMongodb className="text-green-500 text-2xl" />
              <span>MongoDB</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaBootstrap className="text-purple-600 text-2xl" />
              <span>Bootstrap</span>
            </div>

            <div className="flex items-center space-x-2">
              <SiTailwindcss className="text-blue-500 text-2xl" />
              <span>TailwindCSS</span>
            </div>

          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 mb-4">
            Soft Skills
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Autodidacta</li>
            <li>Trabajo en equipo</li>
            <li>Gestión de equipo</li>
            <li>Metodología Scrum</li>
          </ul>
        </div>
      </section>
    </>
  );
}
