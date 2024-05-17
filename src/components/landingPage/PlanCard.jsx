import React, { useContext } from 'react';
import { ThemeContext } from '../../layouts/ThemeContext';
const PlanCard = ({ isSubscription }) => {
    const { isLightMode } = useContext(ThemeContext);
    return (
        <div className='flex py-12 bg-background'>
            <div className="bg-pinkbackground rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none p-6 max-w-sm w-1/3 mx-auto text-white shadow-xl flex flex-col items-center">
                <h3 className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'} font-semibold m-5`}>Basic</h3>
                <p className="text-3xl font-bold mb-8 text-[#FF8B42]">$49.00</p>
                <hr className="border-[#81818146] w-full border-t-1 mb-6" />

                <div className={`flex flex-col justify-between items-center w-full border p-5 border-orange-400 rounded-lg ${isLightMode ? '' : 'bg-white'}`}>
                    <div className="flex justify-between items-center w-full mb-2">
                        <span className="text-[#FF8B42] font-semibold">Employee</span>
                        <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>50</span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-[#FF8B42] font-semibold">Tasks</span>
                        <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>400</span>
                    </div>
                </div>

                <div className="flex flex-col w-full mb-6 space-y-3 p-5">
                    <div className="flex justify-between">
                        <span className='text-text'>Timesheets</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Export to Excel</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Notes</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Report</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Data Backup</span>
                        <span className={isSubscription ? "text-green-500" : "text-red-500"}>{isSubscription ? "✔" : "✖"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Syncing with Server</span>
                        <span className={isSubscription ? "text-green-500" : "text-red-500"}>{isSubscription ? "✔" : "✖"}</span>
                    </div>
                    {!isSubscription ? <div className='flex justify-center text-[#FF8B42] font-bold pt-5'>Offline</div> : ''}
                </div>

                <button className="bg-orange-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-orange-600 transition-colors mb-6">
                    Choose Plan
                </button>

                <p className="text-gray-400 text-xs text-center">Lorem Ipsum is simply dummy text</p>
            </div>
            {/* card 2 */}
            <div className="relative bg-pinkbackground rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none p-6 max-w-sm w-1/3 mx-auto text-white shadow-xl flex flex-col items-center">
                <div className="absolute top-6 left-9 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF8B42] text-white px-5 py-1 rounded-tr-3xl rounded-br-3xl font-semibold shadow-md">
                    Best
                </div>
                <h3 className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'} font-semibold m-5`}>Professional</h3>
                <p className="text-3xl font-bold mb-8 text-[#FF8B42]">$79.00</p>
                <hr className="border-[#81818146] w-full border-t-1 mb-6" />

                <div className={`flex flex-col justify-between items-center w-full border p-5 border-orange-400 rounded-lg ${isLightMode ? '' : 'bg-white'}`}>
                    <div className="flex justify-between items-center w-full mb-2">
                        <span className="text-orange-500 font-semibold">Employee</span>
                        <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>100</span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-orange-500 font-semibold">Tasks</span>
                        <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>800</span>
                    </div>
                </div>

                <div className="flex flex-col w-full mb-6 space-y-3 p-5">
                    <div className="flex justify-between">
                        <span className='text-text'>Timesheets</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Export to Excel</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Notes</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Report</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Data Backup</span>
                        <span className={isSubscription ? "text-green-500" : "text-red-500"}>{isSubscription ? "✔" : "✖"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Syncing with Server</span>
                        <span className={isSubscription ? "text-green-500" : "text-red-500"}>{isSubscription ? "✔" : "✖"}</span>
                    </div>
                    {!isSubscription ? <div className='flex justify-center text-[#FF8B42] font-bold pt-5'>Offline</div> : ''}
                </div>

                <button className="bg-orange-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-orange-600 transition-colors mb-6">
                    Choose Plan
                </button>

                <p className="text-gray-400 text-xs text-center">Lorem Ipsum is simply dummy text</p>
            </div>


            {/* card 3 */}
            <div className="bg-pinkbackground rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none p-6 max-w-sm w-1/3 mx-auto text-white shadow-xl flex flex-col items-center">
                <h3 className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'} text-[#FF8B42] font-semibold m-5`}>Premium</h3>
                <p className="text-3xl font-bold mb-8 text-[#FF8B42]">$99.00</p>
                <hr className="border-[#81818146] w-full border-t-1 mb-6" />

                <div className={`flex flex-col justify-between items-center w-full border p-5 border-orange-400 rounded-lg ${isLightMode ? '' : 'bg-white'}`}>
                    <div className="flex justify-between items-center w-full mb-2">
                        <span className="text-orange-500 font-semibold">Employee</span>
                        <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>Unlimited</span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-orange-500 font-semibold">Tasks</span>
                        <span className={`${isLightMode ? 'text-[#ffffff]' : 'text-[#FF8B42]'}`}>Unlimited</span>
                    </div>
                </div>

                <div className="flex flex-col w-full mb-6 space-y-3 p-5">
                    <div className="flex justify-between">
                        <span className='text-text'>Timesheets</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Export to Excel</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Notes</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Report</span>
                        <span className="text-green-500">✔</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Data Backup</span>
                        <span className={isSubscription ? "text-green-500" : "text-red-500"}>{isSubscription ? "✔" : "✖"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className='text-text'>Syncing with Server</span>
                        <span className={isSubscription ? "text-green-500" : "text-red-500"}>{isSubscription ? "✔" : "✖"}</span>
                    </div>
                    {!isSubscription ? <div className='flex justify-center text-[#FF8B42] font-bold pt-5'>Offline</div> : ''}
                </div>

                <button className="bg-orange-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-orange-600 transition-colors mb-6">
                    Choose Plan
                </button>

                <p className="text-gray-400 text-xs text-center">Lorem Ipsum is simply dummy text</p>
            </div>
        </div>
    );
}

export default PlanCard;