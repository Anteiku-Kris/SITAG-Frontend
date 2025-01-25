import { Navbar } from "../../components/Navbar"

export const Dashboard = () => {

    return (
        <>
            <Navbar />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">¿Qué le interesa hacer?</h2>
                <div className="grid grid-cols-1 gap-4">
                    <button className="flex items-center p-4 bg-white shadow-md rounded-md border-2" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/papel.png" alt="Ver Resumen" className="h-6 w-6 mr-2" />
                        <span>Ver Resumen</span>
                    </button>
                    <button className="flex items-center p-4 bg-white shadow-md rounded-md border-2" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/finanzas.png" alt="Ver Finanzas" className="h-6 w-6 mr-2" />
                        <span>Ver Finanzas</span>
                    </button>
                    <button className="flex items-center p-4 bg-white shadow-md rounded-md border-2" style={{ borderColor: '#126260' }}>
                        <img src="/src/assets/icons/mapa.png" alt="Inspeccionar Fincas" className="h-6 w-6 mr-2" />
                        <span>Inspeccionar Fincas</span>
                    </button>
                </div>
            </div>
        </>
    );
}
