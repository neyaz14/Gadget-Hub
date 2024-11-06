import React from 'react';
import { Helmet } from 'react-helmet-async';
const Cart = ({ gadget }) => {
    const { gadgetId: gId, producttitle, productimage, category, price, description, Specification, availability, rating } = gadget;
    return (
        <section>
            <Helmet>
                <title>Dashboard/Cart</title>
            </Helmet>
            
            <div>
                <div className='bg-white border flex items-center gap-20 my-5'>
                    <figure>
                        <img className='w-40' src={productimage} alt="" />
                    </figure>
                    <div>
                        <h1 className='text-3xl font-bold'>{producttitle}</h1>
                        <p className='font-semibold text-gray-600'>Price : {price}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;