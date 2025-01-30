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
      <div className="container mx-auto  px-4 mt-4">
        <h2 className="text-xl font-bold  justify-center text-center text-[#126260] mb-2">Añade una nueva actividad</h2>
        <div className="flex justify-center shadow-md items-center border-2 border-[#126260] rounded-lg py-2 w-full mx-auto sm:mx-auto">
          <button onClick={openModal} className="flex justify-center mx-auto sm:mx-auto items-center w-full py-2">
            <FaPlus className="text-[#126260] text-2xl " />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6">
        <h2 className="text-xl text-center font-bold text-[#126260] mb-2">Actividades de hoy</h2>
        <div className="space-y-4">
          <CardActivity type="inyecciones" />
          <CardActivity type="comprar alimento" />
          <CardActivity type="traspaso de ganado" />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6">
        <h2 className="text-xl text-center font-bold text-[#126260] mb-2">Actividades pasadas</h2>
        <div className="space-y-4">
          <CardActivity type="inyecciones" />
          <CardActivity type="comprar alimento" />
          <CardActivity type="traspaso de ganado" />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md border-[#16AB76] border-1 p-6 relative mx-auto mt-20 mb-4">
            <button onClick={closeModal} className="absolute top-2 right-2  text-gray-700 text-xl">
              &times;
            </button>
            <h2 className="text-2xl text-[#126260] font-bold mb-4 text-center">Añadir una nueva actividad</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"></label>
                <input type="text" placeholder="Categoría" className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"></label>
                <input type="text" placeholder="Actividad" className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"></label>
                <input type="date" 
                  placeholder="Fecha" 
                  className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg"  
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => !e.target.value && (e.target.type = 'text')}/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"></label>
                <textarea placeholder="Descripción" className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" ></textarea>
              </div>
              <div className="flex justify-between gap-4">
                <button type="submit" className="bg-green-600 text-white py-2 px-4 flex-1 rounded-lg text-lg" 
                style={{
                  background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
                  }}>
                  Añadir
                </button>
                <button type="button" className="bg-[#314D4D] text-white py-2 px-4 flex-1 rounded-lg text-lg" onClick={closeModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
