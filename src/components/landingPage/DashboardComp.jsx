import React from 'react'


const DashboardComp = () => {
    return (
        <>
            <div className='h-full bg-pinkbackground py-16 pt-7 pr-14  bg-orangelinewithicons bg-cover'>
                {/* dashboard 1 */}
                <div className=' '>
                  
                    <div className='flex flex-wrap justify-between items-center px-4 mt-[5rem]'>
                        <div className='w-full md:w-1/2'>
                            <img src="assets/dashboard 1.png" alt='dashboard one' className='w-[70] h-auto lg:ml-[5rem] sm:ml-0 z-10' />
                        </div>
                        <div className='w-full md:w-1/2 lg:pl-12 sm:pl-0 pb-32 '>
                            <h2 className='text-text font-bold text-3xl'>Reclaim Countless hours
                                with efficient time tracking.</h2>
                            <p className='text-gray-400 pt-6'><span className='text-[#F2754E]'>Clockin's</span> intuitive UI and user-centric time tracking
                                enabled companies to slash timesheet admin by 80%.</p>
                        </div>
                    </div>
                </div>
                {/* dashboard 2 */}
                <div className='flex flex-wrap justify-between items-center px-4 mt-[5rem] '>
                    <div className='w-full md:w-1/2 lg:pl-[5rem] sm:pl-0'>
                        <h2 className='text-text font-bold text-3xl'>Efficiently oversee <br /> your list of employees.</h2>
                        <p className='text-gray-400 pt-6'>Simplify employee management: track attendance,<br />tasks, and schdeules seamlessly.</p>
                    </div>
                    <div className='w-full md:w-1/2 lg:pl-12 sm:pl-0 lg:pb-32 sm:pb-5'>
                        <img src="assets/dashboard 2.png" alt='dashboard one' className='w-[70] h-auto lg:mr-[5rem] sm:mr-0' />

                    </div>
                </div>
                <div className='flex flex-wrap justify-between items-center px-4 mt-[5rem] pt-[5rem]'>
                    <div className='w-full md:w-1/2'>
                        <img src="assets/dashboard 3.png" alt='dashboard one' className='w-[70] h-auto lg:ml-[5rem] sm:ml-0' />
                    </div>
                    <div className='w-full md:w-1/2 lg:pl-12 sm:pl-0 pb-32'>
                        <h2 className='text-text font-bold text-3xl'>Efficiently Task Handling</h2>
                        <p className='text-gray-400 pt-6'>Experience seamless task management that enhances productivity. Our platform empowers you to effortlessly create, assign, and track tasks, ensuring efficient collaboration and goal achievement.</p>
                    </div>
                </div>
                <div className='relative w-full h-full bg-cover backimage bg-center mt-40 ml-16 hidden lg:block'>
                    <h1 className="text-white text-5xl pb-[2rem] font-bold pt-[7rem] pl-[4rem] ">Try Clockin today!</h1>
                    <p className="text-white text-3xl pb-[4rem] pl-[4rem]">Uncover Your Productivity Potential with <br /> Discover Time Tracking Software.</p>
                    <ul className="flex pb-[3rem] pl-[4rem] font-bold text-white">
                        <li className="mr-[1rem]"><i class="fa-solid fa-circle-check text-[#00BA00] pr-[1rem]" ></i>Accurately billing</li>
                        <li className="mr-[1rem]"><i class="fa-solid fa-circle-check text-[#00BA00] pr-[1rem]"></i>Project profitability</li>
                        <li className="mr-[1rem]"><i class="fa-solid fa-circle-check text-[#00BA00] pr-[1rem]"></i>Strict anti-surveillance policy</li>
                        <li className="mr-[1rem]"><i class="fa-solid fa-circle-check text-[#00BA00] pr-[1rem]"></i>Trusted by 5000+ businesses globally</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DashboardComp;
