import { useState } from "react";


export const ModalEdit = ({ item, onSave, onCancel }) => {
    const [label, setLabel] = useState(item.label);
    const [value, setValue] = useState(item.value);

    const handleSave = () => {
        onSave({ label, value: parseFloat(value) });
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-4 rounded shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Editar ítem</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Precio</label>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="mt-1 p-2 border rounded w-full"
                    />
                </div>
                <div className="flex justify-center space-x-2">
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded border-1 border-black">Cancelar</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded border-1 border-black">Guardar</button>
                </div>
            </div>
        </div>
    );
};
