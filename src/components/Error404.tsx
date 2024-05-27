import { Link } from "react-router-dom"
import pittyLogo from '../img/LogoPittyDev.png'

function Error404() {
  return (
    <div className="container">
        <div className="d-flex justify-content-center ">
          <img src={pittyLogo} alt="Imagen de Error" />
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Link to={"/"} className="w-50 fw-bold text-uppercase">Volver a Inicio</Link>
        </div>
    </div>
  )
}

export default Error404
