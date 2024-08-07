import React, { useState } from 'react'
import ImageStylebar from './ImageStylebar'
import { useRowColumnContext } from '../../../layouts/RowColumnContext';
import { usePage } from '../../../layouts/PageContext';

function StyleSidebar({ onHeadingChange, setColorStyle, setPadding, setMargin, setAlign, setImageSize, setImageRadius, selectedElement }) {
    const [headingStyle, setHeadingStyle] = useState(false)
    const { formData, setFormData } = usePage();

    const handleHeadingStyle = () => {
        setHeadingStyle(!headingStyle)
    }

    const handleChange = (event) => {
        onHeadingChange(event.target.value)
        // setFormData(event.target.value)
    }
    const onColorChange = (event) => {
        setColorStyle(event.target.value)
        // setFormData(event.target.value)
    }

    // const onPaddingChange = (event) => {
    // const { value, dataset } = event.target;
    // setPadding((prevPadding) => ({
    // ...prevPadding,
    // [dataset.side]: parseInt(value, 10) || 0,
    // }))
    // }
    const { rowColumnData } = useRowColumnContext();
    const rowIndex = rowColumnData.rowIndex;
    const columnIndex = rowColumnData.columnIndex;

    const onPaddingChange = (event) => {
        console.log('Current rowIndex:', rowColumnData.rowIndex);
        console.log('Current columnIndex:', rowColumnData.columnIndex);
        const { value, dataset } = event.target;
        setPadding((prevPadding) => ({
            ...prevPadding,
            [dataset.side]: parseInt(value, 10) || 0,
        }))
        const rows = [...formData.rows];
        if (rows[rowColumnData.rowIndex] && rows[rowColumnData.rowIndex].columns[rowColumnData.columnIndex]) {
            rows[rowColumnData.rowIndex].columns[rowColumnData.columnIndex].style.padding[dataset.side] = parseInt(value, 10) || 0;
            setFormData({ ...formData, rows });
            console.log('Updated formData with padding:', { ...formData, rows });
        } else {
            console.error(`Row at index ${rowColumnData.rowIndex} or column at index ${rowColumnData.columnIndex} does not exist.`);
        }
    };
    const onMarginChange = (event) => {
        const { value, dataset } = event.target;
        setMargin((prevMargin) => ({
            ...prevMargin,
            [dataset.side]: parseInt(value, 10) || 0,
        }))
    }
    const onSizeChange = (event) => {
        const { value, dataset } = event.target;
        setImageSize((prevSize) => ({
            ...prevSize,
            [dataset.side]: parseInt(value, 10) || 0,
        }))
    }
    const onAlignChange = (event) => {
        setAlign(event.currentTarget.dataset.align);
    };
    const onRadiusChange = (event) => {
        setImageRadius(event.target.value);
    };
    return (
        <div>
            {/* {selectedElement && ( */}
            <div>
                <span className='text-md font-bold cursor-pointer' onClick={handleHeadingStyle}><i class="fa-sharp fa-solid fa-caret-down mr-3 mt-3"></i> Heading Style</span>
                {/* {headingStyle ? */}
                <>
                    <h3 className='mt-5 font-semibold'>Select a Heading</h3>
                    <select className='px-5 py-2 w-full mt-4 outline-none rounded shadow-sm' onChange={handleChange}>
                        <option>Select Option</option>
                        <option className='h1' value='h1'>Heading 1</option>
                        <option className='h2' value='h2'>Heading 2</option>
                        <option className='h3' value='h3'>Heading 3</option>
                    </select>
                    {/* <h3 className='mt-5 font-semibold'>Enter Content</h3>
                        <textarea className='w-full mt-2 shadow-sm rounded p-3 outline-none' placeholder='Enter Content Here'  cols='50' rows='4' ></textarea> */}

                    <h3 className='mt-5 font-semibold'>Select a Color</h3>
                    <input type='color' className='mt-4 cursor-pointer ' onChange={onColorChange} value='red' />

                    <h3 className='mt-5 font-semibold'>Padding</h3>
                    <div className='flex justify-between w-full'>
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' data-side='top' onChange={onPaddingChange} />
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' data-side='right' onChange={onPaddingChange} />
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' onChange={onPaddingChange} data-side='left' />
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' onChange={onPaddingChange} data-side='bottom' />
                    </div>

                    <h3 className='mt-5 font-semibold'>Margin</h3>
                    <div className='flex justify-between w-full'>
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' onChange={onMarginChange} data-side='top' />
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' onChange={onMarginChange} data-side='right' />
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' onChange={onMarginChange} data-side='left' />
                        <input type='number' placeholder='0' className='w-full outline-none p-2 m-2 rounded shadow-sm' onChange={onMarginChange} data-side='bottom' />
                    </div>

                    <h3 className='my-5 font-semibold'>Text Alignment</h3>
                    <div className='flex justify-between w-full'>
                        <button className='p-2 m-2 rounded shadow-sm w-full' onClick={onAlignChange} data-align='left'><i class="fa-regular fa-align-left"></i></button>
                        <button className='p-2 m-2 rounded shadow-sm w-full' onClick={onAlignChange} data-align='center'><i class="fa-solid fa-align-center"></i></button>
                        <button className='p-2 m-2 rounded shadow-sm w-full' onClick={onAlignChange} data-align='right'><i class="fa-solid fa-align-right"></i></button>
                    </div>
                </>
                {/* Comment is here : '' }    */}
            </div>
            {/* )} */}
            <ImageStylebar onRadiusChange={onRadiusChange} onSizeChange={onSizeChange} />
            {/* <span className='text-md font-bold'><i class="fa-sharp fa-solid fa-caret-down mr-3 mt-3"></i> Image Style</span>
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
            </div> */}
        </div>
    )
}

export default StyleSidebar