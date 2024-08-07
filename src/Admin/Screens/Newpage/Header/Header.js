import {React , useState} from 'react'
import { usePage } from '../../../../layouts/PageContext';
import Helpers from '../../../../Config/Helpers';
import axios from 'axios';

const Header = () => {
    const { formData, setFormData } = usePage();
  
    const handlePublish = async () => {
      console.log('Publishing formData:', formData);
      const createFormData = (data, formData = new FormData(), parentKey = '') => {
        if (typeof data === 'object' && data !== null && !(data instanceof File)) {
          Object.keys(data).forEach(key => {
            createFormData(data[key], formData, parentKey ? `${parentKey}[${key}]` : key);
          });
        } else {
          formData.append(parentKey, data);
        }
        return formData;
      };

const data = createFormData(formData);
      try {
          const response = await axios.post(`${Helpers.apiUrl}page/store`, data, {
            headers: {
              // 'Content-Type': 'application/json',
              "Content-Type": 'multipart/form-data',
            },
          });
        console.log('Data stored:', response);
        Helpers.toast("success",'Data Stored' )
      } catch (error) {
        console.error('Error storing data:', error);
        Helpers.toast("error", error.response.data.message);
      }
    };
    
    return (
      <div>
        <div className="bg-[#222626] flex justify-between">
          <button className="btn" style={{ color: 'white' }}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </button>
          <input
            type="text"
            placeholder="Enter Page Title"
            className="outline-none p-2 rounded-md bg-[#2e2e2e] text-center"
            style={{ color: 'white' }}
            onChange={(e) => setFormData({ ...formData, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
          />
          <div className="flex items-center justify-between" style={{ marginRight: '3%' }}>
            <button className="btn" style={{ color: "white", background: "green" }} onClick={handlePublish}>
              Publish
            </button>
            {/* <button className="btn" style={{ color: "white" }} onClick={addRow}>
              Add Row
            </button>
            <button className="btn" style={{ color: "white" }} onClick={() => addColumn(0)}>
              Add Column
            </button> */}
          </div>
        </div>
      </div>
    );
  };
  
export default Header