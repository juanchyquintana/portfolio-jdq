import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { getCurrentYear } from "../helpers";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="mx-auto mt-5 space-y-10 w-full">
      <section className="container mx-auto flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center space-y-5 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <CiLocationOn className="w-8 h-8 md:mr-2" />
            <p className="uppercase mt-2 md:mt-0">Tucumán, Argentina</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center">
            <IoMdMail className="w-8 h-8 md:mr-2" />
            <p className="uppercase mt-2 md:mt-0">
              quintanajuanchy25@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="flex gap-10">
          <Link
            to="https://twitter.com/juanchyquintana"
            target="_blank"
            className="text-blue-600 border-2 border-transparent rounded-lg p-1 hover:text-blue-700 hover:border-blue-700 text-2xl"
          >
            <FaXTwitter />
          </Link>
          <Link
            to="https://www.instagram.com/juanchyquintana"
            target="_blank"
            className="text-blue-600 border-2 border-transparent rounded-lg p-1 hover:text-blue-700 hover:border-blue-700 text-2xl"
          >
            <BsInstagram />
          </Link>
          <Link
            to="https://github.com/juanchyquintana"
            target="_blank"
            className="text-blue-600 border-2 border-transparent rounded-lg p-1 hover:text-blue-700 hover:border-blue-700 text-2xl"
          >
            <BsGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
            target="_blank"
            className="text-blue-600 border-2 border-transparent rounded-lg p-1 hover:text-blue-700 hover:border-blue-700 text-2xl"
          >
            <BsLinkedin />
          </Link>
        </div>
      </section>

      <section className="bg-blue-500 text-white text-center p-3">
        <div className="container mx-auto">
          <p className="text-sm italic">
            {getCurrentYear()} - Building Software and Pages with ♥ from
            Tucumán, Argentina to the world
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
