import { Navbar } from "../../components/Navbar";
import { useFinances } from "../../hooks/useFinances";
import { CategoryButtons } from "../../components/financeComponents/CategoryButtons";
import { TimeButtons } from "../../components/financeComponents/TimeButtons";
import { ChartSection } from "../../components/financeComponents/ChartSection";
import { ExpenseEarningsList } from "../../components/financeComponents/ExpenseEarningsList";
import { ModalFinances } from "../../components/financeComponents/ModalFinances";
import { ModalEdit } from "../../components/financeComponents/ModalEdit";
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement } from "chart.js";
import { useState } from "react";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

export const FinancesScreen = () => {
    const {
        data,
        category,
        time,
        showModal,
        handleCategoryClick,
        handleTimeClick,
        toggleModal,
        addData,
        editData,
        removeData,
        dataBills,
        dataEarnings
    } = useFinances();

    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    const handleAddData = (category, label, price) => {
        addData(category, label, price);
        setNotificationMessage(`${category === "Gastos" ? "Gasto" : "Ingreso"} añadido con éxito: ${label}`);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
        toggleModal();
    };
    const [editingItem, setEditingItem] = useState(null);

    const handleEdit = (index) => {
        const currentItem = {
            label: category === "Gastos" ? dataBills[time].labels[index] : dataEarnings[time].labels[index],
            value: category === "Gastos" ? dataBills[time].data[index] : dataEarnings[time].data[index],
            index
        };
        setEditingItem(currentItem);
    };

    const handleSaveEdit = (updatedData) => {
        editData(editingItem.index, time, category, updatedData);
        setEditingItem(null);
    };

    return (
        <>
            <Navbar />
            <section className="flex flex-col p-4 bg-white min-h-screen">
                <div className="text-center mb-4">
                    <h2 className="text-xl font-bold text-gray-700">Total</h2>
                    <span className="text-lg text-gray-500">
                        ${category === "Gastos" ? "368.00" : "450.00"}
                    </span>
                </div>

                <CategoryButtons
                    category={category}
                    onClick={handleCategoryClick}
                />
                <TimeButtons time={time} onClick={handleTimeClick} />

                <ChartSection data={data} onAddClick={toggleModal} />

                <ExpenseEarningsList
                    category={category}
                    items={category === "Gastos" ? dataBills[time] : dataEarnings[time]}
                    onEdit={handleEdit}
                    onRemove={(index) => removeData(index, time, category)}
                />



                {showModal && <ModalFinances addData={handleAddData} toggleModal={toggleModal} initialCategory={category} />}

                {showNotification && (
                    <div className={`fixed bottom-4 right-4 p-4 rounded shadow-lg text-white ${category === "Gastos" ? "bg-red-500" : "bg-green-500"}`}>
                        {notificationMessage}
                    </div>
                )}
                {editingItem && (
                    <ModalEdit
                        item={editingItem}
                        onSave={handleSaveEdit}
                        onCancel={() => setEditingItem(null)}
                    />
                )}
            </section>
        </>
    );
};
