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
      <h1 className="text-3xl font-bold text-center my-4">Animales</h1>
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative mx-auto mt-30">

            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-700 text-2xl">
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Registra un animal</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-1">Número</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Sexo</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Raza</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Especie</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">Fecha de nacimiento</label>
                <input type="date" className="w-full px-3 py-2 border rounded-lg" />
              </div>

              <div className="flex justify-center gap-4">
                <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-lg text-lg" onClick={closeModal}>
                  Cancelar
                </button>
                <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg text-lg">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    </>
  );
};
