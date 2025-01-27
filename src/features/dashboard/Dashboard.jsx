import { Navbar } from "../../components/Navbar";

export const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen justify-evenly">
            <Navbar />
            <div className="flex flex-grow flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-6 text-center " style={{ color: "#126260" }}>¿Qué le interesa hacer?</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 w-full max-w-screen-lg">
                    <button className="flex flex-col md:flex-row items-center justify-center p-4 bg-white shadow-md rounded-md border-2 col-span-1" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/papel.png" alt="Ver Resumen" className="h-12 w-12 mb-2 md:mb-0 md:mr-4" />
                        <span>Ver Resumen</span>
                    </button>
                    <button className="flex flex-col md:flex-row items-center justify-center p-4 bg-white shadow-md rounded-md border-2 col-span-1" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/finanzas.png" alt="Ver Finanzas" className="h-12 w-12 mb-2 md:mb-0 md:mr-4" />
                        <span>Ver Finanzas</span>
                    </button>
                    <button className="flex flex-col md:flex-row items-center justify-center p-4 bg-white shadow-md rounded-md border-2 col-span-1 lg:col-span-2" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/mapa.png" alt="Inspeccionar Fincas" className="h-12 w-12 mb-2 md:mb-0 md:mr-4" />
                        <span>Inspeccionar Fincas</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
