import { Input } from "../../components/authComponents/LoginInput";
import { Button } from "../../components/authComponents/Buttons";

export const Login = () => {

    
return (
  <div className="flex flex-col items-center justify-center bg-[#F6F6F6] h-screen">
  <div className="text-center mt-0.1">
    <div
      className="w-155 h-155 bg-gradient-to-b from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto"
      style={{
        background: "radial-gradient(circle, #6BBF59 5%, #0B6E4F 100%)",
        marginTop: "-500px",
      }}
    >
      <img
        src="/src/assets/images/Logo Sitag.png" 
        alt="Logo"
        className="w-3/8 h-2/5 object-contain mt-60 justify-center"
      />
    </div>
  </div>
        <h2
            className="text-lg font-semibold text-center mt-12 mb-6"
            style={{ color: '#314D4D' }}>
            Bienvenido, Buen Día!
        </h2>
        <form className="flex flex-col gap-4 w-full max-w-xs">
            <Input placeholder="Usuario" borderColor="#314D4D" />
            <Input type="password" placeholder="Contraseña"  borderColor="#314D4D"/>
            <Button text="Iniciar sesión" bgColor="#314D4D" />
        </form>
        <p className="text-sm text-gray-600 text-center mt-6">
            No tienes cuenta,{' '}
            <span className="text-green-600 font-semibold cursor-pointer">
            crea una!
            </span>
        </p>
        <div className="fixed bottom-0 left-0 w-full flex justify-between items-end pointer-events-none">
  <img 
    src="/src/assets/images/hierva.png" 
    alt="Left decoration"
    className="w-24 sm:w-32 md:w-40 lg:w-48"
  />
  <img 
    src="/src/assets/images/hierva 2.png" 
    alt="Right decoration"
    className="w-24 sm:w-32 md:w-40 lg:w-48"
  />
</div>
    </div>
    );
}