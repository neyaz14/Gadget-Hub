import React from 'react';
import { NavLink } from 'react-router-dom';
import {addToStoredCart,getStoredToCART} from '../../Utility/addToDB'
const Navbar = () => {
    const cartList = getStoredToCART();
    // console.log(cartList)

    const Links =<>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'satistics'}>Statistics</NavLink></li>
        <li><NavLink to={'dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'yourwish'}>Your Wish</NavLink></li>
    </>

    return (
        <div className="navbar  mt-4">
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
                <a className="btn btn-ghost text-xl"> Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 ">
                {Links}
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn mr-3 text-white font-bold bg-purple-600">Cart <span></span></a>
                <a className="btn ml-3 text-white font-bold bg-purple-400">WishList</a>
            </div>
        </div>
    );
};

export default Navbar;