import React from 'react';

const FeatureCard = ({ href, imgSrc, title, description }) => {
    return (
        <div className='px-5 md:px-12 lg:px-16 xl:px-20 py-2'>
            <a href={href} className='block text-center md:text-left'>
                <img className='bg-[#FF7A50] hover:bg-orange-700 px-3 py-2 rounded-lg mx-auto transition duration-300 md:mx-0' src={imgSrc} alt={title} />
                <h3 className='font-bold text-text py-4'>{title}</h3>
                <p className='text-gray-400 text-base'>
                    {description}
                </p>
            </a>
        </div>
    );
};

export default FeatureCard;
