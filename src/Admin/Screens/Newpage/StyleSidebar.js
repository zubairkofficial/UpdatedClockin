import React from 'react'

function StyleSidebar({ onHeadingChange}) {
    const handleChange = (event) => {
        onHeadingChange(event.target.value)
    }
  return (
    <div>
        <div>
            <h3 className='mt-5 font-bold'>Select a Heading</h3>
            <select className='px-5 py-2 w-full mt-4 outline-none rounded' onChange={handleChange}>
                <option>Select Option</option>
                <option className='h1' value='h1'>Heading 1</option>
                <option className='h2' value='h2'>Heading 2</option>
                <option className='h3' value='h3'>Heading 3</option>
            </select>

            <h3 className='mt-5 font-bold'>Select a Color</h3>
            <input type='color' className='mt-4 cursor-pointer'/>

        </div>
    </div>
  )
}

export default StyleSidebar