import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export const ModalFinances = ({ cuentas = ["Cuenta 1", "Cuenta 2", "Cuenta 3"], initialCategory, addData, toggleModal }) => {
    const [formData, setFormData] = useState({ label: '', price: 0 });
    const [category, setCategory] = useState(initialCategory);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(category, formData.label, parseFloat(formData.price)); 
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <section className={`p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto ${category === "Gastos" ? "bg-red-100" : "bg-green-100"}`}>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl text-center font-bold text-gray-700">Añadir Transacción</h1>
                   
                </div>
                <div className="flex justify-center mt-4 mb-4 items-center">
                    <button
                        className={`py-2 px-4 rounded-l border-1 border-black ${category === "Gastos" ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"}`}
                        onClick={() => setCategory("Gastos")}
                    >
                        Gastos
                    </button>
                    <button
                        className={`py-2 px-4 rounded-r border-1 border-black ${category === "Ingresos" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}
                        onClick={() => setCategory("Ingresos")}
                    >
                        Ingresos
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="account" className="block text-gray-700 mb-2">De:</label>
                        <select className="w-full border border-black p-2 rounded" defaultValue="">
                            <option value="" disabled>Seleccionar Cuenta</option>
                            {cuentas.map((cuenta, index) => (
                                <option key={index} value={cuenta}>{cuenta}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="accountres" className="block text-gray-700 mb-2">Para:</label>
                        <select className="w-full border border-black p-2 rounded" defaultValue="">
                            <option value="" disabled>Seleccionar Cuenta</option>
                            {cuentas.map((cuenta, index) => (
                                <option key={index} value={cuenta}>{cuenta}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="label" className="block text-gray-700 mb-2">Nombre</label>
                        <input
                            type="text"
                            name="label"
                            value={formData.label}
                            onChange={handleChange}
                            className="w-full border border-black p-2 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 mb-2">Precio</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border border-black p-2 rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="bg-gray-500 border-1 border-black text-white py-2 px-4 rounded mr-2"
                            onClick={toggleModal}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className={`py-2 px-4 rounded border-1 border-black ${category === "Gastos" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
                        >
                            Añadir
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};
