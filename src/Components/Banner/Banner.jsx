import React from 'react';
import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='relative mb-80 pb-80'>
            <div >
                <div className=' mx-auto  flex flex-col justify-center items-center p-40 pb-60 text-center bg-purple-500'>
                    <h1 className='text-5xl font-bold text-white my-4'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='text-white my-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='btn bg-white text-purple-700'>Shop Now</button>
                </div>
                {/* image */}
                <div className='absolute top-[450px]'> 
                    <figure className='  '>
                        <img className='border w-8/12 mx-auto' src={bannerImg} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;