import { FarmCard } from '../../components/farmComponents/FarmCard';
import { Navbar } from '../../components/Navbar';
import { useFarms } from '../../hooks/useFarms';
import { FaPlus } from "react-icons/fa";
import { Modal } from '../../components/ui/Modal';

export const FarmScreen = () => {
    const { fincas, isModal, setIsModal, newFarm, handleFarm, handleChange } = useFarms();
    const defaulImage = "/src/assets/images/image 23.png";
    const onSubmitForm = e => {
        e.preventDefault();
        e.target.busqueda.value = '';
    };

    return (
        <div className='bg-[#f8f9fa] min-h-screen'>
            <Navbar />
            <h1 className="text-3xl text-[#126260] md:text-4xl font-bold text-center my-4">Mis Fincas</h1>
            <section className="px-4 lg:px-12 xl:px-24">
                <form onSubmit={onSubmitForm} className="mb-6">
                    <input
                        type="search"
                        placeholder="Buscar..."
                        className="border border-[#314D4D] rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 placeholder-gray-400 bg-white drop-shadow-lg transition duration-200"
                        name="busqueda"
                    />
                </form>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {fincas.map((finca) => {
                        return <FarmCard key={finca.id} finca={finca} image={defaulImage} />;
                    })}
                </div>

                <button
                    className="mt-6 w-full shadow-md hover:shadow-lg drop-shadow-lg bg-white border-1 border-[#126260] text-[#126260] py-6 px-4 rounded-lg transition-transform duration-300 hover:scale-103 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#126260] focus:ring-opacity-50 text-center text-2xl flex items-center justify-center gap-2"
                    onClick={() => setIsModal(true)}>
                    <FaPlus className="text-[#126260] text-2xl" />
                </button>
            </section>

            {isModal && (
    <Modal
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        title="Ponle un nombre a tu finca"
        onSubmit={(e) => {
            e.preventDefault();
            handleFarm();
            setIsModal(false);
        }}
    >
        <input
            type="text"
            name="name"
            placeholder="Nombre de la finca"
            value={newFarm.name}
            onChange={handleChange}
            required
            className="border-1 border-[#16AB76] text-[#126260] bg-white drop-shadow-lg rounded-lg py-2 px-4 w-full mb-4"
        />
        <input
            type="text"
            name="location"
            placeholder="Localización"
            value={newFarm.location}
            onChange={handleChange}
            required
            className="border-1 border-[#16AB76] text-[#126260] bg-white drop-shadow-lg rounded-lg py-2 px-4 w-full mb-4"
        />
        <input
            type="text"
            name="description"
            placeholder="Descripción"
            value={newFarm.description}
            onChange={handleChange}
            required
            className="border-1 border-[#16AB76] text-[#126260] bg-white drop-shadow-lg rounded-lg py-2 px-4 w-full mb-4"
        />
        <button type="submit" className="bg-Button-gradient text-white py-2 px-4 rounded-lg w-full cursor-pointer drop-shadow-lg transition-transform duration-200 hover:scale-102">Registrar</button>
    </Modal>
)}
        </div>
    );
};
