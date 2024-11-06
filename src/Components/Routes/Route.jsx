import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

import { HelmetProvider } from "react-helmet-async";
const Route = () => {
    return (
        <HelmetProvider>
            <div className='w-11/12 mx-auto'>

                <Navbar></Navbar>
                <Outlet>

                </Outlet>
                <Footer></Footer>

            </div>
         </HelmetProvider>
    );
};

export default Route;