import React from 'react';

const Wishlist = ({ gadget }) => {
    const { gadgetId: gId, producttitle, productimage, category, price, description, Specification, availability, rating } = gadget;
    return (

        <div>
            <div>
                
            </div>
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
    );
};

export default Wishlist;