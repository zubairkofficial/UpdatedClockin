import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Helpers from '../../../Config/Helpers'

function NewsPageSection() {
  const [news, setnews] = useState([]);
  const [listSection, setListSection] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    slug: '',
    image: null,
    imageUrl: '',
  });
  const [updateMode, setUpdateMode] = useState(false);
  const [currentNewsId, setCurrentNewsId] = useState(null);

  const getnews = async () => {
    try {
      const response = await axios.get(`${Helpers.apiUrl}news/show`);
      setnews(response.data.data);
    } catch (error) {
      console.log("error in fetching data", error);
    }
  };

  useEffect(() => {
    getnews();
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
    form.append('slug', formData.slug);
    form.append('description', formData.description);
    form.append('image', formData.image);

    try {
      const response = await axios.post(`${Helpers.apiUrl}news/store`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      getnews();
      setListSection(true);
    } catch (error) {
      console.log("error in adding news", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.get(`${Helpers.apiUrl}news/delete/${id}`);
      getnews();
    } catch (error) {
      console.log("error in deleting news", error);
    }
  };

  const handleEdit = (news) => {
    setFormData({
      title: news.title,
      slug: news.slug,
      description: news.description,
      image: null,
      imageUrl: news.image,
    });
    setCurrentNewsId(news.id);
    setUpdateMode(true);
    setListSection(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('slug', formData.slug);
    if (formData.image) {
      form.append('image', formData.image);
    }

    try {
      const response = await axios.post(`${Helpers.apiUrl}news/update/${currentNewsId}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      getnews();
      setUpdateMode(false);
      setListSection(true);
    } catch (error) {
      console.log("error in updating news", error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      image: null,
    });
  };
  return (
    <div>
      <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
        <Sidebar />
        {listSection ? (
          <div className="card mb-5 mb-xl-8 bg-slate-200">
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold fs-3 mb-1">Application news</span>
              </h3>
              <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a News">
                <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300" onClick={() => { setListSection(false); setUpdateMode(false); resetForm() }}>
                  <i className="fa-light fa-plus"></i> New news
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
                      <th className="min-w-150px">Slug</th>
                      <th className="min-w-100px text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {news.map(news => (
                      <tr key={news.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-45px me-5 bg-pinkbackground p-2">
                              <img src={`${Helpers.basePath}/storage/${news.image}`} alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6">{news.title}</a>
                        </td>
                        <td className="">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-start ">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                <p>{news.description}</p>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="d-flex flex-column w-100 me-2">
                            <div className="d-flex flex-start ">
                              <span className="text-muted me-2 fs-7 fw-bold">
                                <p>{news.slug}</p>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex justify-content-end flex-shrink-0">
                            <button onClick={() => handleEdit(news)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                              <i className="fa-light fa-pencil"></i>
                            </button>
                            <button onClick={() => handleDelete(news.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                <span className="card-label fw-bold fs-3 mb-1">{updateMode ? 'Update News' : 'Add New News'}</span>
              </h3>
              <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back">
                <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300" onClick={() => setListSection(true)}>
                  <i className="fa fa-arrow-left"></i> Back
                </button>
              </div>
            </div>
            <div className="card-body py-3 m-5 rounded bg-gray-100">
              <form onSubmit={updateMode ? handleUpdate : handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="heading" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="heading"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder='Enter title'
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="slug" className="form-label">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder='Enter Slug'
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="paragraph" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="paragraph"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder='Enter Description'
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
                  {formData.imageUrl && (
                    <div className='bg-background w-20 rounded m-3 p-3' >
                      <img src={`${Helpers.basePath}/storage/${formData.imageUrl}`} alt="Preview" style={{ width: '80px', height: '80px' }} />
                      <input
                        type="hidden"
                        name="existingImage"
                        value={`${Helpers.basePath}/storage/${formData.imageUrl}`}
                      />
                    </div>
                  )}
                </div>
                <button type="submit" className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsPageSection