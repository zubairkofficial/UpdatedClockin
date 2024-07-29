import React, { useCallback, useContext, useEffect, useState } from 'react'
import ColSection from './ColSection'
import Header from "../../../layouts/Header";
import { ThemeContext } from '../../../layouts/ThemeContext';
import RowSection from './RowSection';

function NewPageScreen({ heading, click, container, handleContainer, headingStyle, colorStyle, padding, margin, align, imagesize, imageradius, selectedElement,
    setSelectedElement }) {

    const { isLightMode } = useContext(ThemeContext);
    const [sections, setSections] = useState([]);

    const handleAddSection = () => {
        const newSection = { id: Date.now() }
        setSections([...sections, newSection])
    };

    const handleRemoveSection = (id) => {
        setSections(sections.filter(section => section.id !== id));
    };

    useEffect(() => {
        document.title = 'Add New Page'
    })
    const [rows, setRows] = useState([]);

    const handleRow = useCallback((numColumns) => {
        const newRow = {
            id: Date.now(), // Unique ID for each row
            columns: Array(numColumns).fill(null) // Initialize columns as null
        };
        setRows(prevRows => [...prevRows, newRow]);
    }, []);

    const handleRemoveRow = useCallback((id) => {
        setRows(prevRows => prevRows.filter(row => row.id !== id));
    }, []);

    const handleDropItem = useCallback((item, rowId, columnIndex) => {
        setRows(prevRows => prevRows.map(row => {
            if (row.id === rowId) {
                const newColumns = [...row.columns];
                newColumns[columnIndex] = item; // Place the item in the correct column
                return { ...row, columns: newColumns };
            }
            return row;
        }));
    }, []);
    return (
        <>
            <div className="basis-[75%] p-5 bg-cover bg-center bg-no-repeat w-full relative h-[93vh] overflow-auto " style={{
                backgroundImage: `url(${isLightMode ? "/assets/bg1.png" : "/assets/bg2.png"
                    })`,
            }}>
                <Header />
                {/* {sections.map(section => (
                    <ColSection
                        key={section.id}
                        section={section}
                        onRemove={() => handleRemoveSection(section.id)}
                        headingStyle={headingStyle}
                        colorStyle={colorStyle}
                        padding={padding}
                        align={align}
                        margin={margin}
                        selectedElement={selectedElement}
                        setSelectedElement={setSelectedElement}
                        imagesize={imagesize}
                        imageradius={imageradius}
                    />
                ))} */}
                <RowSection
                    rows={rows}
                    onRemoveRow={handleRemoveRow}
                    onDropItem={handleDropItem}
                    headingStyle={headingStyle}
                    colorStyle={colorStyle}
                    padding={padding}
                    margin={margin}
                    align={align}
                    imagesize={imagesize}
                    imageradius={imageradius}
                    selectedElement={selectedElement}
                    setSelectedElement={setSelectedElement}
                />
                <div className="flex justify-around mt-5 ml-20">
                    {[1, 2, 3].map(num => (
                        <div key={num} className="flex cursor-pointer" onClick={() => handleRow(num)}>
                            {Array(num).fill().map((_, idx) => (
                                <div key={idx} className="w-10 h-16 bg-gray-300 m-2"></div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={`mt-10 relative rounded border-gray-300 ${container ? '' : 'hidden'} `} style={{ border: 'dashed', borderWidth: '1px' }}>
                    <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2% auto', color: 'white' }} className='bg-[#ff7a50]  font-bold py-3 px-6 rounded-xl transition duration-300' onClick={handleAddSection}>Add New Section</button>
                </div>
                {/* <div className={`mt-10 relative ${heading ? '' : 'hidden'} border-dotted`}>
                    <label htmlFor='' className='absolute top-0 right-0 p-1 bg-opacity-75 rounded-full cursor-pointer'
                        style={{ transform: "translate(-50%,-50%)" }} >
                        <i class="fa-regular fa-trash" onClick={click} ></i>
                    </label>
                    <input type='text' placeholder='Heading will be here' className='p-5 bg-slate-100 rounded w-full outline-none text-xl font-bold text-center' />
                </div> */}
            </div>
        </>
    )
}

export default NewPageScreen