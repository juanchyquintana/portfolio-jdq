import { useNavigate, useParams } from "react-router-dom";
import Error404 from "./Error404";

export default function ModalProjectDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    return <Error404 />;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={() => navigate(-1)}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Project Detail {id}</h2>
        <p>Aquí puedes mostrar detalles adicionales del proyecto.</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
