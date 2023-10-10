import React from "react";

interface Props {
    labelTitle?: string;
    inputType: string;
    htmlForInput: string;
    placeholder?: string
    required?: boolean
}
export const Input = ({ labelTitle, htmlForInput, inputType, placeholder }: Props) => {

    return <React.Fragment>
        {labelTitle && <label htmlFor={htmlForInput} className="block mb-2 text-sm font-medium text-gray-900">{labelTitle}</label>}
        <input type={inputType ?? "text"} id={htmlForInput} className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:bg-white focus:border-primary-500 block w-full p-2.5 focus:outline-none" placeholder={placeholder} required />
    </React.Fragment>
}