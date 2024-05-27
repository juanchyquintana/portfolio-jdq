import { BsInstagram, BsTwitch, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import pin from "../img/pin-svgrepo-com.svg";
import mail from "../img/mail-svgrepo-com.svg";
import { getCurrentYear } from "../helpers";

function Footer() {
  return (
    <footer className="border-t border-gray-500 mx-auto my-5 space-y-10">
      <section className="container mx-auto flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center space-y-5 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img src={pin} alt="ping" className="w-8 h-8 md:mr-2" />
            <p className="uppercase mt-2 md:mt-0">Tucumán, Argentina</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center">
            <img src={mail} alt="mail" className="w-8 h-8 md:mr-2" />
            <p className="uppercase mt-2 md:mt-0">
              quintanajuanchy25@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center ">
          <div className="text-center md:text-left">
            <p className="uppercase font-bold text-center mb-2 text-indigo-600">Sobre Mí</p>
            <p>Mi nombre es Juan Diego Quintana, Full-Stack Developer</p>
            <p>
              PittyDev es el reflejo de mi ilusión por crecer como profesional
              dentro de la industria del desarrollo del software. Como
              profesional y freelance, me he especializado en desarrollo de
              páginas web con React.js
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="uppercase font-bold text-center mb-2 text-indigo-600">
              Últimos Proyectos
            </p>
            <ul className="list-none">
              <li>
                <a
                  href="./pages/error.html"
                  className="text-gray-600 hover:underline"
                >
                  -
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="uppercase font-bold text-center mb-2 text-indigo-600">Pittydev</p>
            <ul className="list-none">
              <li>
                <a
                  href="./pages/error.html"
                  className="text-gray-600 hover:underline"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="./pages/error.html"
                  className="text-gray-600 hover:underline"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="./pages/error.html"
                  className="text-gray-600 hover:underline"
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="flex gap-10">
          <a
            href="https://twitter.com/juanchyquintana"
            target="_blank"
            className="text-indigo-600 border-2 border-transparent rounded-lg p-1 hover:text-indigo-900 hover:border-indigo-900 text-2xl"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/juanchyquintana"
            target="_blank"
            className="text-indigo-600 border-2 border-transparent rounded-lg p-1 hover:text-indigo-900 hover:border-indigo-900 text-2xl"
          >
            <BsInstagram />
          </a>
          <a
            href="https://github.com/juanchyquintana"
            target="_blank"
            className="text-indigo-600 border-2 border-transparent rounded-lg p-1 hover:text-indigo-900 hover:border-indigo-900 text-2xl"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
            target="_blank"
            className="text-indigo-600 border-2 border-transparent rounded-lg p-1 hover:text-indigo-900 hover:border-indigo-900 text-2xl"
          >
            <BsLinkedin />
          </a>
        </div>
      </section>

      <section className="bg-black text-gray-500 text-center p-3">
        <div className="container mx-auto">
          <p className="text-sm italic">
            {getCurrentYear()} - Building Software and Pages with ♥
            from Tucumán, Argentina to the world 
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
