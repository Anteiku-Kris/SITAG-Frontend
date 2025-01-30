export const Input = ({ placeholder, borderColor="#314D4D", type = "text", ...props }) => {
//Input para logearse

return(
    <input
    type={type}
    className="w-full rounded-md border px-3 py-2 text-[#126260] placeholder-[#126260] 
    focus:outline-none focus:ring-1 focus:ring-[#314D4D]"
    style={{ borderColor: borderColor, borderWidth: "1px" }}
    placeholder={placeholder}
    {...props}
    />
);

}

