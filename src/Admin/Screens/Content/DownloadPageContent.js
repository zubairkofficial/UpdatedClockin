import React, { useEffect, useState } from 'react'
import Helpers from '../../../Config/Helpers';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
function DownloadPageContent() {
    const [download, setdownload] = useState([]);
    const [formData, setFormData] = useState({
        heading: '',
        subheading: '',
        version: [{ name: '' }],
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentPlanId, setCurrentPlanId] = useState(null);
    const [listSection, setListSection] = useState(true);

    useEffect(() => {
        fetchdownload();
    }, []);

    const fetchdownload = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}download/show`);
            setdownload(response.data.data);
        } catch (error) {
            console.error('Error fetching download', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFeatureChange = (index, e) => {
        const { name, value } = e.target;
        const version = [...formData.version];
        version[index][name] = value;
        setFormData({ ...formData, version });
    };

    const addFeature = () => {
        setFormData({
            ...formData,
            version: [...formData.version, { name: '', link: '' }]
        });
    };

    const removeFeature = (index) => {
        const version = [...formData.version];
        version.splice(index, 1);
        setFormData({ ...formData, version });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            version: JSON.stringify(formData.version)
        };
        try {
            if (isEditing) {
                await axios.post(`${Helpers.apiUrl}download/update/${currentPlanId}`, data);
            } else {
                await axios.post(`${Helpers.apiUrl}download/store`, data);
            }
            fetchdownload();
            resetForm();
            setListSection(true);
            Helpers.toast("success", 'Download Saved Successfully');
        } catch (error) {
            console.error('Error saving plan', error);
        }
    };

    const handleEdit = (download) => {
        setFormData({
            heading: download.heading,
            subheading: download.subheading,
            version: JSON.parse(download.version)
        });
        setCurrentPlanId(download.id);
        setIsEditing(true);
        setListSection(false);
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}download/delete/${id}`);
            fetchdownload();
            alert('Download deleted successfully');
        } catch (error) {
            console.error('Error deleting plan', error);
        }
    };

    const MySwal = withReactContent(Swal);

    const deleteContent = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true,
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-primary"
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
    const resetForm = () => {
        setFormData({
            heading: '',
            subheading: '',
            version: [{ name: '' }]
        });
        setIsEditing(false);
        setCurrentPlanId(null);
    };
    return (
        <div>
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                {listSection ? (
                    <div className="card mb-5 mb-xl-8 bg-slate-200" style={{marginTop:"-4%" }}>
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold fs-3 mb-1">Download Page Content</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a download">
                                <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300" onClick={() => { resetForm(); setListSection(false); }}>
                                    <i className="fa-light fa-plus"></i> New download
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3 m-3 rounded bg-gray-100">
                            <div className="table-responsive">
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr className="fw-bold text-muted">
                                        <th className="min-w-10px">#</th>
                                            <th className="min-w-150px">Heading</th>
                                            <th className="min-w-150px">Sub Heading</th>
                                            <th className="min-w-150px">Version</th>
                                            <th className="min-w-100px text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {download.map((download,index) => (
                                            <tr key={download.id}>
                                            <td>{index+1}</td>
                                                <td>{download.heading}</td>
                                                <td>{download.subheading}</td>
                                                <td>
                                                    {JSON.parse(download.version).map((item, index) => (
                                                        <div key={index} className="flex items-center mb-2">
                                                            <span className="mr-2">{item.name}</span>
                                                            {/* {item.link} */}
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="text-end">
                                                    <button onClick={() => handleEdit(download)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <i className="fa-light fa-pencil"></i>
                                                    </button>
                                                    <button onClick={() => deleteContent(download.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <i className="fa-light fa-trash"></i>
                                                    </button>
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
                                <span className="card-label fw-bold fs-3 mb-1">{isEditing ? 'Update download' : 'Add New download'}</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back">
                                <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300" onClick={() => setListSection(true)}>
                                    <i className="fa fa-arrow-left"></i> Back
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3 m-5 bg-gray-100 rounded">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="menu" className="form-label">Heading</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="menu"
                                        name="heading"
                                        value={formData.heading}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter Heading'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subheading" className="form-label">Sub heading</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subheading"
                                        name="subheading"
                                        value={formData.subheading}
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter Subheading'
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Version</label>
                                    {formData.version.map((item, index) => (
                                        <div key={index} className="flex items-center mb-2">
                                            <input
                                                type="text"
                                                name="name"
                                                value={item.name}
                                                onChange={(e) => handleFeatureChange(index, e)}
                                                className="form-control mr-2"
                                                placeholder="Name"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(index)}
                                                className="bg-orange-500 text-white p-2 rounded"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="bg-orange-500 text-white p-2 rounded"
                                    >
                                        Add Submenu
                                    </button>
                                </div>
                                <button type="submit" className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300">{isEditing ? 'Update download' : 'Add download'}</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DownloadPageContent