import {CSSProperties, ReactElement} from "react";

export interface ButtonProps {
    onClick: () => void;
    children: ReactElement;
    width?: string;
    color?: string;
    style?: CSSProperties;
}