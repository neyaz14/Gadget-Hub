import React from 'react';
import { Link } from 'react-router-dom';
const Gadget = ({gadget}) => {
    const {gadgetId,producttitle,productimage,category, price,description, Specification,availability, rating} = gadget;
    return (
        <div className='border'>
            <figure>
                <img className='bg-white w-full' src={productimage} alt="" />
            </figure> 
            <div className='p-5'>
                <h1 className='text-2xl font-bold'>{producttitle}</h1>
                <p className='text-gray-600 font-semibold mt-3'>Price : {price }</p>

                <Link to={`/gadgets/${gadgetId}`}><button className='btn btn-outline text-purple-600 rounded-3xl mt-5'>Details</button></Link>

            </div>
        </div>
    );
};

export default Gadget;