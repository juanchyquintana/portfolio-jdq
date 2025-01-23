import { Link } from "react-router-dom"
import pittyLogo from '../img/LogoPittyDev.png'

function Error404() {
  return (
    <div className="container">
        <div className="d-flex justify-content-center ">
          <img src={pittyLogo} alt="Imagen de Error" />
          <p className="text-center text-6xl mb-5 font-bold">ERROR 404</p>
        </div>

        <div className="d-flex text-center mb-5 w-full bg-blue-700 hover:bg-blue-900 text-white uppercase font-bold rounded-lg p-2">
          <Link to={"/"} className="w-50 fw-bold text-uppercase">Volver a Inicio</Link>
        </div>
    </div>
  )
}

export default Error404
