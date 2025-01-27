import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router';

export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className="bg-gradient-to-r from-green-500 to-green-700 shadow-md p-4 flex justify-between items-center w-[100%] mx-auto">
            <div className="flex items-center">
                <img src="/src/assets/images/Logo - Alt.png" alt="Logo" className="h-10 w-10 mr-2 cursor-pointer" />
            </div>
            <div className={`nav-links duration-500 md:static absolute bg-white md:bg-transparent md:min-h-fit min-h-[60vh] left-0 ${openMenu ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center justify-center md:justify-start px-5`}>
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white text-base md:text-lg">

                    <li className="bg-green-900 hover:bg-green-950 text-white md:bg-transparent md:text-white md:hover:text-white p-2 rounded"><Link to="/profile">Perfil @Usuario</Link></li>
                    <li className="bg-green-900 hover:bg-green-950 text-white md:bg-transparent md:text-white md:hover:text-white p-2 rounded"><Link to="/login">Cerrar Sesión</Link></li>

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
