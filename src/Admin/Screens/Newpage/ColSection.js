import React, { useState } from 'react'
import RowSection from './RowSection';
import DndContext from '../../../layouts/DndContext';

const ColSection = ({ section, onRemove ,headingStyle ,colorStyle , padding , margin , align ,imagesize}) => {
  const [rows, setRows] = useState([]);

  const handleRow = (numRows) => {
    const newRows = Array.from({ length: numRows }, (_, index) => ({
      id: Date.now() + index,
      heading: '',
      image: '',
      headingStyle : ''
    }));
    setRows([...rows, ...newRows]);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleDropItem = (item, id) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        return { ...row, [item.type]: true };
      }
      return row;
    }));
  };

  return (
    <>
      <DndContext>
        <div className='relative border-dashed border-gray-300 rounded p-5 mt-8 group' style={{ border: 'dashed', borderWidth: '1px' }}>
          {rows.length === 0 ? (
            <>
              <h3 className='text-center text-lg font-bold text-text'>Select Row Structure</h3>
              <label
                className='absolute top-20 right-1 px-2 bg-opacity-75 rounded-full cursor-pointer hidden group-hover:block ease-in duration-300'
                style={{ transform: 'translate(-50%,-80%)' }}
                onClick={onRemove}
              >
                <i className='fa-solid fa-xmark'></i>
              </label>
              <div className='flex justify-around mt-5 ml-20'>
                <div className='flex cursor-pointer custom-group' onClick={() => handleRow(1)}>
                  <div className='w-10 h-16 bg-gray-300 m-2'></div>
                </div>
                <div className='flex cursor-pointer custom-group' onClick={() => handleRow(2)}>
                  <div className='w-10 h-16 bg-gray-300 m-2'></div>
                  <div className='w-10 h-16 bg-gray-300 m-2'></div>
                </div>
                <div className='flex cursor-pointer custom-group' onClick={() => handleRow(3)}>
                  <div className='w-10 h-16 bg-gray-300 m-2'></div>
                  <div className='w-10 h-16 bg-gray-300 m-2'></div>
                  <div className='w-10 h-16 bg-gray-300 m-2'></div>
                </div>
              </div>
            </>
          ) : (
            <RowSection rows={rows} onRemoveRow={handleRemoveRow} onDropItem={handleDropItem}  headingStyle={headingStyle} colorStyle={colorStyle} padding={padding} margin={margin} align={align} imagesize={imagesize}/>
          )}
        </div>
      </DndContext>
    </>
  );
};



export default ColSection