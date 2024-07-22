import React from 'react'
import { useDrag } from 'react-dnd';

function DraggableImage({ type }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'ITEM',
        item: { type },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div className='mt-8  border-2 border-gray-500 w-[50%] text-center m-1 shadow-sm' ref={drag}>
            <i class="fa-regular fa-image pt-3 " style={{ fontSize: "1.5rem" }}></i> <br />
            <button className='btn' style={{ opacity: isDragging ? 0.5 : 1 }}>Image</button>
        </div>
    )
}

export default DraggableImage