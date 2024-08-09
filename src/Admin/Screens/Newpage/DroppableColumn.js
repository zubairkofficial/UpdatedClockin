import React, { useRef, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import HeadingComponent from "./NewPageContent/HeadingComponent";
import { usePage } from "../../../layouts/PageContext";
import { useRowColumnContext } from "../../../layouts/RowColumnContext";
const DroppableColumn = ({
  rowId,
  columnIndex,
  rowIndex,
  item,
  headingStyle,
  colorStyle,
  padding,
  margin,
  align,
  imagesize,
  imageradius,
  onDropItem,
  selectedElement,
  setSelectedElement,
  
}) => {

  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',
    drop: (draggedItem) => onDropItem(draggedItem, rowId, columnIndex),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    onDropItem(data, rowId, columnIndex);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };


  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef(null);
  const { width, height } = imagesize;
  const { formData, setFormData } = usePage();
  const [rows, setRows] = useState(formData.rows);
  const { top, right, left, bottom } = padding;
  const { top: topm, right: rightm, left: leftm, bottom: bottomm } = margin;
  const { setRowColumnData } = useRowColumnContext();

  useEffect(() => {
        setRowColumnData({ rowIndex, columnIndex });
    }, [rowIndex, columnIndex, setRowColumnData]);

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
    const file = e.target.files[0];
    setSelectedFile(file);

    // Update formData with the selected file
    const updatedRows = [...formData.rows];
    updatedRows[rowIndex].columns[columnIndex].content = file;
    setFormData({ ...formData, rows : updatedRows });
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleClick = () => {
    setSelectedElement({ rowIndex, columnIndex });
  };
  

  const handleFeatureChange = (rowIndex, columnIndex, e) => {
    const { name, value } = e.target;
    const updatedRows = [...formData.rows];
    updatedRows[rowIndex].columns[columnIndex][name] = value;
    setFormData({ ...formData, rows: updatedRows });
    console.log('Updated formData:', { ...formData, rows: updatedRows });
  };

  // const handleFeatureChange = (rowIndex, columnIndex, e) => {
  //   const { name, value } = e.target;
  //   const updatedRows = [...rows];
  //   updatedRows[rowIndex].columns[columnIndex][name] = value;
  //   setRows(updatedRows);
  //   setFormData({ ...formData, rows: updatedRows });
  //   console.log('Updated formData:', { ...formData, rows: updatedRows });
  // };

  const isSelected = selectedElement.rowIndex === rowIndex && selectedElement.columnIndex === columnIndex;
  // console.log(selectedElement)
  return (
    <div
      ref={drop}
      className={`flex-1 p-2 ${isOver ? 'bg-blue-200' : 'bg-none'} ${isSelected ? 'selected-style' : ''} rounded h-full`}
      style={{ border: 'dashed', borderWidth: '1px', borderColor: 'white' }}
      onClick={handleClick}
    >
      {item ? (
        <>
        {item.type === 'heading' && (
            <input
              type="text"
              className={`w-full h-full outline-none ${item.style.headingStyle}`}
              placeholder="Enter heading text"
              onChange={(e) => handleFeatureChange(rowIndex, columnIndex, e)}
              name="content"
              value={item.content}
              style={{
                color: item.style.color || '', 
                padding: `${item.style.padding.top}px ${item.style.padding.right}px ${item.style.padding.bottom}px ${item.style.padding.left}px`,
                margin: `${item.style.margin.top}px ${item.style.margin.right}px ${item.style.margin.bottom}px ${item.style.margin.left}px`,
                textAlign: item.style.alignment,
                background: 'none',
              }}
            />
          )}
          {item.type === 'image' && (
            <>
              <input
                type="file"
                className="hidden"
                onChange={onSelectFile}
                ref={fileInputRef}
              />
              {preview ? (
                <img
                  src={preview}
                  className="cursor-pointer"
                  style={{
                    width: `${item.style.size.width}%`,
                height: `${item.style.size.height}%`,
                borderRadius: `${item.style.radius}px`,
                    padding: `${item.style.padding.top}px ${item.style.padding.right}px ${item.style.padding.bottom}px ${item.style.padding.left}px`,
                margin: `${item.style.margin.top}px ${item.style.margin.right}px ${item.style.margin.bottom}px ${item.style.margin.left}px`,
                    textAlign: item.style.alignment,
                  }}
                  onClick={handleImageClick}
                />
              ) : (
                <img
                  src="/assets/image.png"
                  className="w-[20%] text-center cursor-pointer mx-auto invert"
                  onClick={handleImageClick}
                  style={{
                    padding: `${top}px ${right}px ${bottom}px ${left}px`,
                    margin: `${topm}px ${rightm}px ${bottomm}px ${leftm}px`,
                  }}
                />
              )}
            </>
          )}
          {item.type === 'textarea' && (
            <textarea
              placeholder="Enter Free Text Here"
              className="w-full outline-none "
              onChange={(e) => handleFeatureChange(rowIndex, columnIndex, e)}
              name="content"
              value={item.content}
              style={{
                color: item.style.color || 'white', 
                padding: `${item.style.padding.top}px ${item.style.padding.right}px ${item.style.padding.bottom}px ${item.style.padding.left}px`,
                margin: `${item.style.margin.top}px ${item.style.margin.right}px ${item.style.margin.bottom}px ${item.style.margin.left}px`,
                textAlign: item.style.alignment,
                background: 'none',
              }}
              // style={{
              //   padding: `${top}px ${right}px ${bottom}px ${left}px`,
              //   margin: `${topm}px ${rightm}px ${bottomm}px ${leftm}px`,
              //   background: 'none',
              //   color: 'white'
              // }}
            ></textarea>
          )}
          {item.type === 'button' && (
            <input
              type="text"
              className="bg-[#FF7A50] outline-none text-center font-bold py-2 px-4 rounded-xl transition duration-300"
              placeholder="Enter Button Text Here"
              onChange={(e) => handleFeatureChange(rowIndex, columnIndex, e)}
              name="content"
              value={item.content}
              style={{
                color: item.style.color || 'white', 
                padding: `${item.style.padding.top}px ${item.style.padding.right}px ${item.style.padding.bottom}px ${item.style.padding.left}px`,
                margin: `${item.style.margin.top}px ${item.style.margin.right}px ${item.style.margin.bottom}px ${item.style.margin.left}px`,
                textAlign: item.style.alignment,
              }}
            />
          )}
        </>
      ) : (
        <div
          className="flex items-center justify-center h-full"
          style={{ color: 'white' }}
        >
          Drop Here
        </div>
      )}
    </div>
  );
};

export default DroppableColumn;
