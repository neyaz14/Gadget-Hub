import React from 'react';
import { Helmet } from "react-helmet-async";
import {  useLoaderData, useParams } from 'react-router-dom';
import {addToStoredCart} from '../../Utility/addToDB'
const Details = () => {
    const { gadgetId } = useParams();
    const id = parseInt(gadgetId);
    // console.log(id);
    const data = useLoaderData();
    // console.log(data)
    const gadget = data.find(gadget => gadget.gadgetId === id);

   
    // console.log(gadget)
    const { gadgetId: gId,  producttitle, productimage, category, price, description, Specification, availability, rating } = gadget;
    console.log(Specification)
    const handleAddtoCART = (id) =>{
        addToStoredCart(id);
    }
    return (
        <div className='border border-white p-5 m-5'>
            <Helmet>
                <title>Gadget/Details</title>
            </Helmet>
            <div className='bg-purple-600 text-center py-40'>
                <h1 className='text-white text-3xl font-bold'>Product Details</h1>
                <p className='text-white font-semibold w-9/12 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className='mt-6 py-6 md:flex gap-7 bg-white'>
                <figure>
                    <img className='w-[80%] h-full' src={productimage} alt="" />
                </figure>
                <div className='w-[70%]'>
                    <h1 className='text-4xl'>{producttitle}</h1>
                    <p>{availability ? 
                        <button className='btn btn-sm
                        btn-success my-5'>In Stock</button> :
                        <button className='btn btn-sm btn-warning'>Out of Stock</button>
                
                        }</p>
                    <p>Price: {price}</p>
                    <hr />
                    <p>{description}</p>
                    
                    
                    <p>
                       <span className='font-bold'> Specifications :</span>
                        {Specification}
                    </p>
                    <p>Rating : {rating}</p>
                    <div className='mt-16'>
                        <button onClick={() => handleAddtoCART(gId)} className=' btn btn-outline mr-6'>Add to Cart</button>
                        <button className='btn btn-primary'>Wishlist</button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Details;