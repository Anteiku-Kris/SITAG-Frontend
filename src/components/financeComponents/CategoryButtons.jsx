export const CategoryButtons = ({ category, onClick }) => {
    return (
      <div className="flex justify-around my-4">
        <button
          className={`py-2 px-4 rounded ${
            category === "Gastos"
              ? "bg-red-500 text-white border-black border-1"
              : "bg-gray-300 text-gray-700 border-black border-1"
          }`}
          onClick={() => onClick("Gastos")}
        >
          Gastos
        </button>
        <button
          className={`py-2 px-4 rounded ${
            category === "Ingresos"
              ? "bg-green-500 text-white border-black border-1"
              : "bg-gray-300 text-gray-700 border-black border-1"
          }`}
          onClick={() => onClick("Ingresos")}
        >
          Ingresos
        </button>
      </div>
    );
  };
  