import React from 'react'

const FeatureCard3 = () => {
    return (
        <div>
            <div className='px-3 md:px-12 lg:px-16 xl:px-20 py-2'>
                <a href='employeesManagement' className='block  md:text-left'>
                    <img className='bg-[#FF7A50] hover:bg-orange-700 px-3 py-2 rounded-lg transition duration-300 md:mx-0' src="assets/f3.png" alt='management' />
                    <h2 className='font-bold text-text py-4'>Task Management</h2>
                    <p className='text-gray-400'>
                        Simplify tasks. Achieve goals. Utilize our
                        Task Management tool for seamless project
                        coordination. Elevate productivity instantly!
                    </p>
                </a>
            </div>
        </div>
    )
}

export default FeatureCard3
