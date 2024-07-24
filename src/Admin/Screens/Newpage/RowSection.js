import React, { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useSearchParams } from 'react-router-dom';

const RowSection = ({ rows, onRemoveRow, onDropItem, headingStyle, colorStyle, padding, margin, align ,imagesize}) => {
  return (
    <div className='mt-2 flex justify-around items-center'>
      {rows.map(row => (
        <DroppableRow
          key={row.id}
          row={row}
          onRemoveRow={onRemoveRow}
          align={align}
          onDropItem={onDropItem}
          imagesize={imagesize}
          headingStyle={headingStyle}
          margin={margin}
          colorStyle={colorStyle}
          padding={padding}
        />
      ))}
    </div>
  );
};

const DroppableRow = ({ row, onRemoveRow, onDropItem, headingStyle, colorStyle, padding, margin, align ,imagesize}) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const { top, right, left, bottom } = padding;
  const { width , height} = imagesize
  console.log('size',imagesize)
  const { top: topm, right: rightm, left: leftm, bottom: bottomm } = margin;
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
      {row.heading && (
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
            className={`bg-transparent pt-${top} pr-${right} pl-${left} pb-${bottom} mt-${topm} mr-${rightm} ml-${leftm} mb-${bottomm} rounded outline-none w-full ${headingStyle} text-${colorStyle} text-${align}`}
            style={{ color: colorStyle }}
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
          <div>
            <input
              ref={fileInputRef}
              id={row.id}
              onChange={onSelectFile}
              type='file'
              className={`bg-slate-200 p-2 rounded outline-none  text-xl ${preview ? 'hidden' : ''}`}
            />
            {preview && (
              <img
                src={preview}
                className={` cursor-pointer w-[${width}%] h-[${height}%]`}
                onClick={handleImageClick}
              />
            )}
          </div>
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
          <i className='fa-solid fa-plus' style={{ color: 'white' }}></i>
        </>
      )}
    </div>
  );
};

export default RowSection;
