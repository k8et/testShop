import React from "react";

interface HomeSvgProps{
    color: string
}
function HomeSvg (props:HomeSvgProps) {
    const {color} = props
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            fill="none"
            viewBox="0 0 21 19"
        >
            <g clipPath="url(#clip0_11_50)">
                <path
                    stroke={color}
                    strokeMiterlimit="10"
                    strokeWidth="1.2"
                    d="M16.992 17.99a.64.64 0 00.64-.64v-6.915h1.699c.622 0 1.127-.504 1.127-1.127 0-.353-.168-.673-.42-.875-5.082-4.408-4.644-4.02-8.85-7.671a1.103 1.103 0 00-1.464 0L.841 8.467a1.123 1.123 0 00-.32 1.245c.169.437.59.723 1.06.723h1.7v6.915c0 .353.286.64.656.64h3.819v-5.031c0-.707.572-1.295 1.278-1.295h2.827c.707 0 1.295.572 1.295 1.295v5.03h3.836z"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_11_50">
                    <path fill="#fff" d="M0 0H20.946V18.465H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default HomeSvg;