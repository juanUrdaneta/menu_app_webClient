import React from "react";

interface Props {
    children: React.ReactNode;
}

const Title: React.FC<Props> = (props) => {
    return <h1 className="text-8xl font-semiBold my-7 ">{props.children}</h1>;
};

export default Title;
