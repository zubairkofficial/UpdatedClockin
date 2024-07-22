import React, { useState } from 'react'
import HelmetWrapper from '../../../Config/HelmetWrapper'
import Header from './Header/Header'
import NewPageScreen from './NewPageScreen'
import { useDrag } from 'react-dnd';
import DraggableButton from './Buttons/DraggableButton';
import DraggableImage from './Buttons/DraggableImage';
import StyleSidebar from './StyleSidebar';

function OptionSidebar({ type }) {
    const [container, setContainer] = useState(false)
    const [heading, setHeading] = useState(false)
    const [style, setStyle] = useState(true)
    const [headingStyle, setHeadingStyle] = useState('');

    const handleSection = () => {
        setStyle(!style)
    }
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ITEM',
        item: { type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleClick = () => {
        setHeading(!heading)
    }

    const handleContainer = () => {
        setContainer(!container)
    }
    return (
        <>
            <HelmetWrapper />
            <Header />
            <div className="flex flex-row bg-white">
                <div className='basis-1/4 p-5 bg-slate-50 h-[100vh] shadow-md'>
                    <div className='flex justify-around'>
                        <h3 className={`mt-5 text-center font-bold mb-5 cursor-pointer bg-slate-100 p-5 rounded ${style ? 'border-2' : ''}`} onClick={handleSection}>Elements</h3>
                        <h3 className={`mt-5 text-center font-bold mb-5 cursor-pointer bg-slate-100 p-5 rounded ${style ? '' : 'border-2'}`} onClick={handleSection}>Style</h3>
                    </div>
                    <hr />
                    {style ?
                        <>
                            <span className='text-md font-bold'><i class="fa-sharp fa-solid fa-caret-down mr-3 mt-3"></i> Layout</span>
                            <div className='flex justify-around align-items-center mb-4'>
                                <div className='mt-8 border-2 border-gray-500 w-[50%] text-center m-1 shadow-sm'>
                                    <i class="fa-sharp fa-light fa-container-storage pt-3" style={{ fontSize: "1.5rem" }}></i> <br />
                                    <button className='btn' onClick={handleContainer}>Container</button>
                                </div>
                                <div className='mt-8  border-2 border-gray-500 w-[50%] text-center m-1 shadow-sm'>
                                    <i class="fa-regular fa-grid pt-3 " style={{ fontSize: "1.5rem" }}></i> <br />
                                    <button className='btn' onClick={handleClick}>Grid</button>
                                </div>
                            </div>
                            <hr />
                            <span className='text-md font-bold'><i class="fa-sharp fa-solid fa-caret-down mr-3 mt-5"></i> Basic</span>
                            <div className='flex justify-around align-items-center'>
                                <div className='mt-8 border-2 border-gray-500 w-[50%] text-center m-1 shadow-sm'>
                                    <i class="fa-regular fa-table-rows pt-3" style={{ fontSize: "1.5rem" }}></i> <br />
                                    <button className='btn' onClick={handleClick}>Row</button>
                                </div>
                                <div className='mt-8  border-2 border-gray-500 w-[50%] text-center m-1 shadow-sm'>
                                    <i class="fa-regular fa-columns-3 pt-3 " style={{ fontSize: "1.5rem" }}></i><br />
                                    <button className='btn' onClick={handleClick}>Column</button>
                                </div>
                            </div>
                            <div className='flex justify-around align-items-center'>
                                <DraggableButton type="heading" />
                                <DraggableImage type="image" />
                            </div>
                        </>
                        : <StyleSidebar  onHeadingChange={setHeadingStyle}/>}
                </div>
                <NewPageScreen heading={heading} click={handleClick} container={container} handleContainer={handleContainer} headingStyle={headingStyle} />
            </div>
        </>
    )
}

export default OptionSidebar