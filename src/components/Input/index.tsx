import React from "react";

interface Props {
    labelTitle?: string;
    inputType: string;
    htmlForInput: string;
    placeholder?: string
    required: true | false
    onChange: (value: string) => void;
    value: string;
}
export const Input = ({ labelTitle, htmlForInput, inputType, placeholder, onChange, required, value }: Props) => {

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return <React.Fragment>
        {labelTitle && <label htmlFor={htmlForInput} className="block mb-2 text-sm font-medium text-gray-900">{labelTitle}</label>}
        <input
            type={inputType ?? "text"}
            id={htmlForInput}
            className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:bg-white focus:border-primary-500 block w-full p-2.5 focus:outline-none"
            placeholder={placeholder}
            required={required}
            onChange={handleOnChange}
            value={value} />
    </React.Fragment>
}