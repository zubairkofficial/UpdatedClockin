import React from 'react'

const FeatureCard2 = () => {
    return (
        <div>
            <div className='px-8 md:px-12 lg:px-16 xl:px-20 py-8'>
                <a href='employeesManagement' className='block text-center md:text-left'>
                    <img className='bg-[#FF7A50] hover:bg-orange-700 px-3 py-2 rounded-lg transition duration-300 mx-auto md:mx-0' src="assets/f2.png" alt='management' />
                    <h2 className='font-semibold text-white py-4'>Time Tracker</h2>
                    <p className='text-gray-400'>
                        Track time effortlessly. Optimize projects,
                        enhance productivity with our user-friendly
                        Time Tracker feature. Try it now!
                    </p>
                </a>
            </div>
        </div>
    )
}

export default FeatureCard2
