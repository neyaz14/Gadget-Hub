import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import ErrorPage from '../ErrorPage/ErrorPage';
const Route = () => {

    const location = useLocation();
    // setlocation(location);
    console.log(location.pathname);
    return (
        <HelmetProvider>
            <div className='w-11/12 mx-auto'>

                <Navbar location={location}></Navbar>
               
                    <Outlet location={location}>

                    </Outlet>
                    <Footer ></Footer>
                    {/* <ErrorPage></ErrorPage> */}
               

            </div>
        </HelmetProvider>
    );
};

export default Route;