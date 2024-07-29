import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableButton = ({ type, onClick, handleClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className='mt-8 border-2 border-gray-500 w-[50%] text-center m-1 shadow-sm' onClick={onClick}>
      <i className="fa-solid fa-heading pt-3" style={{ fontSize: '1.5rem' }}></i> <br />
      <button className='btn' style={{ opacity: isDragging ? 0.5 : 1 }} onDrag={handleClick}>Heading</button>
    </div>
  );
};

export default DraggableButton;
