export const Input = ({ placeholder, borderColor="#314D4D", type = "text", ...props }) => {

return(
    <input
    type={type}
    className="w-full bg-white shadow-lg rounded-md border px-3 py-2 text-[#126260] placeholder-[#126260] 
    focus:outline-none focus:ring-1 focus:ring-[#314D4D]"
    style={{ borderColor: borderColor, borderWidth: "1px" }}
    placeholder={placeholder}
    {...props}
    />
);

}

