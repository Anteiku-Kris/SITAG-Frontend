import { FaMapMarkerAlt } from "react-icons/fa";

export const FarmCard = ({ finca }) => {
    return (
        <section className="bg-gradient-to-r from-green-700 to-red-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
            <article className="mt-2 text-center text-lg font-semibold text-white">
                {`Nombre: ${finca.name}, Descripción: ${finca.description}`}
            </article>
            <FaMapMarkerAlt className="text-red-500 mt-2 text-3xl" />
        </section>
    );
};
