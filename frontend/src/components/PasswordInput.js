const TextInput = ({label, placeholder, value, setValue}) => {
    return (
        <div className="textInputDiv text-black flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold text-white">
                {label}
            </label>
            <input
                type="password"
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