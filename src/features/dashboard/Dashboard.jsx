import { Navbar } from "../../components/Navbar";

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-6">¿Qué le interesa hacer?</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <button className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-md border-2" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/papel.png" alt="Ver Resumen" className="h-12 w-12 mb-2 md:mb-0 md:mr-4" />
                        <span>Ver Resumen</span>
                    </button>
                    <button className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-md border-2" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/finanzas.png" alt="Ver Finanzas" className="h-12 w-12 mb-2 md:mb-0 md:mr-4" />
                        <span>Ver Finanzas</span>
                    </button>
                    <button className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-md border-2" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/mapa.png" alt="Inspeccionar Fincas" className="h-12 w-12 mb-2 md:mb-0 md:mr-4" />
                        <span>Inspeccionar Fincas</span>
                    </button>
                </div>
            </div>
        </>
    );
};
