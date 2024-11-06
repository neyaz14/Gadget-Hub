import React, { useState } from 'react';
// import { Helmet } from 'react-helmet-async';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { addToStoredCart, getStoredToCART } from '../../Utility/addToDB'
const Navbar = ({location}) => {
   
    const cartList = getStoredToCART();
    

    const navigateDASH = useNavigate();
    const handleNavigateOFDASH = ()=>{
      navigateDASH(`${location.pathname}`);
    }
    const Links = <>
        <li className={`${location.pathname==='/'? "text-white font-semibold":"text-black font-semibold"}`}><NavLink to={'/'}>Home</NavLink></li>
        <li className={`${location.pathname==='/'? "text-white font-semibold":"text-black font-semibold"}`}><NavLink to={'satistics'}>Statistics</NavLink></li>

        <li className={`${location.pathname==='/'? "text-white font-semibold":"text-black font-semibold"}`}><NavLink to={'dashboard'} onClick={handleNavigateOFDASH}>Dashboard</NavLink></li>

        <li className={`${location.pathname==='/'? "text-white font-semibold":"text-black font-semibold"}`}><NavLink to={'yourwish'}>Your Wish</NavLink></li>
    </>


    return (
        <div className={`${location.pathname==='/'? "navbar bg-purple-500 rounded-t-xl w-full mt-2": "navbar"}`}>
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold"> Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 ">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn mr-3 bg-purple-400 text-white font-bold "><NavLink to={'dashboard'}>Cart</NavLink></a>
                <a className="btn ml-3 text-white font-bold bg-purple-400">WishList</a>
            </div>
        </div>
    );
};

export default Navbar;