import { Navbar } from "../../components/Navbar";
import { routes } from "../../routesConfig";
import { Link } from "react-router";

export const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen justify-evenly">
            <Navbar />
            <div className="flex flex-grow flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: "#126260" }}>
                    ¿Qué le interesa hacer?
                </h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 w-full max-w-screen-lg">
                    <Link to={routes.summary} className="flex flex-col md:flex-row items-center justify-center p-4 bg-white shadow-md rounded-md border-2 col-span-1"
                        style={{ borderColor: "#126260" }}>
                        <button
                            className="flex flex-col md:flex-row items-center justify-center p-4  bg-white col-span-1">
                            <img
                                src="/src/assets/icons/papel.png"
                                alt="Ver Resumen"
                                href={<Link to={routes.summary}></Link>}
                                className="h-12 w-12 mb-2 md:mb-0 md:mr-4"
                            />
                            <span className="text-[#314D4D]"><Link to={routes.summary}>Ver Resumen</Link></span>
                        </button>
                    </Link>
                    <Link to={routes.finances} className="flex flex-col md:flex-row items-center justify-center p-4 bg-white shadow-md rounded-md border-2 col-span-1"
                        style={{ borderColor: "#126260" }}>
                        <button
                            className="flex flex-col md:flex-row items-center justify-center p-4 bg-white"
                        >
                            <img
                                src="/src/assets/icons/finanzas.png"
                                alt="Ver Finanzas"
                                href={<Link to={routes.finances}></Link>}
                                className="h-12 w-12 mb-2 md:mb-0 md:mr-4"
                            />
                            <span className="text-[#314D4D]"><Link to={routes.finances}>Ver Finanzas</Link></span>
                        </button>
                    </Link>
                    <Link to={routes.farm} className="flex flex-col md:flex-row items-center justify-center p-4 bg-white shadow-md rounded-md border-2 col-span-1 lg:col-span-2" style={{ borderColor: '#126260' }} 
                       >
                        <button
                            className="flex flex-col md:flex-row items-center justify-center p-4 bg-white"
                        >
                            <img
                                src="/src/assets/icons/mapa.png"
                                alt="Inspeccionar Fincas"
                                href={<Link to={routes.farm} ></Link>}
                                className="h-12 w-12 mb-2 md:mb-0 md:mr-4"
                            />
                            <span className="text-[#314D4D]"><Link to={routes.farm} >Ver fincas</Link></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
