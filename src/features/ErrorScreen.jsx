import { FaExclamationTriangle } from "react-icons/fa"
export const ErrorScreen = () => {
  return (
    <div className="bg-[#f8f9fa] fixed inset-0 flex items-center justify-center">
    <div className="bg-white shadow-lg drop-shadow-lg text-[#7C7C7C] p-10 md:p-16 rounded-lg text-right">
      <div className="flex justify-center">
        <FaExclamationTriangle className="text-9xl text-[#FFA500] mb-4" />
      </div>
      <h1 className="text-5xl font-bold hover:text-[#25C8C4]">
        Ooops!! Parece que esta página no existe!
      </h1>
    </div>
  </div>
  )
}
