import { FarmCard } from '../../components/farmComponents/FarmCard';
import { FarmModal } from '../../components/farmComponents/FarmModal';
import { Navbar } from '../../components/Navbar';
import { useFarms } from '../../hooks/useFarms';

export const FarmScreen = () => {
    const { fincas, isModal, setIsModal, newFarm, handleFarm, handleChange } = useFarms();

    const onSubmitForm = e => {
        e.preventDefault();
        e.target.busqueda.value = '';
    };

    return (
        <>
            <Navbar />
            <h1 className="text-3xl md:text-4xl font-bold text-center my-4">Mis Fincas</h1>
            <section className="px-4 lg:px-12 xl:px-24">
                <form onSubmit={onSubmitForm} className="mb-6">
                    <input
                        type="search"
                        placeholder="Buscar..."
                        className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 placeholder-gray-400 bg-white transition duration-200"
                        name="busqueda"
                    />
                </form>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {fincas.map((finca) => {
                        return <FarmCard key={finca.id} finca={finca} />;
                    })}

                </div>
                <button
                    className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-lg transition duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-center text-2xl flex items-center justify-center gap-2"
                    onClick={() => setIsModal(true)}
                >
                    Añadir Finca
                </button>
            </section>
            {isModal && (
                <FarmModal newFarm={newFarm} onClose={() => setIsModal(false)} onChange={handleChange} onAdd={handleFarm} />
            )}
        </>
    );
};
