import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Helpers from '../../../Config/Helpers'
function FAQSection() {
  const [faqs, setfaqs] = useState([]);
  const [listSection, setListSection] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null
  });
  const [updateMode, setUpdateMode] = useState(false);
  const [currentFeatureId, setCurrentFaqId] = useState(null);

  const getfaqs = async () => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}faqs/show`);
      // console.log(response);
      setfaqs(response.data.data);
    } catch (error) {
      console.log("error in fetching data", error);
    }
  };

  useEffect(() => {
    getfaqs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('image', formData.image);

    try {
      const response = await axios.post(`${Helpers.apiUrl}faqs/store`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      getfaqs();
      setListSection(true);
    } catch (error) {
      console.log("error in adding faq", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.get(`${Helpers.apiUrl}faqs/delete/${id}`);
      getfaqs();
    } catch (error) {
      console.log("error in deleting faq", error);
    }
  };

  const handleEdit = (faq) => {
    setFormData({
      title: faq.title,
      description: faq.description,
      image: null
    });
    setCurrentFaqId(faq.id);
    setUpdateMode(true);
    setListSection(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    if (formData.image) {
      form.append('image', formData.image);
    }

    try {
      const response = await axios.post(`${Helpers.apiUrl}faqs/update/${currentFeatureId}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      getfaqs();
      setUpdateMode(false);
      setListSection(true);
    } catch (error) {
      console.log("error in updating faq", error);
    }
  };
  return (
    <div>
      <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
        <Sidebar />
        {listSection ? (
          <div className="card mb-5 mb-xl-8 bg-slate-200">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold fs-3 mb-1">Application faqs</span>
              </h3>
              <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a faq">
                <button className="btn btn-sm btn-light btn-active-primary" onClick={() => { setListSection(false); setUpdateMode(false); }}>
                  <i className="fa-light fa-plus"></i> New FAQS
                </button>
              </div>
            </div>
            <div className="card-body py-3 m-5 rounded bg-gray-100">
              <div className="table-responsive">
                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                  <thead>
                    <tr className="fw-bold text-muted">
                      <th className="min-w-70px">Image</th>
                      <th className="min-w-150px">Title</th>
                      <th className="min-w-150px">Description</th>
                      <th className="min-w-100px text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faqs.map(faq => (
                      <tr key={faq.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5 bg-pinkbackground p-2">
                              <img src={`${Helpers.basePath}/storage/${faq.image}`} alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6">{faq.title}</a>
                        </td>
                        <td className="">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-start ">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                <p>{faq.description}</p>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <button onClick={() => handleEdit(faq)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                              <i className="fa-light fa-pencil"></i>
                            </button>
                            <button onClick={() => handleDelete(faq.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                              <i className="fa-light fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="card mb-5 mb-xl-8 bg-slate-200">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold fs-3 mb-1">{updateMode ? 'Update FAQ' : 'Add New FAQ'}</span>
              </h3>
              <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back">
                <button className="btn btn-sm btn-light btn-active-primary" onClick={() => setListSection(true)}>
                  <i className="fa fa-arrow-left"></i> Back
                </button>
              </div>
            </div>
            <div className="card-body py-3">
              <form onSubmit={updateMode ? handleUpdate : handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="heading" className="form-label">Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    id="heading"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="paragraph" className="form-label">Paragraph</label>
                  <textarea
                    className="form-control"
                    id="paragraph"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    required={!updateMode} // Make it required only in add mode
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FAQSection