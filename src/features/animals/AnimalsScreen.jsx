import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { FaCow, FaHorse, FaDog } from "react-icons/fa6";
import { GiChicken, GiDonkey, GiDuck, GiGoat, GiPig, GiRooster, GiSheep } from "react-icons/gi";
import { CiSquarePlus } from "react-icons/ci";

const animalIcons = {
  "Vaca": <FaCow className="text-4xl text-green-600" />,
  "Oveja": <GiSheep className="text-4xl text-green-600" />,
  "Cabra": <GiGoat className="text-4xl text-green-600" />,
  "Cerdo": <GiPig className="text-4xl text-green-600" />,
  "Caballo": <FaHorse className="text-4xl text-green-600" />,
  "Gallo": <GiRooster className="text-4xl text-green-600" />,
  "Gallina": <GiChicken className="text-4xl text-green-600" />,
  "Pato": <GiDuck className="text-4xl text-green-600" />,
  "Asno": <GiDonkey className="text-4xl text-green-600" />,
  "Perro": <FaDog className="text-4xl text-green-600" />
};

export const AnimalsScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const animals = [
    { id: 0, animal: "Vaca" },
    { id: 1, animal: "Oveja" },
    { id: 2, animal: "Cabra" },
    { id: 3, animal: "Cerdo" },
    { id: 4, animal: "Caballo" },
    { id: 5, animal: "Gallo" },
    { id: 6, animal: "Gallina" },
    { id: 7, animal: "Pato" },
    { id: 9, animal: "Asno" },
    { id: 10, animal: "Perro" }
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-[#126260] text-center my-4">Animales</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={openModal}
          className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg flex items-center justify-center border border-black"
        >
          <CiSquarePlus className="block sm:hidden text-4xl" />
          <span className="hidden sm:block text-xl lg:text-2xl">Agregar Animal</span>
        </button>
      </div>
      <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {animals.map(({ id, animal }) => (
          <div key={id} className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 text-gray-800 font-bold py-6 px-4 rounded-lg shadow-lg">
            {animalIcons[animal]}
            <span className="mt-4 text-xl">{animal}</span>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 overflow-auto">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 border-[#16AB76] border-1 relative mx-auto mt-30">
            <h2 className="text-2xl font-bold mb-4  text-[#126260] text-center">Registra un animal</h2>

            <form className="space-y-4 ">
              <div>
                <label className="block text-gray-700  font-bold mb-1"></label>
                <input type="text" placeholder="Número" className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg  " />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1"></label>
                <input type="text" placeholder="Sexo" className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1"></label>
                <input type="text" placeholder="Raza" className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1 "></label>
                <input type="text"placeholder="Especie" className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1 " ></label>
                <input
                type="text"
                id="birthdate"
                placeholder="Fecha de nacimiento"
                className="w-full px-3 py-2 text-[#126260] border-1 border-[#16AB76] focus:outline-none focus:ring-1 focus:ring-[#16AB76] rounded-lg"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
              /> 
              </div>

              <div className="flex justify-between gap-4">
                
                <button type="submit" className="text-white py-2 px-4 rounded-lg flex-1 text-lg"
                style={{
                        background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
                        }}>
                  
                  Registrar
                </button>
                <button type="button" className="bg-[#314D4D] text-white py-2 px-4 rounded-lg  flex-1 text-lg" onClick={closeModal}>
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
