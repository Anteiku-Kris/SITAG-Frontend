import { useNavigate } from "react-router";
import {routes} from "../../routesConfig"

export const FarmCard = ({ finca }) => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-gradient-to-r from-green-700 to-red-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105"
      onClick={() => navigate(routes.division(finca.id))} 
    >
      <article className="mt-2 text-center text-lg font-semibold text-white">
        {`Nombre: ${finca.name}, Descripción: ${finca.description}`}
      </article>
    </section>
  );
};
