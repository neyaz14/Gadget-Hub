import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
        <div className='mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-5'>Explore Cutting-Edge Gadgets</h1>

            <div className='flex items-start gap-4 mx-auto'>
                

                <div className='bg-white flex flex-col items-stretch justify-stretch border mx-auto p-4 rounded-xl'>
                    <button className='btn m-2'>All Products</button>
                    <button className='btn m-2'>Laptops</button>
                    <button className='btn m-2'>Phones</button>
                    <button className='btn m-2'>HeadPhones</button>
                    <button className='btn m-2'>Smart Watches</button>
                    <button className='btn m-2'>MacBook</button>
                    <button className='btn m-2'>Iphone</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                    {gadgets?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;