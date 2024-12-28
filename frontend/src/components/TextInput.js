const TextInput = ({
    label,
    placeholder,
    className,
    value,
    setValue,
    labelClassName,
}) => {
    return (
        <div
            className={`textInputDiv flex flex-col text-black space-y-2 w-full ${className}`}
        >
            <label htmlfor={label} className={`font-semibold text-black ${labelClassName}`}>
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                id={label}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

export default TextInput;