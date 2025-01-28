export const TimeButtons = ({ time, onClick }) => {
    return (
      <div className="flex justify-around mb-4">
        {["week", "month", "year"].map((t) => (
          <button
            key={t}
            className={`py-2 px-4 rounded ${
              time === t ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => onClick(t)}
          >
            {t}
          </button>
        ))}
      </div>
    );
  };
  