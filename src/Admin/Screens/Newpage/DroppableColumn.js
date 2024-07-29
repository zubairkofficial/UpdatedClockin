import React, { useRef, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';

const DroppableColumn = ({
  rowId,
  columnIndex,
  item,
  onDropItem,
  headingStyle,
  colorStyle,
  padding,
  margin,
  align,
  imagesize,
  imageradius,
  selectedElement,
  setSelectedElement
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (draggedItem) => onDropItem(draggedItem, rowId, columnIndex),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [onDropItem, rowId, columnIndex]);

  return (
    <div
      ref={drop}
      className={`flex-1 p-2 border ${isOver ? 'bg-blue-200' : 'bg-white'}`}
      onClick={() => setSelectedElement(rowId)}
    >
      {item ? (
        item.type === 'heading' ? (
          <h2 style={{ ...headingStyle, color: colorStyle }}>{item.content}</h2>
        ) : item.type === 'image' ? (
          <img
            src={item.src}
            alt="Dropped item"
            style={{
              width: `${imagesize.width}%`,
              height: `${imagesize.height}%`,
              borderRadius: `${imageradius}px`
            }}
          />
        ) : item.type === 'card' ? (
          <input
            type='text'
            placeholder='Enter heading text'
            style={{
              ...headingStyle,
              color: colorStyle,
              padding,
              margin,
              textAlign: align
            }}
          />
        ) : item.type === 'button' ? (
          <button className='btn bg-black text-white'>{item.content}</button>
        ) : null
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">Drop Here</div>
      )}
    </div>
  );
};

export default DroppableColumn;
