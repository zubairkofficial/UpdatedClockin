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
  useEffect(() => {
    getData()
  }, [])

  useEffect(() =>{
    if(data && data.name){
      document.title = data.name
    }
  },[data])

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
              {/* <h1>{data.name}</h1> */}
              <div className='container mx-auto p-5 m-5'>
                {data.rows && data.rows.length > 0 ? (
                  data.rows.map((row) => (
                    <div key={row.id} className='row block md:flex justify-between'>
                      {row.columns && row.columns.length > 0 ? (
                        row.columns.map((column) => {
                          const columnData = JSON.parse(column.data);
                          return (
                            <div key={column.id} className='column p-5 w-[100%] md:w-[50%] '>
                              <div className='content'>
                                {columnData.content && columnData.content.startsWith('newpage/') ? (
                                  <img src={`${Helpers.basePath}/storage/${columnData.content}`} alt="content" />
                                ) : (
                                  columnData.content
                                )}
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