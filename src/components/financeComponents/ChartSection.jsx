import { Bar, Doughnut } from "react-chartjs-2";
import { CiCirclePlus } from "react-icons/ci";


export const ChartSection = ({ data, onAddClick }) => {
    return (
        <div className="relative my-4">
            <div className="h-40 bg-white rounded shadow-md flex items-center justify-center md:hidden">
                <Doughnut data={data} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="h-40 bg-white rounded shadow-md items-center justify-center hidden md:flex">
                <Bar data={data} options={{ maintainAspectRatio: false }} />
            </div>
            <button className="absolute bottom-2 right-2 bg-amber-200 text-white p-4 rounded-full text-lg transition-transform transform hover:scale-105 hover:bg-amber-300 hover:shadow-lg" style={{ backgroundColor: "#f5d69d", color: "#6c5427" }} onClick={onAddClick}>
                <CiCirclePlus className="text-2xl" />
            </button>
        </div>
    );
};
