import React from 'react'

function ImageStylebar({onSizeChange , onRadiusChange}) {
  return (
    <div>
        <span className='text-md font-bold'><i class="fa-sharp fa-solid fa-caret-down mr-3 mt-3"></i> Image Style</span>
            <div className='flex justify-between w-full mt-5'>
                <div className='w-full'>
                    <label className='font-bold'>Width : </label>
                    <input type='number' className='p-2 m-2 rounded shadow-sm w-[50%] outline-none' placeholder='50%' onChange={onSizeChange} data-side='width'/>
                </div>
                <div className='w-full'>
                    <label className='font-bold'>Height : </label>
                    <input type='number' placeholder='50%' className='p-2 m-2 rounded shadow-sm w-[50%] outline-none' onChange={onSizeChange} data-side='height'/>
                </div>
            </div>
            <div className='flex justify-between w-full mt-5'>
                <div className='w-full'>
                    <label className='font-bold'>Border Radius : </label>
                    <input type='number' className='p-2 m-2 rounded shadow-sm w-[50%] outline-none' placeholder='0px' onChange={onRadiusChange}/>
                </div>
            </div>
    </div>
  )
}

export default ImageStylebar