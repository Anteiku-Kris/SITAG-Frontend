import { Navbar } from "../../components/Navbar";
import { useState } from "react";
import { routes } from "../../routesConfig";
import { useNavigate } from "react-router";

export const TransferScreen = () => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByFarm, setFilterByFarm] = useState("");
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const animals = [
    //Lo cambiare con la lista de animales por division que este en la base de datos, o por medio de la carga dinámica de la API
    { id: 1, name: "Animal 1", species: "Vaca", farm: "Finca A" },
    { id: 2, name: "Animal 2", species: "Caballo", farm: "Finca B" },
  ];

  const filteredAnimals = animals.filter((animal) => {
    return (
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterByFarm ? animal.farm === filterByFarm : true)
    );
  });

  const handleAnimalSelect = (animal) => {
    setSelectedAnimals((prev) => {
      if (prev.includes(animal)) {
        return prev.filter((a) => a !== animal);
      }
      return [...prev, animal];
    });
  };

  const handleConfirmTransfer = () => {
    setShowMessage(true);
    setTimeout(() => {
      navigate(routes.activities);
    }, 3000);
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 mt-4">
        <h2 className="text-xl font-bold text-center text-[#126260] mb-2">
          Seleccionar Animales para Traspaso
        </h2>
        <div className="flex space-x-2 justify-center mb-4">
          <button
            onClick={() => setFilterByFarm("Finca A")}
            className="bg-green-600 text-white py-2 px-4 rounded-lg"
          >
            Finca A
          </button>
          <button
            onClick={() => setFilterByFarm("Finca B")}
            className="bg-green-600 text-white py-2 px-4 rounded-lg"
          >
            Finca B
          </button>
          {/* Iré agregando botones de fincas o divisiones según lo vaya viendo necesario.*/}
        </div>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Buscar por ID o Nombre"
            className="w-full px-3 py-2 bg-white drop-shadow-md text-[#126260] border border-[#16AB76] rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Especie</th>
                <th className="px-4 py-2">Finca Actual</th>
                <th className="px-4 py-2">Seleccionar</th>
              </tr>
            </thead>
            <tbody>
              {filteredAnimals.map((animal) => (
                <tr key={animal.id}>
                  <td className="border px-4 py-2">{animal.id}</td>
                  <td className="border px-4 py-2">{animal.name}</td>
                  <td className="border px-4 py-2">{animal.species}</td>
                  <td className="border px-4 py-2">{animal.farm}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedAnimals.includes(animal)}
                      onChange={() => handleAnimalSelect(animal)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container mx-auto px-4 mt-6">
          <h2 className="text-xl text-center font-bold text-[#126260] mb-2">
            Animales Seleccionados
          </h2>
          <div className="space-y-4">
            {selectedAnimals.map((animal) => (
              <div
                key={animal.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <p>ID: {animal.id}</p>
                <p>Nombre: {animal.name}</p>
                <p>Especie: {animal.species}</p>
                <p>Finca: {animal.farm}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-600 text-white py-2 px-4 rounded-lg"
              onClick={handleConfirmTransfer}
            >
              Confirmar Traspaso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
