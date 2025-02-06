import { FaExclamationTriangle } from "react-icons/fa"
export const ErrorScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-red-600 text-white p-10 rounded-lg text-center">
        <FaExclamationTriangle className="text-6xl mb-4"/>
        <h1 className="text-4xl hover:text-red-300">Ooops!! Parece que esta página no existe!</h1>
        </div>
    </div>
  )
}
