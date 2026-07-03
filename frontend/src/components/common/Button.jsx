const Button = ({
    children,
    type = "button",
    onClick,
    className = "",
    disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:bg-gray-400 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;