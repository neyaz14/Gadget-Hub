import React from 'react';

const Footer = () => {
    return (
        <footer className="  p-10 mt-44   mx-auto border">
            <div>
                <div className='flex flex-col items-center my-4'>
                    <h1 className='text-2xl font-bold'>Gadget Heaven</h1>
                    <p>Leading the way in cutting-edge technology and innovation.</p>
                </div>

                <hr />

                <div className='flex justify-between mt-5'>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;