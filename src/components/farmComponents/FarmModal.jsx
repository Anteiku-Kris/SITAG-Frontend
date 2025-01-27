export const FarmModal = ({ newFarm, onClose, onChange, onAdd }) => {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-4 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 font-bold mb-2"
                >
                    X
                </button>
                <form onSubmit={e => handleSubmit(e)}>
                    <h2 className="text-xl font-bold mb-4">Ponle un nombre a tu finca</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre de la finca"
                        value={newFarm.name}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Localización"
                        value={newFarm.location}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Descripción"
                        value={newFarm.description}
                        onChange={onChange}
                        required
                        autoComplete="off"
                        className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
                    >
                        Añadir
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
};
