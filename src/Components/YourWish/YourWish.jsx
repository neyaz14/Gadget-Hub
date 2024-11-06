import React from 'react';
import { Helmet } from "react-helmet-async";
const YourWish = () => {
    return (
        <div>
            <Helmet>
                <title>YourWish</title>
            </Helmet>
            <div className='bg-purple-600 text-center py-40'>
                <h1 className='text-white text-4xl font-bold'>
                    Suggest Us your favourite Info
                </h1>
                <p className='text-white font-semibold w-9/12 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div>
                <form >

                </form>
            </div>
        </div>
    );
};

export default YourWish;