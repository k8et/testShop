import React, {FC, CSSProperties} from 'react';
import {ButtonProps} from "../intarface/ButtonProps";


const Button: FC<ButtonProps> = (props) => {
    const {
        onClick, children, width,
        color, style
    } = props
    const buttonStyle: CSSProperties = {
        width: width || 'auto',
        backgroundColor: color || '#55C97B',
        ...style,
    };

    return (
        <button
            className='flex gap-2 items-center p-2 pl-4 pr-4 text-white rounded'
            style={buttonStyle}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
