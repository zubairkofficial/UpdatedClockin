import React, { useContext, useEffect, useState } from 'react'
import ColSection from './ColSection'
import Header from "../../../layouts/Header";
import { ThemeContext } from '../../../layouts/ThemeContext';

function NewPageScreen({ heading, click, container, handleContainer ,headingStyle }) {

    const { isLightMode } = useContext(ThemeContext);
    const [sections, setSections] = useState([]);

    const handleAddSection = () => {
        const newSection = { id: Date.now() }; // Use a unique identifier like timestamp
        setSections([...sections, newSection]);
    };

    const handleRemoveSection = (id) => {
        setSections(sections.filter(section => section.id !== id));
    };

    useEffect(() => {
        document.title = 'Add New Page'
    })
    return (
        <>
            <div className="basis-[75%] p-5 bg-cover bg-center bg-no-repeat h-screen w-full relative" style={{
                backgroundImage: `url(${isLightMode ? "/assets/bg1.png" : "/assets/bg2.png"
                    })`,
            }}>
                <Header />
                {sections.map(section => (
                    <ColSection
                        key={section.id}
                        section={section}
                        onRemove={() => handleRemoveSection(section.id)}
                        headingStyle={headingStyle}
                    />
                ))}
                <div className={`mt-10 relative rounded border-gray-300 ${container ? '' : 'hidden'} `} style={{ border: 'dashed', borderWidth: '1px' }}>
                    <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2% auto', color: 'white' }} className='bg-[#ff7a50]  font-bold py-3 px-6 rounded-xl transition duration-300' onClick={handleAddSection}>Add New Section</button>
                </div>
                <div className={`mt-10 relative ${heading ? '' : 'hidden'} border-dotted`}>
                    <label htmlFor='' className='absolute top-0 right-0 p-1 bg-opacity-75 rounded-full cursor-pointer'
                        style={{ transform: "translate(-50%,-50%)" }} >
                        <i class="fa-regular fa-trash" onClick={click} ></i>
                    </label>
                    <input type='text' placeholder='Heading will be here' className='p-5 bg-slate-100 rounded w-full outline-none text-xl font-bold text-center' />
                </div>
            </div>
        </>
    )
}

export default NewPageScreen