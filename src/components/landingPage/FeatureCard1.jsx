import React from 'react'

const FeatureCard1 = () => {
    return (
        <div>
            <div className='px-5 md:px-12 lg:px-16 xl:px-20 py-2'>
                <a href='employeesManagement' className='block text-center md:text-left'>
                    <img className='bg-[#FF7A50] hover:bg-orange-700 px-3 py-2 rounded-lg mx-auto transition duration-300 md:mx-0' src="assets/f1.png" alt='management' />
                    <h2 className='font-bold text-text py-4 '>Employees Management</h2>
                    <p className='text-gray-400 text-base'>
                        Efficiently organize and track employees' activities with our seamless employees management feature. Streamline productivity today!
                    </p>
                </a>
            </div>
        </div>
    )
}

export default FeatureCard1
