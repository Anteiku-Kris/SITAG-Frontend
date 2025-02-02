export const FarmModal = ({ newFarm, onClose, onChange, onAdd }) => {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd();
        onClose();
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-30 text-center flex justify-center items-center z-50">
            <div className="bg-[#f8f9fa] rounded-lg p-4 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 relative border-1 border-[#126260]">
               { /*<button
                    onClick={onClose}
                    className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 font-bold text-2xl"
                >
                    X
                </button>*/}
                <form onSubmit={e => handleSubmit(e)}>
                    <h2 className="text-xl justify-center  text-[#126260] font-bold mb-5 mt-3">Ponle un nombre a tu finca</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre de la finca"
                        value={newFarm.name}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="border-1 border-[#16AB76] text-[#126260] bg-white drop-shadow-lg  rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-[#16AB76]"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Localización"
                        value={newFarm.location}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="border-1 border-[#16AB76] text-[#126260] bg-white drop-shadow-lg  rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-[#16AB76]"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        value={newFarm.description}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="border-1 border-[#16AB76] text-[#126260] bg-white drop-shadow-lg  rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-[#16AB76]"
                    />
                    <div  className="flex justify-between gap-2"> 
                        <button
                        type="submit"
                        className="text-white py-2 px-4 rounded-lg mr-2 flex-1 cursor-pointer drop-shadow-lg transition-transform duration-200 hover:scale-102"
                        style={{
                        background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
                        }}
                    >
                        Añadir
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-[#314D4D] text-white py-2 px-4 rounded-lg flex-1 cursor-pointer drop-shadow-lg transition-transform duration-200 hover:scale-102"
                    >
                        Cancelar
                    </button> 
                    </div> 
                </form>
            </div>
        </div>
    );
};
