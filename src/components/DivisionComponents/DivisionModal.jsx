export const DivisionModal = ({ newDivision, onClose, onChange, onAdd, handleColorChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(); 
    onClose(); 
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 text-center flex justify-center items-center z-50">
      <div className="bg-[#f8f9fa] rounded-lg p-4 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 relative border-1 border-[#126260]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl justify-center text-[#126260] font-bold mb-5 mt-3">
            Ponle un nombre a tu división
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Nombre de la división"
            value={newDivision.name}
            onChange={onChange}
            required
            autoComplete="off"
            className="border-1 border-[#16AB76] text-[#126260] bg-white drop-shadow-lg  rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-[#16AB76]"
          />
          <div className="mb-4">
            <h3 className="text-[#126260] font-bold mb-2">Selecciona un color</h3>
            <div className="flex justify-around">
              <button
                type="button"
                onClick={() => handleColorChange("linear-gradient(to left, rgba(23, 126, 89, 0.20) 1%, #16AB76 100%)")}
                className="w-10 h-10 bg-white drop-shadow-lg  rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
                style={{ backgroundColor: "#16AB76" }}
              />
              <button
                type="button"
                onClick={() => handleColorChange("linear-gradient(to left, rgba(204, 214, 61, 0.20) 1%, #E2EB41 100%)")}
                className="w-10 h-10 bg-white drop-shadow-lg  rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
                style={{ backgroundColor: "#FFCC00" }}
              />
              <button
                type="button"
                onClick={() => handleColorChange("linear-gradient(to left, rgba(113, 201, 199, 0.20) 1%, #25C8C4 100%)")}
                className="w-10 h-10 bg-white drop-shadow-lg  rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
                style={{ backgroundColor: "#ADD8E6" }}
              />
              <button
                type="button"
                onClick={() => handleColorChange("linear-gradient(to left, rgba(255, 87, 51, 0.20) 1%, #FF5733 100%)")}
                className="w-10 h-10 bg-white drop-shadow-lg  rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
                style={{ backgroundColor: "#FF5733" }}
              />
               <button
                type="button"
                onClick={() => handleColorChange("linear-gradient(to left, rgba(197, 240, 153, 0.20) 1%, #A0E060 100%)")}
                className="w-10 h-10 bg-white drop-shadow-lg  rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
                style={{ backgroundColor: "#A0E060" }}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <button
              type="submit"
              className="text-white cursor-pointer drop-shadow-lg py-2 px-4 rounded-lg flex-1 transition-transform duration-200 hover:scale-102"
              style={{
                background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
              }}
            >
              Añadir
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#314D4D] cursor-pointer drop-shadow-lg text-white py-2 px-4 rounded-lg flex-1 transition-transform duration-200 hover:scale-102"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  };