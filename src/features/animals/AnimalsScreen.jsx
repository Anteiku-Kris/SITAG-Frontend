import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { FaCow } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";

const animalIcons = {
  "Vaca": {
    "Macho": <FaCow className="text-4xl text-green-600" />,
    "Hembra": <FaCow className="text-4xl text-pink-400" />
  }
};

export const AnimalsScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState("");
  const [animals, setAnimals] = useState([
    { id: 0, animal: "Vaca", gender: "Macho", farm: "Finca 1" },
    { id: 2, animal: "Vaca", gender: "Hembra", farm: "Finca 2" }
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredAnimals = selectedFarm ? animals.filter(animal => animal.farm === selectedFarm) : animals;

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar />
      <h1 className="text-3xl bg font-bold text-[#126260] text-center my-4">Animales</h1>

      <div className="flex justify-evenly">
        <div className="flex justify-center mb-4">
          <button onClick={openModal} className="bg-[#2A4F4D] drop-shadow-lg cursor-pointer text-white py-2 px-4 rounded-lg shadow-lg flex items-center justify-center border transition-transform duration-200 hover:scale-102">
            <CiSquarePlus className="block sm:hidden text-4xl" />
            <span className="hidden sm:block text-xl lg:text-2xl">Agregar Animal</span>
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <select
            onChange={e => setSelectedFarm(e.target.value)}
            value={selectedFarm}
            className="border-2 text-[#2A4F4D] drop-shadow-lg bg-white border-[#2A4F4D] cursor-pointer rounded-lg py-2 px-4 transition-transform duration-200 hover:scale-105"
          >
            <option className="text-[#2A4F4D]" value="">Todas las Fincas</option>
            <option className="text-[#2A4F4D]" value="Finca 1">Finca 1</option>
            <option className="text-[#2A4F4D]" value="Finca 2">Finca 2</option>
          </select>
        </div>
      </div>

      <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 drop-shadow-lg gap-6">
        {filteredAnimals.map(({ id, animal, gender }) => (
          <div key={id} className="flex flex-col items-center transition-transform duration-200 hover:scale-102 justify-center bg-gradient-to-r from-blue-100 to-green-100 text-[#2A4F4D] font-bold py-6 px-4 rounded-lg shadow-lg">
            {animalIcons[animal][gender]}
            <span className="mt-4 text-xl">{animal}</span>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 overflow-auto">
          <div className="bg-[#f8f9fa] rounded-lg shadow-lg w-11/12 max-w-md p-6 border-[#16AB76] border-1 relative mx-auto mt-30">
            <h2 className="text-2xl font-bold mb-4 text-[#126260] text-center">Registra un animal</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-1">Número</label>
                <input type="text" placeholder="Número" className="w-full px-3 py-2 bg-[#FFFF] drop-shadow-md text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Sexo</label>
                <input type="text" placeholder="Sexo" className="w-full px-3 py-2 bg-[#FFFF] drop-shadow-md text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Raza</label>
                <input type="text" placeholder="Raza" className="w-full px-3 py-2 bg-[#FFFF] drop-shadow-md text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Especie</label>
                <input type="text" placeholder="Especie" className="w-full px-3 py-2 bg-[#FFFF] drop-shadow-md text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Fecha de nacimiento</label>
                <input
                  type="text"
                  id="birthdate"
                  placeholder="Fecha de nacimiento"
                  className="w-full px-3 py-2 bg-[#FFFF] drop-shadow-md text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Finca</label>
                <input type="text" placeholder="Finca" className="w-full px-3 py-2 bg-[#FFFF] drop-shadow-md text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div className="flex justify-between gap-4">
                <button type="submit" className="text-white py-2 px-4 cursor-pointer transition-transform duration-200 hover:scale-102 rounded-lg flex-1 text-lg"
                  style={{
                    background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
                  }}>
                  Registrar
                </button>
                <button type="button" className="bg-[#314D4D] text-white py-2 px-4 cursor-pointer transition-transform duration-200 hover:scale-102 rounded-lg flex-1 text-lg" onClick={closeModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
