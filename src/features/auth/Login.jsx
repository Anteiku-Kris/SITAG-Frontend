import { Input } from "../../components/authComponents/LoginInput";
import { Button } from "../../components/authComponents/Buttons";
export const Login = () => {

    
return (
    <div className="flex flex-col items-center justify-center bg-white h-screen overflow-hidden relative">
            {/* Círculo verde con el logo */}
            <div className="text-center mt-0.1">
                <div
                className="w-155 h-155 bg-gradient-to-b from-green-400 to-green-600 rounded-full
                flex items-center justify-center mx-auto"
                style={{ marginTop: "-500px" }}>
                    
                {/* Aquí va el contenido del círculo (Tengo que colocarle el logo) */}
                <h1 className="text-xl font-bold text-white mt-80">SITAG</h1>
            </div>
        </div>

      {/* Texto de bienvenida */}
        <h2
            className="text-lg font-semibold text-center mt-12 mb-6"
            style={{ color: '#314D4D' }}>
            Bienvenido, Buen Día!
        </h2>

      {/* Inputs del formulario del login */}
        <form className="flex flex-col gap-4 w-full max-w-xs">
            <Input placeholder="Usuario" borderColor="#314D4D" />
            <Input type="password" placeholder="Contraseña" borderColor="#314D4D" />
            <Button text="Iniciar sesión" bgColor="#314D4D" />
        </form>

      {/* Texto de registro */}
        <p className="text-sm text-gray-600 text-center mt-6">
            No tienes cuenta,{' '}
            <span className="text-green-600 font-semibold cursor-pointer">
            crea una!
            </span>
        </p>
    </div>
    );
}