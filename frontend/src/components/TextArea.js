const TextArea = ({
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
            <label htmlFor={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <textarea
                placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500 resize-none h-auto"
                id={label}
                 value={value}
                 onChange={(e) => {
                setValue(e.target.value);
                 }}
                rows={5} // Default row count
                style={{ minHeight: '120px' }} // Minimum height to ensure proper rendering
            />
        </div>
    );
};

export default TextArea;
