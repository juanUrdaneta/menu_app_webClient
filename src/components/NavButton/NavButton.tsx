import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

interface Props {
    label: string;
    navTo: string;
}

const NavButton: React.FC<Props> = (props) => {
    return (
        <Link href={props.navTo}>
            <a>
                <Button label={props.label} />
            </a>
        </Link>
    );
};

export default NavButton;
