// import React, { useEffect, useRef, useState } from 'react';
// import { useDrop } from 'react-dnd';
// import { useSearchParams } from 'react-router-dom';

// const RowSection = ({ rows, onRemoveRow, onDropItem, headingStyle, colorStyle, padding, margin, align ,imagesize ,imageradius, selectedRow ,selectedItemType , selectedElement,
//   setSelectedElement }) => {
//   return (
//     <div className='mt-2 flex justify-around items-center'>
//       {rows.map(row => (
//         <DroppableRow
//           key={row.id}
//           row={row}
//           isSelected={selectedRow === row.id}
//           selectedItemType={selectedItemType}
//           onRemoveRow={onRemoveRow}
//           align={align}
//           onDropItem={onDropItem}
//           selectedElement={selectedElement}
//         setSelectedElement={setSelectedElement}
//           imageradius={imageradius}
//           imagesize={imagesize}
//           headingStyle={headingStyle}
//           margin={margin}
//           colorStyle={colorStyle}
//           padding={padding}
//         />
//       ))}
//     </div>
//   );
// };

// const DroppableRow = ({ row, onRemoveRow, onDropItem, headingStyle, colorStyle, padding, margin, align ,imagesize ,imageradius, isSelected ,selectedItemType ,selectedElement,
//   setSelectedElement}) => {
//   const [selectedFile, setSelectedFile] = useState();
//   const [preview, setPreview] = useState();
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     if (!selectedFile) {
//       setPreview(undefined);
//       return;
//     }
//     const objectUrl = URL.createObjectURL(selectedFile);
//     setPreview(objectUrl);

//     return () => URL.revokeObjectURL(objectUrl);
//   }, [selectedFile]);

//   const onSelectFile = (e) => {
//     if (!e.target.files || e.target.files.length === 0) {
//       setSelectedFile(undefined);
//       return;
//     }
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const { top, right, left, bottom } = padding;
//   const { width , height} = imagesize

//   console.log('radius',imageradius)
//   const { top: topm, right: rightm, left: leftm, bottom: bottomm } = margin;
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: 'ITEM',
//     drop: (item) => onDropItem(item, row.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));


//   return (
//     <div
//       ref={drop}
//       className={`relative bg py-10 px-20 rounded mb-2 cursor-pointer group ${isOver ? 'bg-blue-200' : ''}` }
//       onClick={() => setSelectedElement(row.id)}
//     >
//       {row.heading && (
//         <> 
//           <label
//             className='absolute top-1 right-1 px-2 bg-opacity-75 rounded-3xl cursor-pointer hidden group-hover:block ease-in duration-300'
//             style={{ transform: 'translate(-50%, -50%)' }}
//             onClick={() => onRemoveRow(row.id)}
//             htmlFor={row.id}
//           >
//             <i className='fa-solid fa-xmark'></i>
//           </label>
//           <input
//             id={row.id}
//             type='text'
//             placeholder='Enter heading text'
//             className={`bg-transparent ${isSelected && selectedItemType === 'heading' ? headingStyle : ''} pt-${padding.top} pr-${padding.right} pl-${padding.left} pb-${padding.bottom} mt-${margin.top} mr-${margin.right} ml-${margin.left} mb-${margin.bottom} rounded outline-none w-full text-${colorStyle} text-${align}`}
//             style={{ color: colorStyle }}
//           // defaultValue="This will be heading"
//           />
//         </>
//       )}
//       {row.image && (
//         <>
//           <label
//             className='absolute top-1 right-1 px-2 bg-opacity-75 rounded-3xl cursor-pointer hidden group-hover:block ease-in duration-300 border-2'
//             style={{ transform: 'translate(-50%, -50%)' }}
//             onClick={() => onRemoveRow(row.id)}
//             htmlFor={row.id}
//           >
//             <i className='fa-solid fa-xmark'></i>
//           </label>
//           <div style={{display:'flex', justifyContent:'center'}}>
//             <input
//               ref={fileInputRef}
//               id={row.id}
//               onChange={onSelectFile}
//               type='file'
//               className={`hidden`}
//             />
//             {preview ?
//               <img
//                 src={preview}
//                 className={` cursor-pointer `}
//                 style={{ width: `${width}%`, height: `${height}%` , borderRadius: `${imageradius}px` }}
//                 onClick={handleImageClick}
//               />
//              : 
//               <img
//                 src='/assets/image.png'
//                 className='w-[20%] text-center'
//                 onClick={handleImageClick}
                
//               />
//             }
//           </div>
//         </>
//       )}
//       {row.card && (
//         <>
//           <label
//             className='absolute top-1 right-1 px-2 bg-opacity-75 rounded-3xl cursor-pointer hidden group-hover:block ease-in duration-300'
//             style={{ transform: 'translate(-50%, -50%)' }}
//             onClick={() => onRemoveRow(row.id)}
//             htmlFor={row.id}
//           >
//             <i className='fa-solid fa-xmark'></i>
//           </label>
//           <input
//             id={row.id}
//             type='text'
//             placeholder='Enter heading text'
//             className={`bg-transparent pt-${top} pr-${right} pl-${left} pb-${bottom} mt-${topm} mr-${rightm} ml-${leftm} mb-${bottomm} rounded outline-none w-full ${headingStyle} text-${colorStyle} text-${align}`}
//             style={{ color: colorStyle }}
//           // defaultValue="This will be heading"
//           />
//         </>
//       )}
//       {row.button && (
//         <>
//           <label
//             className='absolute top-1 right-1 px-2 bg-opacity-75 rounded-3xl cursor-pointer hidden group-hover:block ease-in duration-300'
//             style={{ transform: 'translate(-50%, -50%)' }}
//             onClick={() => onRemoveRow(row.id)}
//             htmlFor={row.id}
//           >
//             <i className='fa-solid fa-xmark'></i>
//           </label>
//           {/* <button className='btn bg-black ' style={{color:'white'}}>Enter Your Text</button> */}
//           <input type='text' className='px-2 py-2 bg-black outline-none text-center rounded' style={{color:'white'}} placeholder='Enter Button Text'/> 
//         </>
//       )}
//       {!row.heading && !row.image &&   !row.card && !row.button && (
//         <>
//           <label
//             className='absolute top-1 right-1 px-2 bg-opacity-75 rounded-3xl cursor-pointer hidden group-hover:block  ease-in duration-300'
//             style={{ transform: 'translate(-50%, -50%)' }}
//             onClick={() => onRemoveRow(row.id)}
//           >
//             <i className='fa-solid fa-xmark'></i>
//           </label>
//           <i className='fa-solid fa-plus' style={{ color: 'white' }}></i>
//         </>
//       )}
//     </div>
//   );
// };

// export default RowSection;
import React from 'react';
import DroppableColumn from './DroppableColumn';

const RowSection = ({
  rows,
  onRemoveRow,
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
  return (
    <div className='mt-2 flex flex-col'>
      {rows.map(row => (
        <div key={row.id} className='flex flex-row'>
          {row.columns.map((column, index) => (
            <DroppableColumn
              key={index}
              rowId={row.id}
              columnIndex={index}
              item={column}
              onDropItem={onDropItem}
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
          ))}
          <button
            className='bg-red-500 text-white'
            onClick={() => onRemoveRow(row.id)}
          >
            Remove Row
          </button>
        </div>
      ))}
    </div>
  );
};

export default RowSection;
