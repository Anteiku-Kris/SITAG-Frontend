import { PiFarmFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import {routes} from "../../../routesConfig";

export const DivisionOptions = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">
        Administra la división
      </h1>
      <section className="px-4">
        <div className="flex items-center justify-center bg-green-200 hover:bg-green-300 text-green-700 font-bold py-2 px-4 rounded shadow-lg my-4 w-full md:w-1/2">
          <PiFarmFill className="text-3xl mr-2" />
          Consultar Animales
        </div>
        <div className="flex items-center justify-center bg-blue-200 hover:bg-blue-300 text-blue-700 font-bold py-2 px-4 rounded shadow-lg my-4 w-full md:w-1/2">
          <FaTasks className="text-3xl mr-2" />
          Ver actividades
        </div>
      </section>
    </>
  );
};
