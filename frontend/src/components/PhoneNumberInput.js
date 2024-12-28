const PhoneNumberInput = ({
    label,
    placeholder = "Enter your phone number",
    className,
    value,
    setValue,
    labelClassName,
}) => {
    return (
        <div
            className={`phoneNumberInputDiv flex flex-col text-black space-y-2 w-full ${className}`}
        >
            <label htmlFor={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <input
                type="tel"
                placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                id={label}
                value={value}
                // onChange={(e) => {
                //     const phoneNumber = e.target.value.replace(/[^0-9]/g, ""); // Keep only numeric characters
                //     setValue(phoneNumber);
                // }}
                pattern="[0-9]{10}" // Accepts 10 numeric digits
                maxLength="10" // Limits input to 10 characters
                title="Please enter a 10-digit phone number"
            />
        </div>
    );
};

export default PhoneNumberInput;
