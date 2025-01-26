export const Input = ({ placeholder, borderColor="#314D4D", type = "text", ...props }) => {
//Input para logearse

return(
    <input
    type={type}
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 
    focus:outline-none focus:ring-1 focus:ring-green-700"
    style={{ borderColor: borderColor, borderWidth: "1px" }}
    placeholder={placeholder}
    {...props}
    />
);

}

