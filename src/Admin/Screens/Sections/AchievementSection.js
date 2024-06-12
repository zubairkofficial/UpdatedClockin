import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Helpers from '../../../Config/Helpers'
function AchievementSection() {
    const [achievements, setAchievement] = useState([]);
    const [listSection, setListSection] = useState(true);
    const [formData, setFormData] = useState({
        review: '',
        user_name: '',
        brand_logo: null,
        brand_preview : '',
        user_image: null,
        user_preview: '',
    });
    const [updateMode, setUpdateMode] = useState(false);
    const [currentAchievementId, setCurrentAchievementId] = useState(null);

    const getAchievements = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}achievements/show`);
            setAchievement(response.data.data);
        } catch (error) {
            console.log("error in fetching data", error);
        }
    };
    const resetForm = () => {
        setFormData({
            review: '',
            user_name: '',
            brand_logo: null,
            user_image: null,
        });
        setCurrentAchievementId(null);
    };

    useEffect(() => {
        getAchievements();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, brand_logo: e.target.files[0] });
    };
    const handleImageChange1 = (e) => {
        setFormData({ ...formData, user_image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('brand_logo', formData.brand_logo);
        form.append('review', formData.review);
        form.append('user_image', formData.user_image);
        form.append('user_name', formData.user_name);

        try {
            const response = await axios.post(`${Helpers.apiUrl}achievements/store`, form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            Helpers.toast("success","Added Successfuly")
            getAchievements(); 
            setListSection(true); 
        } catch (error) {
            console.log("error in adding Achievement", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}achievements/delete/${id}`);
            Helpers.toast("success","Deleted Successfuly")
            getAchievements(); 
        } catch (error) {
            console.log("error in deleting Achievement", error);
        }
    };

    const handleEdit = (achievement) => {
        setFormData({
            brand_logo: null,
            review: achievement.review,
            user_name: achievement.user_name,
            user_image: null ,
            
        });
        setCurrentAchievementId(achievement.id);
        setUpdateMode(true);
        setListSection(false);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('review', formData.review);
        form.append('user_name', formData.user_name);
        if (formData.brand_logo) {
            form.append('brand_logo', formData.brand_logo);
        }
        if (formData.user_image) {
            form.append('user_image', formData.user_image);
        }
        try {
            const response = await axios.post(`${Helpers.apiUrl}achievements/update/${currentAchievementId}`, form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            Helpers.toast("success","Updated Successfuly")
            getAchievements();
            setUpdateMode(false);
            setListSection(true); 
        } catch (error) {
            console.log("error in updating Achievement", error);
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
                                <span className="card-label fw-bold fs-3 mb-1">Our Achievements</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Achievements">
                                <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300" onClick={() => { setListSection(false); setUpdateMode(false); }}>
                                    <i className="fa-light fa-plus"></i> New Achievements
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3 m-5 rounded bg-gray-100">
                            <div className="table-responsive">
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr className="fw-bold text-muted">
                                            <th className="min-w-100px">Brand Logo</th>
                                            <th className="min-w-150px">Review</th>
                                            <th className="min-w-150px">User Image</th>
                                            <th className="min-w-150px">User Name</th>
                                            <th className="min-w-100px text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {achievements.map(achievement => (
                                            <tr key={achievement.id}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-45px me-5 bg-pinkbackground p-2">
                                                            <img src={`${Helpers.basePath}/storage/${achievement.brand_logo}`} alt="" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6">{achievement.review}</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-45px me-5 bg-pinkbackground p-2">
                                                            <img src={`${Helpers.basePath}/storage/${achievement.user_image}`} alt="" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6">{achievement.user_name}</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-end flex-shrink-0">
                                                        <button onClick={() => handleEdit(achievement)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            <i className="fa-light fa-pencil"></i>
                                                        </button>
                                                        <button onClick={() => handleDelete(achievement.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                                <span className="card-label fw-bold fs-3 mb-1">{updateMode ? 'Update Achievement' : 'Add New Achievement'}</span>
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
                                    <label htmlFor="heading" className="form-label">Brand Logo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="brand_logo"
                                        name="brand_logo"
                                        onChange={handleImageChange}
                                        required={!updateMode} // Make it required only in add mode
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paragraph" className="form-label">Review</label>
                                    <textarea
                                        className="form-control"
                                        id="review"
                                        name="review"
                                        rows="3"
                                        value={formData.review}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="heading" className="form-label">User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="user_name"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">User Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="user_image"
                                        name="user_image"
                                        onChange={handleImageChange1}
                                        required={!updateMode} // Make it required only in add mode
                                    />
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

export default AchievementSection