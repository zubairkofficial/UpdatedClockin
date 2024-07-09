import React, { useState } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

function SEOForm({ formData, handleInputChange, handleSubmit, isButtonLoading, updateMode, setListSection, removeFeature, handleFeatureChange, addFeature, setFormData }) {
  const [tags, setTags] = useState([])
  const handleChange = (t) => {
    setTags(t)
  }
  return (
    <div className="card mb-5 mb-xl-8 bg-slate-200" style={{ marginTop: "-4%" }}>
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">{updateMode ? 'Update SEO Content' : 'Add New SEO Content'}</span>
        </h3>
        <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back" style={{ color: "white" }}>
          <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl  duration-300" onClick={() => setListSection(true)}>
            <i className="fa fa-arrow-left"></i> Back
          </button>
        </div>
      </div>
      <div className="card-body py-3 m-5 rounded bg-gray-100">
        <form onSubmit={handleSubmit}>

          <label htmlFor="page_name" className="form-label">Enter Page Name</label>
          <select className="form-control mb-2" required name="page_name" id="page_name" value={formData.page_name} onChange={handleInputChange}>
            <option value="">Select Page Name</option>
            <option value="Home">Home Page</option>
            <option value="Download">Download Page</option>
            <option value="Faqs">FAQs Page</option>
            <option value="Support">Support Page</option>
            <option value="News">News & Article Page</option>
            <option value="Privacy">Privacy & Policy Page</option>
            <option value="Term">Terms & Conditions Page</option>
          </select>

          {[
            { id: 'schema_markup', label: 'Schema Markup', type: 'textarea', rows: 3 },
            { id: 'description', label: 'Description', type: 'input' },
            { id: 'canonical', label: 'Canonical', type: 'input' },
          ].map(({ id, label, type, rows }) => (
            <div className="mb-3" key={id}>
              <label htmlFor={id} className="form-label">{label}</label>
              {type === 'textarea' ? (
                <textarea
                  className="form-control"
                  id={id}
                  name={id}
                  rows={rows}
                  value={formData[id]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${label}`}
                ></textarea>
              ) : (
                <input
                  type="text"
                  className="form-control"
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleInputChange}
                  placeholder={`Enter ${label}`}
                />
              )}
            </div>
          ))}
          <label htmlFor="" className="form-label">Enter OG</label>
          {Array.isArray(formData.og) && formData.og.map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                name="property"
                value={item.property}
                onChange={(e) => handleFeatureChange(index, e)}
                className="form-control mr-2"
                placeholder="Property e.g, title , image , description"
              />
              <input
                type="text"
                name="content"
                value={item.content}
                onChange={(e) => handleFeatureChange(index, e)}
                className="form-control mr-2"
                placeholder="Content e.g, Insert Your Title Here"
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="bg-orange-500  p-2 rounded"
                style={{ color: "white" }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="bg-orange-500  p-2 rounded ml-5"
            style={{ color: "white" }}
          >
            Add OG
          </button> <br />
          <label htmlFor="" className="form-label">Enter Keywords</label>
          <TagsInput
            value={formData.keywords ? formData.keywords.split(',') : []}
            onChange={(tags) => setFormData({ ...formData, keywords: tags.join(',') })}
            name="keywords"
          />

          <div className="text-right">
            <button type="submit" className="bg-[#FF7A50] hover:bg-hover font-bold py-2 mt-5 px-6 rounded-xl  duration-300 text-right" style={{ color: "white" }}>
              {isButtonLoading ? 'Please wait ..' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SEOForm