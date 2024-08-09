import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Helpers from '../../../../Config/Helpers'
import { useParams } from 'react-router-dom'
import Header from '../../../../layouts/Header'
import { ThemeContext } from '../../../../layouts/ThemeContext'

function PreviewScreen() {
  const [data, setData] = useState([])
  const { isLightMode } = useContext(ThemeContext);
  const { page_id } = useParams()
  const getData = async () => {
    const response = await axios.get(`${Helpers.apiUrl}page/show/${page_id}`)
    setData(response.data)
    console.log(response.data)
  }
  const renderHeading = (content, headingStyle, style) => {
    const styles = {
      padding: `${style?.padding?.top ?? 0}px ${style?.padding?.right ?? 0}px ${style?.padding?.bottom ?? 0}px ${style?.padding?.left ?? 0}px`,
      margin: `${style?.margin?.top ?? 0}px ${style?.margin?.right ?? 0}px ${style?.margin?.bottom ?? 0}px ${style?.margin?.left ?? 0}px`,
      color: style?.color ?? 'inherit',
      textAlign: style?.alignment ?? 'left',
    };

    switch (headingStyle) {
      case 'h1':
        return <h1 className="text-4xl font-semibold" style={styles}>{content}</h1>;
      case 'h2':
        return <h2 className="text-3xl" style={styles}>{content}</h2>;
      case 'h3':
        return <h3 className="text-2xl" style={styles}>{content}</h3>;
      default:
        return <div style={styles}>{content}</div>;
    }
  };

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (data && data.name) {
      document.title = data.name
    }
  }, [data])
  const renderImage = (content, style) => {
    const styles = {
      width: `${style?.size?.width ?? 100}%`,
      height: `${style?.size?.height ?? 'auto'}`,
      borderRadius: `${style?.radius ?? 0}px`,
    };

    return <img src={`${Helpers.basePath}/storage/${content}`} alt="content" style={styles} />;
  };

  const renderTextarea = (content, style) => {
    const styles = {
      padding: `${style?.padding?.top ?? 0}px ${style?.padding?.right ?? 0}px ${style?.padding?.bottom ?? 0}px ${style?.padding?.left ?? 0}px`,
      margin: `${style?.margin?.top ?? 0}px ${style?.margin?.right ?? 0}px ${style?.margin?.bottom ?? 0}px ${style?.margin?.left ?? 0}px`,
      color: style?.color ?? 'inherit',
      textAlign: style?.alignment ?? 'left',
    };

    return <p style={styles}>{content}</p>;
  };

  const renderButton = (content, style) => {
    const styles = {
      padding: `${style?.padding?.top ?? 5}px ${style?.padding?.right ?? 40}px ${style?.padding?.bottom ?? 5}px ${style?.padding?.left ?? 40}px`,
      margin: `${style?.margin?.top ?? 0}px ${style?.margin?.right ?? 0}px ${style?.margin?.bottom ?? 0}px ${style?.margin?.left ?? 0}px`,
      color: style?.color ?? '#000',
      textAlign: style?.alignment ?? 'center',
      backgroundColor: '#007bff',
      borderRadius: `${style?.radius ?? 5}px`,
      display: 'inline-block',
      backgroundColor: '#FF7A50'
    };

    return <button style={styles}>{content}</button>;
  };

  const renderColumnContent = (columnData) => {
    switch (columnData.type) {
      case 'heading':
        return renderHeading(columnData.content, columnData.style.headingStyle, columnData.style);
      case 'image':
        return renderImage(columnData.content, columnData.style);
      case 'textarea':
        return renderTextarea(columnData.content, columnData.style);
      case 'button':
        return renderButton(columnData.content, columnData.style);
      default:
        return <div>{columnData.content}</div>;
    }
  };

  const getColumnWidth = (numColumns) => {
    switch (numColumns) {
      case 1:
        return '100%';
      case 2:
        return '50%';
      case 3:
        return '33.33%';
      default:
        return '100%';
    }
  };

  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat h-screen w-full relative"
        style={{
          backgroundImage: `url(${isLightMode ? "/assets/bg1.png" : "/assets/bg2.png"
            })`,
        }}>
        <Header />
        <div>
          {data ? (
            <div>
              <div className='container mx-auto p-5 m-5'>
                {data.rows && data.rows.length > 0 ? (
                  data.rows.map((row) => (
                    <div key={row.id} className='row flex flex-wrap justify-between'>
                      {row.columns && row.columns.length > 0 ? (
                        row.columns.map((column) => {
                          const columnData = JSON.parse(column.data);
                          const columnWidth = getColumnWidth(row.columns.length);
                          return (
                            <div key={column.id} className='column p-5' style={{ width: columnWidth }}>
                              <div className='content'>
                                {renderColumnContent(columnData)}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <p>No columns available</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No rows available</p>
                )}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default PreviewScreen