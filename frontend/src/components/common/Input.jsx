const Input = ({
    type = "text",
    placeholder,
    value,
    onChange,
    name
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
        />
    );
};

export default Input;