import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredToCART } from '../../Utility/addToDB'

// import Gadget from '../Gadget/Gadget';
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist';


const Dashboard = () => {


    const [sort, setsort] = useState();
    const [showFirstItem, setShowFirstItem] = useState(true);
    const [Cgadget, setCgadget] = useState([]);
    const allgadgets = useLoaderData();
    useEffect(() => {
        const storeCart = getStoredToCART();
        const storeCartInt = storeCart.map(id => parseInt(id));
        const addedCartList = allgadgets.filter(gadget => storeCartInt.includes(gadget.gadgetId));

        setCgadget(addedCartList)


    }, [])
    const totalPrice = () => {
        let price = 0;
        const priceList = Cgadget.map(product => product.price);

        for (let i = 0; i < priceList.length; i++) {
            price = priceList[i] + price;

        }
        return (price)

    }

    // for onclik handler to show and hide one section 
    const handleShowCart = () => {
        alert('cart')
    }
    const handleShowWishlist = () => {
        alert('WishList')
    }
    const toggleItems = () => {
        setShowFirstItem(!showFirstItem); 
      };




    // for sorting by price
    const handleSorting = () => {
        const sortedGadgetList = [...Cgadget].sort((a, b) => b.price - a.price);
        setCgadget(sortedGadgetList);
    }

    return (
        <div>
            <div className='bg-purple-600 text-center py-40'>
                <h1 className='text-white text-4xl font-bold'>Dashboard</h1>
                <p className='text-white font-semibold w-9/12 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div>
                    <div className='flex gap-20 justify-center items-center text-center
                    mt-6'>


                        <button onClick={handleShowCart} className='btn btn-primary'>
                            Cart
                        </button>
                        <button onClick={handleShowWishlist} className='btn border'>WishList</button>
                    </div>



                </div>
            </div>


            {/* for cart */}
            <div>
                <div className='flex justify-between items-center my-8'>
                    <p className='text-3xl font-bold text-purple-500 '>Cart</p>

                    <div className='flex items-center gap-10'>
                        <p>Price :{
                            totalPrice()
                        } </p>
                        <button
                            onClick={handleSorting}
                            className='btn btn-outline text-purple-700'>Sort by Price</button>
                        {/* <button className='btn btn-outline text-purple-700'>Purchase</button> */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Payment Successfully</h3>
                                <p className="py-4">Thanks for purchasing.</p>
                                <p>Total Price : {totalPrice()} BDT</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                       
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
                {
                    Cgadget.map(gadget => <Cart key={gadget.gadgetId} gadget={gadget}></Cart>)
                }
            </div>

            {/* for wishlist */}
            <div>
                <p className='text-3xl font-bold text-purple-500 '>WishList</p>
                {
                    Cgadget.map(gadget => <Wishlist key={gadget.gadgetId} gadget={gadget}></Wishlist>)
                }
            </div>

        </div>
    );
};

export default Dashboard;