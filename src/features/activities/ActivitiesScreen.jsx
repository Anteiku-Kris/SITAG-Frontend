import { CardActivity } from "../../components/ui/CardActivity";
import { Navbar } from "../../components/Navbar";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Modal } from "../../components/ui/Modal";
import { useNavigate } from "react-router";
import { routes } from "../../routesConfig";

export const ActivitiesScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activityType, setActivityType] = useState("");
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleActivityChange = (event) => {
    const { value } = event.target;
    setActivityType(value);

    // Redirigir a TransferScreen si se selecciona "traspaso"
    if (value === "traspaso") {
      navigate(routes.transfer);
    }
  };

  const divisions = ["División A", "División B", "División C"];

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 mt-4">
        <h2 className="text-xl font-bold text-center text-[#126260] mb-2">
          Añade una nueva actividad
        </h2>
        <div className="flex justify-center shadow-md drop-shadow-lg items-center border-2 border-[#126260] rounded-lg py-2 w-full mx-auto transition-transform duration-300 hover:scale-103 cursor-pointer">
          <button
            onClick={openModal}
            className="flex justify-center mx-auto items-center w-full py-2"
          >
            <FaPlus className="text-[#126260] text-2xl " />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6">
        <h2 className="text-xl text-center font-bold text-[#126260] mb-2">
          Actividades de hoy
        </h2>
        <div className="space-y-4">
          <CardActivity type="inyecciones" />
          <CardActivity type="comprar alimento" />
          <CardActivity type="traspaso de ganado" />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6">
        <h2 className="text-xl text-center font-bold text-[#126260] mb-2">
          Actividades pasadas
        </h2>
        <div className="space-y-4">
          <CardActivity type="inyecciones" />
          <CardActivity type="comprar alimento" />
          <CardActivity type="traspaso de ganado" />
        </div>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Añadir una nueva actividad"
        >
          <form className="space-y-4">
            <select
              value={activityType}
              onChange={handleActivityChange}
              className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
            >
              <option value="">Selecciona una actividad</option>
              <option value="traspaso">Traspaso</option>
              <option value="vacunacion">Vacunación</option>
              <option value="compra de alimento">Compra de alimento</option>
            </select>
            {activityType === "vacunacion" && (
              <>
                <select
                  className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
                >
                  <option value="">Selecciona un medicamento</option>
                  <option value="Medicamento 1">Medicamento 1</option>
                  <option value="Medicamento 2">Medicamento 2</option>
                  <option value="Medicamento 3">Medicamento 3</option>
                </select>
                <input
                  type="number"
                  placeholder="Cantidad de dosis"
                  className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
                />
              </>
            )}
            {activityType === "compra de alimento" && (
              <>
                <input
                  type="text"
                  placeholder="Nombre del comprador"
                  className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Cantidad vendida"
                  className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
                />
              </>
            )}
            <input
              type="date"
              placeholder="Fecha"
              className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
            />
            <textarea
              placeholder="Descripción"
              className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-lg w-full"
            >
              Añadir
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};
