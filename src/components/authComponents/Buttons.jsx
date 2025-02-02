export const Button = ({ text, bgColor = "#314D4D", ...props }) => {
  return (
    <button
      className="w-full py-2 rounded-md shadow-lg text-white font-semibold text-sm cursor-pointer transition-transform duration-200 hover:scale-102"
      style={{ backgroundColor: bgColor, borderColor: "#314D4D" }}
      {...props}
    >
      {text}
    </button>
  );
};