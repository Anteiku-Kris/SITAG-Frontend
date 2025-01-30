import { PiFarmFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { routes } from "../../../routesConfig";
import { useNavigate } from "react-router";

export const DivisionOptions = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Administra tu división</h1>
      <section className="px-4 flex flex-wrap justify-center gap-8">
        
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div 
            className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-8 px-12 rounded-lg shadow-lg h-48 md:h-64 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => handleNavigation(routes.animals)}
          >
            <PiFarmFill className="text-4xl mb-4" />
            Consultar animales
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div 
            className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-yellow-400 text-white font-bold py-8 px-12 rounded-lg shadow-lg h-48 md:h-64 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => handleNavigation(routes.activities)}
          >
            <FaTasks className="text-4xl mb-4" />
            Ver Actividades
          </div>
        </div>

      </section>
    </>
  );
};
