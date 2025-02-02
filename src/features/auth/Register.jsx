import { Input } from "../../components/authComponents/LoginInput";
import { Button } from "../../components/authComponents/Buttons";


export const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#F6F6F6] h-screen overflow-hidden relative px-4">
            <div className="flex justify-center items-center mt-[-50px] sm:mt-[-80px] md:mt-[-100px]">
                <div
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center" style={{
                        background: "linear-gradient(to right, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
                        }} >
                        
                    <img
                      src="/src/assets/images/UserFrame.png"
                      alt="Logo"
                      className="w-3/4 h-3/4 object-contain"  
                    />
                </div>
            </div>
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
                    <Input type="email" placeholder="Correo"/>
                    <div className="flex gap-4 w-full justify-center sm:justify-between">
                        <Button text="Registrar" bgColor="#6BBF59" style={{
                                background: "linear-gradient(to bottom, #0B6E4F 15%, #6BBF59 90%, #6BBF59 120%)"
                                }} />
                        <Button text="Cancelar" bgColor="#314D4D" />
                    </div>
                </form>
            </div>
        </div>
    );
}