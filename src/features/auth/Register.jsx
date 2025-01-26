import { Input } from "../../components/authComponents/LoginInput";
import { Button } from "../../components/authComponents/Buttons";


export const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white h-screen overflow-hidden relative px-4">
            
            {/* Contenedor del Círculo verde con el logo */}
            <div className="flex justify-center items-center mt-[-50px] sm:mt-[-80px] md:mt-[-100px]">
                <div
                    className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-b from-green-400 to-green-600 rounded-full
                    flex items-center justify-center">
            {/* Aqui tengo que poner la imagen de perfil default*/}   
                    <h1 className="text-xl font-bold text-white">SITAG</h1>
                </div>
            </div>

            {/* Contenedor del formulario de Inputs y Botones */}
            <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 w-full max-w-xs sm:max-w-md">
                <form className="flex flex-col gap-4 w-full">
                    <Input placeholder="Nombre de usuario" borderColor="#314D4D" />
                    <Input placeholder="Apellidos" borderColor="#314D4D" />
                    <Input type="password" placeholder="Contraseña" borderColor="#314D4D" />
                    <Input type="password" placeholder="Confirmar contraseña" borderColor="#314D4D" />
                    <Input 
                        type="tel" placeholder="Teléfono" borderColor="#314D4D" 
                        pattern="^[\+0-9\s\(\)\-\/]*$" 
                        title="Solo números y los caracteres +, ( , ), / , - son permitidos"/>
                    <Input type="email" placeholder="Correo" borderColor="#314D4D" />

                    {/* Botones */}
                    <div className="flex gap-4 w-full justify-center sm:justify-between">
                        <Button text="Registrar" bgColor="#6BBF59" />
                        <Button text="Cancelar" bgColor="#314D4D" />
                    </div>
                </form>
            </div>
        </div>
    );
}