import { CardActivity } from "../../components/ui/CardActivity";
import { Navbar } from "../../components/Navbar";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

export const ActivitiesScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-4">
        <h2 className="text-xl font-bold text-[#126260] mb-2">Añade una nueva actividad</h2>
        <div className="flex justify-center items-center border-2 border-[#126260] rounded-lg py-2 w-full sm:w-1/2 lg:w-1/3 mx-auto">
          <button onClick={openModal} className="flex justify-center items-center w-full">
            <FaPlus className="text-[#126260] text-2xl" />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6">
        <h2 className="text-xl text-center font-bold text-[#314D4D] mb-2">Actividades de hoy</h2>
        <div className="space-y-4">
          <CardActivity type="inyecciones" />
          <CardActivity type="comprar alimento" />
          <CardActivity type="traspaso de ganado" />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6">
        <h2 className="text-xl text-center font-bold text-[#314D4D] mb-2">Actividades pasadas</h2>
        <div className="space-y-4">
          <CardActivity type="inyecciones" />
          <CardActivity type="comprar alimento" />
          <CardActivity type="traspaso de ganado" />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative mx-auto mt-20 mb-4">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 text-xl">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Añadir una nueva actividad</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Categoría</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Actividad</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Fecha</label>
                <input type="date" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Descripción</label>
                <textarea className="w-full px-3 py-2 border rounded-lg"></textarea>
              </div>
              <div className="flex justify-center gap-4">
                <button type="button" className="bg-gray-500 text-white py-3 px-6 rounded-lg text-lg" onClick={closeModal}>
                  Cancelar
                </button>
                <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg">
                  Añadir
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
