import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { FaCow } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { Modal } from "../../components/ui/Modal";

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

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar />
      <h1 className="text-3xl bg font-bold text-[#126260] text-center my-4">Animales</h1>

      <div className="flex justify-evenly">
        <button onClick={() => setIsModalOpen(true)} className="bg-[#2A4F4D] drop-shadow-lg cursor-pointer text-white py-3 px-3 rounded-lg shadow-lg flex items-center justify-center border transition-transform duration-200 hover:scale-102">
          <CiSquarePlus className="block sm:hidden text-4xl" />
          <span className="hidden sm:block text-xl lg:text-2xl">Agregar Animal</span>
        </button>
        <select
          onChange={e => setSelectedFarm(e.target.value)}
          value={selectedFarm}
          className="border-2 text-[#2A4F4D] drop-shadow-lg bg-white border-[#2A4F4D] cursor-pointer rounded-lg py-2 px-4 transition-transform duration-200 hover:scale-105"
        >
          <option value="">Todas las Fincas</option>
          <option value="Finca 1">Finca 1</option>
          <option value="Finca 2">Finca 2</option>
        </select>
      </div>

      <section className="px-4 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 drop-shadow-lg gap-6">
        {animals.filter(animal => !selectedFarm || animal.farm === selectedFarm).map(({ id, animal, gender }) => (
          <div key={id} className="flex flex-col items-center transition-transform duration-200 hover:scale-102 justify-center bg-gradient-to-r from-blue-100 to-green-100 text-[#2A4F4D] font-bold py-6 px-4 rounded-lg shadow-lg">
            {animalIcons[animal][gender]}
            <span className="mt-4 text-xl">{animal}</span>
          </div>
        ))}
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Registra un animal">
        <form className="space-y-4">
          <input type="text" placeholder="Número" className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg" />
          <input type="text" placeholder="Sexo" className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg" />
          <input type="text" placeholder="Raza" className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg" />
          <input type="text" placeholder="Especie" className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg" />
          <input type="date" placeholder="Fecha de nacimiento" className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg" />
          <input type="text" placeholder="Finca" className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg" />
          <button type="submit" className="bg-Button-gradient text-white py-2 px-4 rounded-lg w-full cursor-pointer drop-shadow-lg transition-transform duration-200 hover:scale-102">Registrar</button>
        </form>
      </Modal>
    </div>
  );
};