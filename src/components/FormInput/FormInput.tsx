import React from "react";

type InputTypes = "text" | "password" | "email";

interface Props {
    label: string;
    placeholder?: string;
    type?: InputTypes;
    boxLayout?: string;
}

const FormInput: React.FC<Props> = ({
    label,
    placeholder,
    type = "text",
    boxLayout,
}: Props) => {
    return (
        <div className={boxLayout}>
            <p className="text-md text-slate-300">{label}</p>
            <input
                type={type}
                placeholder={placeholder}
                className="text-xl p-1 border rounded-md border-slate-300 text-gray-800"
            />
        </div>
    );
};

export default FormInput;
