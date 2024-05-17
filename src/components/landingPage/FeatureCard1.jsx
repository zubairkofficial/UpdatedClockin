import React from 'react'

const FeatureCard1 = () => {
    return (
        <div>
            <div className='px-8 md:px-12 lg:px-16 xl:px-20 py-8'>
                <a href='employeesManagement' className='block text-center md:text-left'>
                    <img className='bg-[#FF7A50] hover:bg-orange-700 px-3 py-2 rounded-lg transition duration-300 mx-auto md:mx-0' src="assets/f1.png" alt='management' />
                    <h2 className='font-bold text-text py-4 '>Employees Management</h2>
                    <p className='text-gray-400'>
                        Efficiently organize and track employees' activities with our seamless employees management feature. Streamline productivity today!
                    </p>
                </a>
            </div>

        </div>
    )
}

export default FeatureCard1
