import React from 'react'

const AskQuestionForm = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pinkbackground ">
            <div className="w-full max-w-[85%] bg-pinkbackground p-8 rounded-xl shadow-2xl"  style={{marginTop:"-15%"}}>
                <div className='p-6'>
                    <h2 className='text-text text-2xl'>Ask your Question</h2>
                    <p className='text-gray-500 py-2 text-sm'>We will send an email to you with in 24 hours.</p>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className='text-text text-md font-semibold pl-4'>Subject</label>
                        <input type="text" placeholder="Enter Subject here" className="text-sm mt-2 appearance-none block w-full bg-inputcolor text-text rounded-full py-5 px-5 leading-tight focus:outline-none focus:bg-inputcolor" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className='text-text text-md font-semibold pl-4'>Email</label>
                        <input type="email" placeholder="Enter Your Email here" className="text-sm mt-2 appearance-none block w-full bg-inputcolor text-text rounded-full py-5 px-5 leading-tight focus:outline-none focus:bg-inputcolor" />
                    </div>
                </div>

                <div className="mb-6 px-3">
                <label className='text-text font-semibold pl-4 pt-6'>How we can help?</label>
                    <textarea placeholder="Write here..." className="appearance-none block w-full bg-inputcolor text-text rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-inputcolor h-[40vh] mt-5"></textarea>
                </div>

                <div className="flex space-x-3 justify-end items-end">
                    {/* Add File Button */}
                    <button className="flex items-center justify-center hover:bg-orange-600 text-text font-semibold py-2 px-4 rounded-full">
                    <img src="assets/attach-file-icon.png" alt='' />
                        Add File
                    </button>

                    {/* Send Button */}
                    <button className="bg-[#FF8B42] hover:bg-orange-600 text-white font-semibold py-2 px-7 rounded-lg">
                        Send
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default AskQuestionForm;
