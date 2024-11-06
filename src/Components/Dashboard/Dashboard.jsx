import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredToCART } from '../../Utility/addToDB'
import { Helmet } from 'react-helmet-async';
// import Gadget from '../Gadget/Gadget';
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist';


const Dashboard = () => {

    const [visibleItem, setVisibleItem] = useState(1);


    // const [sort, setsort] = useState();
   

    const [Cgadget, setCgadget] = useState([]);
    const allgadgets = useLoaderData();
    useEffect(() => {
        const storeCart = getStoredToCART();
        const storeCartInt = storeCart.map(id => parseInt(id));
        const addedCartList = allgadgets.filter(gadget => storeCartInt.includes(gadget.gadgetId));

        console.log(storeCart)
       
        console.log(addedCartList.length)
        setCgadget(addedCartList)


    }, [])
    const totalPrice = (price) => {
         price = 0;
        const priceList = Cgadget.map(product => product.price);

        for (let i = 0; i < priceList.length; i++) {
            price = priceList[i] + price;

        }
        return (price)

    }

    // for onclik handler to show and hide one section 
    const showCart = () => setVisibleItem(1);
    const showWishlist = () => setVisibleItem(2);


    // for sorting by price
    const handleSorting = () => {
        const sortedGadgetList = [...Cgadget].sort((a, b) => b.price - a.price);
        setCgadget(sortedGadgetList);
    }
    const navigate = useNavigate();
    const handleNavigate =() =>{
        totalPrice(0)
       let storeCart= localStorage.removeItem('gadget-list');
        setCgadget([]);
        navigate(`${'/'}`);
        // document.getElementById('cart').innerHTML = `<div></div>`;
    }

    return (
        <div>
             <Helmet>
                <title>Dashboard/cart</title>
            </Helmet>
            <div className='bg-purple-600 text-center py-40'>
                <h1 className='text-white text-4xl font-bold'>Dashboard</h1>
                <p className='text-white font-semibold w-9/12 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div>
                    <div className='flex gap-20 justify-center items-center text-center
                    mt-6'>


                        <button
                            onClick={showCart}
                            className='btn btn-primary'>
                            Cart
                        </button>
                        <button
                            onClick={showWishlist}
                            className='btn border'>WishList</button>
                    </div>



                </div>
            </div>






{/* Cgadget.length */}
            {visibleItem === 1 ?
                <div>
                    <div id='cart' className='flex justify-between items-center my-8'>
                        <p className='text-3xl font-bold text-purple-500 '>Cart</p>

                        <div className='flex items-center gap-10'>
                            <p>Price :{
                                totalPrice()
                            } </p>
                            <button
                                onClick={handleSorting}
                                className='btn btn-outline text-purple-700'>Sort by Price</button>
                            {/* <button className='btn btn-outline text-purple-700'>Purchase</button> */}

                            {/* {...Cgadget.length ==0 ? `${className='btn btn-disabled'}` : `${className='btn btn-outline'}`}   */}
                            <button className='btn btn-outline text-purple-700'
                            onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                                    <p className="py-4">Thanks for purchasing.</p>
                                    <p>Total Price : {totalPrice()} BDT</p>
                                    <div className="modal-action">
                                        <form method="dialog">

                                            <button onClick={handleNavigate} className="btn">Close</button>
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
                :
                <div>
                    <p className='text-3xl font-bold text-purple-500 '>WishList</p>
                    {
                        Cgadget.map(gadget => <Wishlist key={gadget.gadgetId} gadget={gadget}></Wishlist>)
                    }
                </div>
            }










            {/* for cart */}


            {/* for wishlist */}


        </div>
    );
};

export default Dashboard;
