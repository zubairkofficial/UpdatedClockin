import React from 'react';
import { useDrop } from 'react-dnd';

const RowSection = ({ rows, onRemoveRow, onDropItem ,headingStyle }) => {
  return (
    <div className='mt-2 flex justify-around items-center'>
      {rows.map(row => (
        <DroppableRow
          key={row.id}
          row={row}
          onRemoveRow={onRemoveRow}
          onDropItem={onDropItem}
          headingStyle={headingStyle}
        />
      ))}
    </div>
  );
};

const DroppableRow = ({ row, onRemoveRow, onDropItem ,headingStyle }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => onDropItem(item, row.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`relative bg py-10 px-20 rounded mb-2 cursor-pointer group ${isOver ? 'bg-blue-200' : ''}`}
    >
      {row.heading &&  (
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
            className={`bg-transparent p-2 rounded outline-none w-full  text-center ${headingStyle} `}
            style={{color:'white'}}
            // defaultValue="This will be heading"
          />
        </>
      )}
      {row.image && (
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
            type='file'
            className='bg-slate-200 p-2 rounded outline-none w-full text-xl'
          />
        </>
      )}
      {!row.heading && !row.image && (
        <>
          <label
            className='absolute top-1 right-1 px-2 bg-opacity-75 rounded-3xl cursor-pointer hidden group-hover:block ease-in duration-300'
            style={{ transform: 'translate(-50%, -50%)' }}
            onClick={() => onRemoveRow(row.id)}
          >
            <i className='fa-solid fa-xmark'></i>
          </label>
          <i className='fa-solid fa-plus' style={{color:'white'}}></i>
        </>
      )}
    </div>
  );
};

export default RowSection;
