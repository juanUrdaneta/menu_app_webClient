import React from "react";

interface Props {
    label: string;
    boxLayout?: string;
}

const Button: React.FC<Props> = (props) => {
    return (
        <div className={props.boxLayout}>
            <div
                className={`bg-gray-500 h-auto w-auto py-1 px-2 rounded-2xl 
            hover:bg-gray-800 active:scale-95 hover:ease-in 
            transition duration-150`}
            >
                <a className="text-md select-none text-white ">{props.label}</a>
            </div>
        </div>
    );
};

export default Button;
