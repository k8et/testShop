import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Logo from "../assets/svg/Logo";
import HomeSvg from "../assets/svg/HomeSvg";
import CartSvg from "../assets/svg/СartSvg";

const SideBar = () => {
    const location = useLocation();
    const pathHome = location.pathname === '/'
    const pathShop = location.pathname === '/shop'
    return (
        <div className='w-1/6 h-screen pr-3'>
            <div className='pt-5 pl-8'>
                <Logo/>
            </div>
            <div className='flex flex-col  gap-5 pt-10'>
                <Link to='/' className='flex items-center gap-6'>
                    {pathHome ?
                        <span
                            className='border-l-4 h-12 border-purpleCustom flex items-center gap-2'
                            style={{boxShadow: '0px 2px 10px 0px rgba(102, 102, 204, 0.67)'}}
                        /> :
                        <span
                            className='border-l-4 opacity-0 h-12 border-purpleCustom flex items-center gap-2'
                        />
                    }
                    <HomeSvg color={pathHome ? '#6666CC' : '#7D7D7D'}/>
                    <h3 className={`text-base font-medium ${pathHome ? 'text-red' : 'text-blackGray'}`}>Главная</h3>
                </Link>
                <Link to='/shop' className={`flex items-center gap-6`}>
                    {pathShop ?
                        <span
                            className='border-l-4 h-12 border-purpleCustom flex items-center gap-2'
                            style={{boxShadow: '0px 2px 10px 0px rgba(102, 102, 204, 0.67)'}}
                        /> :
                        <span
                            className='border-l-4 opacity-0 h-12 border-purpleCustom flex items-center gap-2'
                        />
                    }
                    <CartSvg color={pathShop ? '#6666CC' : '#7D7D7D'}/>
                    <h3 className={`text-base font-medium ${pathShop ? 'text-red' : 'text-blackGray'}`}>Мой магазин</h3>

                </Link>
            </div>
        </div>
    );
};

export default SideBar;
