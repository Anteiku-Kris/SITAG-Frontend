export const DivisionModal = ({ newDivision, onClose, onChange, onAdd }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd();
      onClose();
    };
  
    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 text-center flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-4 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 relative border-1 border-[#126260]">
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
              className="border-1 border-[#16AB76] text-[#126260] rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-[#16AB76]"
            />
            
            <select
              name="type"
              value={newDivision.type}
              onChange={onChange}
              className="border-1 border-[#16AB76] text-[#126260] rounded-lg py-2 px-4 w-full mb-4"
            >
              <option value="Selva">Selva</option>
              <option value="Montaña">Montaña</option>
              <option value="Arroyo">Arroyo</option>
              <option value="Pradera">Pradera</option>
            </select>
  
            <div className="flex justify-between gap-2">
              <button
                type="submit"
                className="text-white py-2 px-4 rounded-lg flex-1"
                style={{
                  background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
                }}
              >
                Añadir
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#314D4D] text-white py-2 px-4 rounded-lg flex-1"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };