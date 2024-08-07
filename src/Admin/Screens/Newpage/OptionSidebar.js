import React, { useState } from 'react'
import HelmetWrapper from '../../../Config/HelmetWrapper'
import Header from './Header/Header'
import NewPageScreen from './NewPageScreen'
import { useDrag } from 'react-dnd';
import DraggableButton from './Buttons/DraggableButton';
import DraggableImage from './Buttons/DraggableImage';
import StyleSidebar from './StyleSidebar';
import DraggableCard from './Buttons/DraggableCard';
import DragabbleSingleButton from './Buttons/DragabbleSingleButton';
import DraggableTextArea from './Buttons/DraggableTextArea';

function OptionSidebar({ type }) {
    const [container, setContainer] = useState(false)
    const [heading, setHeading] = useState(false)
    const [style, setStyle] = useState(true)
    const [headingStyle, setHeadingStyle] = useState('');
    const [colorStyle, setColorStyle] = useState('white')
    const [padding, setPadding] = useState({ top: 0, right: 0, bottom: 0, left: 0 });
    const [margin, setMargin] = useState({ top: 0, right: 0, bottom: 0, left: 0 });
    const [align, setAlign] = useState('center');
    const [imagesize, setImageSize] = useState({ width: 50, height: 50 })
    const [imageradius, setImageRadius] = useState({ radius: 0 })
    const [selectedElement, setSelectedElement] = useState(null);
    // console.log('margin',margin)
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
                <div className='basis-1/4 p-5 bg-slate-50 h-[93vh] overflow-auto shadow-md'>

                    <div className='flex justify-around'>
                        <h3 className={`mt-5 text-center font-bold mb-5 cursor-pointer bg-slate-100 p-5 rounded ${style ? 'border-2' : ''}`} onClick={handleSection} >Elements</h3>
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
                                <DraggableButton type="heading" onClick={() => {
                                    handleSection();
                                    handleClick();
                                }} handleClick={handleClick} />
                                <DraggableImage type="image" onClick={() => {
                                    handleSection();
                                    handleClick();
                                }} />
                            </div>
                            <div className='flex justify-around align-items-center'>
                                {/* <DraggableCard type="card" /> */}
                                <DraggableTextArea type="textarea" />
                                <DragabbleSingleButton type="button" />
                            </div>
                            {/* <div className='flex justify-around align-items-center'>
                                <DraggableTextArea type="textarea" />
                            </div> */}
                        </>
                        : <StyleSidebar onHeadingChange={setHeadingStyle} setColorStyle={setColorStyle} setPadding={setPadding} setMargin={setMargin} setAlign={setAlign} setImageSize={setImageSize} setImageRadius={setImageRadius} selectedElement={selectedElement} rowIndex={0}/>}
                </div>
                <NewPageScreen heading={heading} click={handleClick} container={container} handleContainer={handleContainer} headingStyle={headingStyle} colorStyle={colorStyle} padding={padding} margin={margin} align={align} imagesize={imagesize} imageradius={imageradius} selectedElement={selectedElement}
                    setSelectedElement={setSelectedElement} />
            </div>
        </>
    )
}

export default OptionSidebar