import React from "react";

 export const MedicModal = ({ modalData, onClose }) => {

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 flex justify-center items-center z-50 ">
      <div className="bg-white p-6 rounded-lg w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 relative h-120 border-1 border-[#126260]">
        <h2 className="text-2xl font-bold text-center text-[#2A4F4D]">Detalles</h2>
        <div className="mt-8">
          <p className="text-xl font-medium text-[#2A4F4D]">Vaca: {modalData.vaca}</p>
          <p className="text-xl font-medium text-[#2A4F4D]">Número: {modalData.number}</p>
          <p className="text-xl font-medium text-[#2A4F4D]">Fecha: {modalData.date}</p>
          <p className="text-xl font-medium text-[#2A4F4D]">Medicamento: {modalData.medicamento}</p>
          <p className="text-xl font-medium text-[#2A4F4D]">Dosis: {modalData.dosis}</p>
          <p className="text-xl font-medium text-[#2A4F4D]">Razon: {modalData.razon}</p>
          <p className="text-xl font-medium text-[#2A4F4D]">Finca: {modalData.finca}</p>
        </div>
        <button
            type="button"
            onClick={onClose}
            className="bg-[#314D4D] mt-30 text-white w-full py-2 px-4 rounded-lg flex-1">
             Cancelar
        </button> 
      </div>
    </div>
  );
};


