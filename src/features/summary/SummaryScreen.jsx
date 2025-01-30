import { Navbar } from "../../components/Navbar";
import { CardActivity } from "../../components/ui/CardActivity";
export const SummaryScreen = () => {
    return (
        <>
            <Navbar />
            <div className="p-4">
                <div className="relative bg-[#D8FDB3] p-4 rounded-lg shadow-md bg-[url('/src/assets/images/LogoCard.png')] bg-no-repeat bg-center">
                    <div className="absolute inset-0 bg-white/50 rounded-lg"></div>
                    <div className="relative">
                        <h2 className="text-[#2A4F4D] font-bold">Aquí tus Ganancias!</h2>
                        <p className="text-2xl text-[#126260] font-bold">$510.50</p>
                        <span className="bg-[#F5F5F5] text-[#126260] text-sm px-2 py-1  rounded-2xl">+7%</span>
                        <p className="text-[#2A4F4D]">que el mes pasado</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="bg-[#F5D69D] p-4 rounded-lg shadow-md">
                        <p className="font-bold text-[#6D5426]">Ver animales</p>
                        <p className="text-xl text-[#6D5426] font-bold">40</p>
                        <p className="text-sm text-[#6D5426]">animales totales en isletas</p>
                    </div>
                    <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md">
                        <p className="text-[#F8672E] font-bold">Cantidad de gastos</p>
                        <p className="text-xl font-bold text-[#EF4400]">30</p>
                        <p className="text-sm text-[#F8672E]">gastos este mes</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#6D5426] font-black text-2xl px-1 py-2 text-center justify-center">Actividades de hoy</h3>
                </div>
                <div className="container mx-auto px-4 mt-6">
                        <div className="space-y-4">
                          <CardActivity type="inyecciones" />
                          <CardActivity type="comprar alimento" />
                          <CardActivity type="traspaso de ganado" />
                        </div>
                      </div>
            </div>
        </>
    );
}
