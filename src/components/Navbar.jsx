import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router';
import { routes } from "../routesConfig";
import { useEffect } from 'react';
export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav
        className="shadow-md p-4 flex justify-between items-center w-[100%] mx-auto"
        style={{
            background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
        }}>
        <div className="flex items-center">
            <img src="/src/assets/images/Logo - Alt2.png" alt="Logo" className="h-10 w-10 mr-2 cursor-pointer" />
        </div>
        <div className={`nav-links duration-500 md:static absolute md:bg-transparent md:min-h-fit min-h-[60vh] left-0 z-50 ${openMenu ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center justify-center md:justify-start px-5 ${isMobile ? "bg-[url('src/assets/images/NavBG.jpg')] bg-cover bg-center" : ""}`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 text-white text-base md:text-lg">
                <li 
                    className={`p-2 rounded drop-shadow-lg text-center ${isMobile ? "border-[#126260]" : "border-none"} bg-white hover:underline border-2 text-[#126260] md:bg-transparent md:text-white md:hover:text-white cursor-pointer hover:scale-103 transition-all duration-300`}>
                    <Link to={routes.home}>Inicio</Link>
                </li>

                <li 
                    className={`p-2 rounded drop-shadow-lg text-center ${isMobile ? "border-[#126260]" : "border-none"} bg-white hover:underline border-2 text-[#126260] md:bg-transparent md:text-white md:hover:text-white cursor-pointer hover:scale-103 transition-all duration-300`}>
                    <Link to={routes.medicines}>Medicines</Link>
                </li>

                <li 
                    className={`p-2 rounded drop-shadow-lg text-center ${isMobile ? "border-[#126260]" : "border-none"} bg-white hover:underline border-2 text-[#126260] md:bg-transparent md:text-white md:hover:text-white cursor-pointer hover:scale-103 transition-all duration-300`}>
                    <Link to={routes.farm}>Fincas</Link>
                </li>

                <li 
                    className={`p-2 rounded drop-shadow-lg text-center ${isMobile ? "border-[#126260]" : "border-none"} bg-white hover:underline border-2 text-[#126260] md:bg-transparent md:text-white md:hover:text-white cursor-pointer hover:scale-103 transition-all duration-300`}>
                    <Link to={routes.animals}>Animales</Link>
                </li>

                <li 
                    className={`p-2 rounded drop-shadow-lg text-center ${isMobile ? "border-[#126260]" : "border-none"} bg-white hover:underline border-2 text-[#126260] md:bg-transparent md:text-white md:hover:text-white cursor-pointer hover:scale-103 transition-all duration-300`}>
                    <Link to={routes.login}>Cerrar Sesión</Link>
                </li>

                <li 
                    className={`p-2 rounded drop-shadow-lg text-center ${isMobile ? "border-[#126260]" : "border-none"} bg-white hover:underline border-2 text-[#126260] md:bg-transparent md:text-white md:hover:text-white cursor-pointer hover:scale-103 transition-all duration-300`}>
                    <Link to="/profile">Perfil @Usuario</Link>
                </li>
            </ul>
        </div>
        <div className="text-white font-bold text-3xl md:text-xl">
            SITAG
        </div>
        <div className="flex items-center gap-6">
            <button onClick={toggleMenu} className="text-3xl text-white cursor-pointer md:hidden">
                {openMenu ? <FiX /> : <FiMenu />}
            </button>
        </div>
    </nav>
    );
};
