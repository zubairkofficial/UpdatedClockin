import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from './../../../layouts/Loader.js'
import Helpers from '../../../Config/Helpers'

function FeatureSection() {
    const [features, setFeatures] = useState([]);
    const [listSection, setListSection] = useState(true);
    
    const [isLoading, setIsLoading] = useState(false)
    const [isbuttonLoading, setIsbuttonLoading] = useState(false)
    const [formData, setFormData] = useState({
        heading: '',
        paragraph: '',
        image: null,
        imageUrl: ''
    });
    const [updateMode, setUpdateMode] = useState(false);
    const [currentFeatureId, setCurrentFeatureId] = useState(null);

    const getFeatures = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${Helpers.apiUrl}getfeature`);
            setFeatures(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log("error in fetching data", error);
        }
    };

    useEffect(() => {
        getFeatures();
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
        form.append('heading', formData.heading);
        form.append('paragraph', formData.paragraph);
        form.append('image', formData.image);
        setIsbuttonLoading(true)
        try {
            const response = await axios.post(`${Helpers.apiUrl}addfeature`, form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setIsbuttonLoading(false)
            getFeatures();
            setListSection(true);
        } catch (error) {
            console.log("error in adding feature", error);
            setIsbuttonLoading(false)
        }
    };

    const MySwal = withReactContent(Swal);

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}deletefeature/${id}`);
            getFeatures();
        } catch (error) {
            console.log("error in deleting feature", error);
        }
    };

    const deleteFeature = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
            customClass: {
                confirmButton: "px-3 py-2  text-green-100 bg-red-500 rounded-lg",
                cancelButton: "px-3 py-2  text-green-100 mr-3 bg-green-500 rounded-lg"
            },
            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
                MySwal.fire({
                    title: "Deleted!",
                    text: "Your data has been deleted.",
                    icon: "success"
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                MySwal.fire({
                    title: "Cancelled",
                    text: "Your data is safe :)",
                    icon: "error"
                });
            }
        });
    };

    const handleEdit = (feature) => {
        setFormData({
            heading: feature.heading,
            paragraph: feature.paragraph,
            image: null,
            imageUrl: feature.image,
        });
        setCurrentFeatureId(feature.id);
        setUpdateMode(true);
        setListSection(false);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('heading', formData.heading);
        form.append('paragraph', formData.paragraph);
        if (formData.image) {
            form.append('image', formData.image);
        }

        try {
            const response = await axios.post(`${Helpers.apiUrl}updatefeature/${currentFeatureId}`, form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            getFeatures();
            setUpdateMode(false);
            setListSection(true);
        } catch (error) {
            console.log("error in updating feature", error);
        }
    };
    const resetForm = () => {
        setFormData({
            heading: '',
            paragraph: '',
            image: null,
        });
    };
    return (
        <div>
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                {isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        {listSection ? (
                            <div className="card mb-5 mb-xl-8 bg-slate-200" style={{marginTop:"-4%" }}>
                                <div className="card-header border-0 pt-5">
                                    <h1 className="card-title align-items-start flex-column">
                                        <h1 className="card-label fw-bold fs-3 mb-1">Application Features</h1>
                                    </h1>
                                    <div className="card-toolbar" style={{color:"white"}} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a feature">
                                        <button className="bg-[#FF7A50] hover:bg-hover text-white font-bold py-2 px-6 rounded-xl  duration-300" onClick={() => { setListSection(false); resetForm(); setUpdateMode(false); }}>
                                            <i className="fa-light fa-plus"></i> New Feature
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body py-3 m-5 rounded bg-gray-100">
                                    <div className="table-responsive">
                                        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            <thead>
                                                <tr className="fw-bold text-muted">
                                                <th className="min-w-10px">#</th>
                                                    <th className="min-w-70px">Image</th>
                                                    <th className="min-w-150px">Heading</th>
                                                    <th className="min-w-150px">Paragraph</th>
                                                    <th className="min-w-100px text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {features.map((feature , index) => (
                                                    <tr key={feature.id}>
                                                    <td>{index+1}</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="symbol symbol-45px me-5 bg-pinkbackground p-2">
                                                                    <img src={`${Helpers.basePath}/storage/${feature.image}`} alt="" />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6">{feature.heading}</a>
                                                        </td>
                                                        <td className="">
                                                            <div className="d-flex flex-column w-100 me-2">
                                                                <div className="d-flex flex-start mb-2">
                                                                    <span className="text-muted me-2 fs-7 fw-bold">
                                                                        <p>{feature.paragraph}</p>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-end flex-shrink-0">
                                                                <button onClick={() => handleEdit(feature)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                    <i className="fa-light fa-pencil"></i>
                                                                </button>
                                                                <button onClick={() => deleteFeature(feature.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                            <div className="card mb-5 mb-xl-8 bg-slate-200" style={{marginTop:"-4%" }}>
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">{updateMode ? 'Update Feature' : 'Add New Feature'}</span>
                                    </h3>
                                    <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back" style={{color:"white"}} >
                                        <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl  duration-300" onClick={() => setListSection(true)} >
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
                                                name="heading"
                                                value={formData.heading}
                                                onChange={handleInputChange}
                                                placeholder='Enter Title'
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="paragraph" className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                id="paragraph"
                                                name="paragraph"
                                                rows="3"
                                                value={formData.paragraph}
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
                                                required={!updateMode}
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
                                        <div className='text-right'>
                                        <button type="submit" className="bg-[#FF7A50] hover:bg-hover  font-bold py-2 px-6 rounded-xl  duration-300 text-right" style={{color:"white"}} >{isbuttonLoading ? 'Please wait ...' :  'Submit'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeatureSection