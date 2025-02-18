export const Modal = ({ isOpen, onClose, title, children, onSubmit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-30 overflow-y-auto">
            <div className="bg-[#f8f9fa] rounded-lg shadow-lg w-11/12 max-w-md border-[#16AB76] border-1 p-6 relative mx-auto mt-20 mb-4">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 text-xl">&times;</button>
                <h2 className="text-2xl text-[#126260] font-bold mb-4 text-center">{title}</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    {children}
                </form>
            </div>
        </div>
    );
};
