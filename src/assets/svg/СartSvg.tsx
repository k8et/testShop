import React from "react";
interface CartSvgProps{
    color: string
}
function CartSvg(props:CartSvgProps) {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            fill="none"
            viewBox="0 0 21 19"
        >
            <g clipPath="url(#clip0_11_57)">
                <path
                    stroke={color}
                    strokeMiterlimit="22.926"
                    strokeWidth="1.2"
                    d="M5.9 12.201l-2.37 1.647v1.63h16.437M.22.403l2.69 1.48.486 1.697L5.884 12.2h12.352c.79 0 3.059-6.705 1.966-6.823L3.7 3.58"
                ></path>
                <path
                    fill="#66C"
                    fillRule="evenodd"
                    d="M7.161 15.36c.857 0 1.546.706 1.546 1.58 0 .874-.689 1.58-1.546 1.58-.857 0-1.546-.706-1.546-1.58 0-.874.689-1.58 1.546-1.58zM15.665 15.344c.857 0 1.546.706 1.546 1.58 0 .873-.69 1.58-1.546 1.58-.857 0-1.546-.707-1.546-1.58 0-.874.689-1.58 1.546-1.58z"
                    clipRule="evenodd"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_11_57">
                    <path fill="#fff" d="M0 0H20.977V18.52H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default CartSvg;