import { useState } from "react";
import { MdMedicalServices, MdShoppingCart, MdTransferWithinAStation } from "react-icons/md";

const activityIcons = {
  "inyecciones": <MdMedicalServices className="text-[#126260] text-4xl" />,
  "comprar alimento": <MdShoppingCart className="text-[#126260] text-4xl" />,
  "traspaso de ganado": <MdTransferWithinAStation className="text-[#126260] text-4xl" />
};

const activityNames = {
  "inyecciones": "Inyecciones",
  "comprar alimento": "Comprar alimento",
  "traspaso de ganado": "Traspaso de ganado"
};

export function CardActivity({ type }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="mx-4 sm:mx-12 rounded-xl py-4 px-6 border-2 border-[#126260] overflow-hidden cursor-pointer transition-all duration-300"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        {activityIcons[type]}
        <p className="text-[#314D4D] text-xl sm:text-2xl font-bold">{activityNames[type]}</p>
      </div>

      <div
        className={`transition-all duration-300 ${
          expanded ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="mt-2">
          <p className="text-[#314D4D]">Categoría: </p>
          <p className="text-[#314D4D] mt-4">Fecha: 30 de Noviembre de 2024</p>
          <p className="text-[#314D4D] mt-4">Descripción: </p>
        </div>
      </div>
    </div>
  );
}
