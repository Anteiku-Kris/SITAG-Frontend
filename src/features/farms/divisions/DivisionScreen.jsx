import { useParams, useNavigate } from "react-router";
import { routes } from "../../../routesConfig";
import { useDivisions } from "../../../hooks/useDivisions";
import { DivisionModal } from "../../../components/DivisionComponents/DivisionModal"; 
import { FaPlus } from "react-icons/fa";

export const DivisionScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { divisions, isModal, setIsModal, newDivision, handleDivision, handleChange, handleColorChange } = useDivisions();
  
  return (
    <section className="px-6 lg:px-12 xl:px-24 py-6 b bg-[#f8f9fa] min-h-screen">
      <form className="mb-6">
        <input
          type="search"
          placeholder="Buscar"
          className="border drop-shadow-lg border-[#61B250] text-[#126260] rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-[#126026] bg-white transition duration-200 text-center"
        />
      </form>
      <h2 className="text-2xl font-bold text-center text-[#126260] mb-2">
        Finca Cordillera
      </h2>
      <div className="flex flex-col items-center mb-4">
        <div className="w-20 h-20 border-2 border-[#126260] rounded-full flex items-center justify-center text-2xl font-bold text-[#126260]">
          40
        </div>
        <p className="text-[#126260] font-semibold mt-2">Animales</p>
      </div>
      <h3 className="text-lg font-bold text-green-800 mb-4">Mis Divisiones</h3>

      <div className="grid grid-cols-2 gap-4 ">
        {divisions.map((division) => (
          <button
            key={division.id}
            className={'p-4 rounded-lg text-white drop-shadow-lg cursor-pointer font-bold transition-transform duration-200 hover:scale-102 shadow-md flex flex-col justify-between items-start ${division.bgColor}'}
            style={{ background: division.bgColor }}
            onClick={() => navigate(routes.divisionOptions(division.id))}
          >
            <p className="text-lg">{division.name}</p>
            <p className="text-sm opacity-80">{division.animals || 0} animales</p>
          </button>
        ))}
        <button
          className="mt-6 w-full shadow-md drop-shadow-md hover:shadow-lg bg-white border-1 border-[#126260] text-[#126260] py-6 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126260] focus:ring-opacity-50 text-center text-2xl flex items-center cursor-pointer transition-transform duration-200 hover:scale-102 justify-center gap-2"
          onClick={() => setIsModal(true)}
        >
          <FaPlus className="text-[#126260] text-2xl" />
        </button>
      </div>
      {isModal && (
        <DivisionModal
        newDivision={newDivision}
        onClose={() => setIsModal(false)}
        onChange={handleChange}
        onAdd={handleDivision}
        handleColorChange={handleColorChange}
      />
      )} 
    </section>
);
};