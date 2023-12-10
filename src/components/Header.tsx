import React from 'react';
import MessageSvg from "../assets/svg/MessageSvg";
import {useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const pathHome = location.pathname === '/'
    return (
        <div className='flex items-center justify-end w-full h-20 gap-3 pr-5'>
            {pathHome &&
                <div className='flex items-center justify-center w-16 h-16 rounded border border-blackGray'>
                    <MessageSvg/>
                </div>
            }
            <div className='flex items-center gap-4 pl-5 pr-5 bg-white h-16 w-[250px] rounded shadow-md'>
                <div className='flex items-center rounded-full w-11 h-11 border border-blackGray'>
                    <img className='rounded-full' src={(require('../assets/png/avatar.png'))} alt=""/>
                </div>
                <div>
                    <h3 className='text-blackGray font-medium text-sm'>Максим Добжанский</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;