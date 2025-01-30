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
      <h1 className="text-2xl font-bold text-center my-4 text-[#126260]">Administra tu división</h1>
      <section className="px-4 flex flex-wrap justify-center gap-8">
        
        <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
          <div 
            className="flex flex-col items-center justify-center text-white font-bold py-8 px-12 rounded-lg shadow-lg h-48 md:h-64 cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{
              background: "linear-gradient(to right, #00B1AC 0%, #4BC9C5 35%, #71C9C7 55%)"
              }}
            onClick={() => handleNavigation(routes.animals)}
          >
            <PiFarmFill className="text-4xl mb-4" />
            Consultar animales
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div 
            className="flex flex-col items-center justify-center text-white font-bold py-8 px-12 rounded-lg shadow-lg h-48 md:h-64 cursor-pointer hover:scale-105 transition-transform duration-200"
            style={{
              background: "linear-gradient(to left, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
              }}
            onClick={() => handleNavigation(routes.activities)}
          >
            <FaTasks className="text-4xl mb-4" />
            Ver Actividades
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full flex justify-between items-end pointer-events-none">
        <img 
          src="/src/assets/images/hierva.png" 
          alt="Left decoration"
          className="w-24 sm:w-32 md:w-40 lg:w-48"
        />
        <img 
          src="/src/assets/images/hierva 2.png" 
          alt="Right decoration"
          className="w-24 sm:w-32 md:w-40 lg:w-48"
        />
      </div>
    </section>
    </>
  );
};
