import React from "react";
import { GiMedicines } from "react-icons/gi";
import { PiPlant } from "react-icons/pi";
import { FaEdit, FaTrash } from "react-icons/fa";

export const ExpenseEarningsList = ({ category, items, onEdit, onRemove }) => {
  return (
    <section className="my-4">
      {items.labels.map((label, index) => (
        <article
          key={label}
          className={`flex items-center justify-between p-4 ${category === "Gastos" ? "bg-red-50 border-red-500" : "bg-green-50 border-green-500"
            } border-l-4 rounded shadow-sm`}
        >
          <div className="flex items-center">
            {label === "Medicina" || label === "Trabajo" ? (
              <GiMedicines className={category === "Gastos" ? "text-red-500" : "text-green-500"} />
            ) : (
              <PiPlant className={category === "Gastos" ? "text-red-500" : "text-green-500"} />
            )}
            <span className="ml-2 text-gray-700">{label}</span>
          </div>
          <div className="text-gray-500">
            <span>{((items.data[index] / items.data.reduce((acc, val) => acc + val, 0)) * 100).toFixed(1)}%</span>
            <span className="ml-4">${items.data[index].toFixed(2)}</span>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => onEdit(index)} className="text-blue-500 hover:text-blue-700">
              <FaEdit />
            </button>
            <button onClick={() => onRemove(index)} className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};
