import { MedicModal } from "../../components/MedicComponents/MedicModal";
import { Navbar } from "../../components/Navbar"
import { useState } from "react";
export const MedsScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <Navbar />
      <div className="p-4 flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative bg-[#D8FDB3] p-4 rounded-lg shadow-md bg-[url('/src/assets/images/LogoCard.png')] bg-no-repeat bg-[50%] h-40 md:h-48 w-full mx-auto">
            <div className="absolute inset-0 bg-white/50 rounded-lg flex justify-center items-center">
              <h2 className="text-[#2A4F4D] text-center font-black text-5xl">Añadir acción</h2>
            </div>
          </div>
          <div className="text-center font-black text-4xl text-[#2A4F4D] mt-12 p-4 py-6">
            <h2>Historial Médico</h2>
          </div>
        </div>
        {["Vaca", "Vaca2", "Vaca2"].map((vaca, index) => (
          <div key={index} className="w-full max-w-3xl mx-auto mt-6">
            <div
              className="relative bg-[#FFFFFF] p-4 rounded-lg shadow-md flex items-center h-40 cursor-pointer"
              onClick={() => openModal({ vaca: vaca, number: "40/2", date: "25/8/09" })}
            >
              <div className="w-1/3 h-full overflow-hidden rounded-lg">
                <img
                  src={`/src/assets/images/${vaca}.png`}
                  alt={vaca}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 pl-4">
                <div className="text-[#2A4F4D] text-2xl font-bold">
                  <p>Número: 40/2</p>
                </div>
                <div className="text-[#2A4F4D] text-xl">
                  <p>25/8/09</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <MedicModal modalData={modalData} onClose={onClose} />}
    </>
  )
}
