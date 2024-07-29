import React from 'react'

function HeadingComponent({onRemoveRow, padding , row,colorStyle , align , margin ,headingStyle}) {
  return (
    <> 
          <label
            className='absolute top-1 right-1 px-2 bg-opacity-75 rounded-3xl cursor-pointer hidden group-hover:block ease-in duration-300'
            style={{ transform: 'translate(-50%, -50%)' }}
            onClick={() => onRemoveRow(row.id)}
            htmlFor={row.id}
          >
            <i className='fa-solid fa-xmark'></i>
          </label>
          <input
            id={row.id}
            type='text'
            placeholder='Enter heading text'
            className={`bg-transparent ${headingStyle} pt-${padding.top} pr-${padding.right} pl-${padding.left} pb-${padding.bottom} mt-${margin.top} mr-${margin.right} ml-${margin.left} mb-${margin.bottom} rounded outline-none w-full text-${colorStyle} text-${align}`}
            style={{ color: colorStyle }}
          // defaultValue="This will be heading"
          />
        </>
  )
}

export default HeadingComponent