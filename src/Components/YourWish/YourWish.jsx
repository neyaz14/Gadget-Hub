import React from 'react';
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
const YourWish = () => {
    const handleSubmit = e => {
        e.preventDefault();
        // const inputf = e.target.name.value;
         e.target.name.value = '';
         e.target.suggestion.value = '';
        toast('Form submitted , we will try to solve your problem very soon')
    }
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
            <div className='bg-purple-500 mt-10 p-10 flex flex-col items-center justify-start'>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-center items-center'>
                        <p className='m-4 text-white font-bold text-2xl '>Name</p>
                        <input className='w-96 h-11 ' type="text" name='name'/>
                    </div>
                    <br />
                    <br />
                    <div className='flex justify-center items-center'>
                        <p className='m-4 text-white font-bold text-2xl '>Suggestion</p>
                        <input className='w-96 h-11 ' type="text" name='suggestion'/>
                    </div>
                    <br />
                    <br />

                    <input className='btn' type="submit" value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default YourWish;