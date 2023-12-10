import React from 'react';
import { Routes, Route} from 'react-router-dom';
import SideBar from '../components/SideBar';
import Home from "../screens/Home";
import Shop from "../screens/Shop";
import Header from "../components/Header";

const Navigation = () => {
    return (
        <div className='flex'>
            <SideBar/>
            <div className='w-screen h-screen bg-blueCustom'>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Navigation;
