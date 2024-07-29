import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableCard = ({ type }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ITEM',
        item: { type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} className='mt-8 border-2 border-gray-500 w-[50%] text-center m-1 shadow-sm'>
            <i class="fa-sharp fa-solid fa-table-cells-large pt-3" style={{ fontSize: '1.5rem' }}></i> <br />
            {/* <i className="fa-solid fa-heading pt-3" style={{ fontSize: '1.5rem' }}></i> <br /> */}
            <button className='btn' style={{ opacity: isDragging ? 0.5 : 1 }}>Cards</button>
        </div>
    );
};

export default DraggableCard;
