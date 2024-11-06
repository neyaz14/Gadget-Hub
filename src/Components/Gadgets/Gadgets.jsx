import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import { NavLink } from 'react-router-dom';
const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    const [visibleItem, setVisibleItem] = useState(1);

    const android = [1,2];
    const androidList = gadgets.filter(gadget => android.includes(gadget.gadgetId));
    
    const Windows = [3,4];
    const WindowsList = gadgets.filter(gadget => Windows.includes(gadget.gadgetId));

    const MacBook = [5,6];
    const MacBookList = gadgets.filter(gadget => MacBook.includes(gadget.gadgetId));

    const Headphones = [7,8];
    const HeadphonesList = gadgets.filter(gadget => Headphones.includes(gadget.gadgetId));

    const IPhone = [9,10];
    const IphoneList = gadgets.filter(gadget => IPhone.includes(gadget.gadgetId));

    const SmartWatch = [];
    const SmartWatchList = gadgets.filter(gadget => SmartWatch.includes(gadget.gadgetId));

    return (

        <div className='mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-5'>Explore Cutting-Edge Gadgets</h1>

            <div className='flex items-start gap-4 mx-auto'>


                <div className='bg-white flex flex-col items-stretch justify-stretch border mx-auto p-4 rounded-xl'>
                    <button onClick={() => setVisibleItem(1)} className='btn m-2'>
                        All Products
                    </button>

                    <button onClick={() => setVisibleItem(2)} className='btn m-2'>Android</button>

                    <button onClick={() => setVisibleItem(3)} className='btn m-2'>Laptops</button>

                    <button onClick={() => setVisibleItem(4)} className='btn m-2'>MacBook</button>

                    <button onClick={() => setVisibleItem(5)} className='btn m-2'>HeadPhones</button>

                    <button onClick={() => setVisibleItem(6)} className='btn m-2'>Iphone</button>

                    <button onClick={() => setVisibleItem(7)} className='btn m-2'>Smart Watches</button>
                </div>

                <div className='mx-auto'>



                {/* all products */}
                    {visibleItem === 1 && 
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                            {gadgets?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                        </div>
                    }

                    {visibleItem === 2 && 
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                            {androidList?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                        </div>
                    }
                    {visibleItem === 4 && 
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                            {MacBookList?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                        </div>
                    }
                    {visibleItem === 3 && 
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                            {WindowsList?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                        </div>
                    }
                    {visibleItem === 5 && 
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                            {HeadphonesList?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                        </div>
                    }
                    {visibleItem === 6 && 
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                            {IphoneList?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                        </div>
                    }
                    {visibleItem === 7 && 
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                            {SmartWatchList?.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)}
                            <p className='text-4xl font-bold text-purple-600 mt-4'>No data to Show</p>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Gadgets;