import { useState } from "react"

export const Navbar = () => {
    //Cerrar sesión, y Perfil, Logo de la App, 

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu()
    }
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/src/assets/images/Logo - Alt.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold" > SITAG </span>
            </div>
            <div className="relative">
                <button className="text-gray-500 focus:outline-none">📄</button>
                {openMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Perfil</li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Cerrar sesión</li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}