export const Button = ({ text, bgColor = "#314D4D", ...props }) => {
    return (
      <button
        className="w-full py-2 rounded-md text-white font-semibold text-sm"
        style={{ backgroundColor: bgColor, borderColor: "#314D4D" }}
        {...props}
      >
        {text}
      </button>
    );
  };