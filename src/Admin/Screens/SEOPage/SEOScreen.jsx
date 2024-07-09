import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import axios from 'axios';
import Helpers from '../../../Config/Helpers';
import SEOForm from './SEOForm';

function SEOScreen() {
    const [listSection, setListSection] = useState(true);
        const [formData, setFormData] = useState({
            id: '',
            title: '',
            description: '',
            keywords: '',
            canonical: '',
            og: [{ property: '', content: '' }],
            page_name: '',
            schema_markup: '',
        });
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);
    const [seoList, setSeoList] = useState([]);

    useEffect(() => {
        fetchSeoData();
        document.title = "SEO Admin Panel";
    }, []);

    const fetchSeoData = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}seo/showadmin`);
            setSeoList(response.data.data);
            console.log('es',response.data.data)
        } catch (error) { 
            console.error('Error fetching SEO data:', error);
        }
    };
    const handleFeatureChange = (index, e) => {
        const { name, value } = e.target;
        const og = [...formData.og];
        og[index][name] = value;
        setFormData({ ...formData, og });
    };

    const addFeature = () => {
        setFormData({
            ...formData,
            og: [...formData.og, { property: '', content: '' }]
        });
    };

    const removeFeature = (index) => {
        const og = [...formData.og];
        og.splice(index, 1);
        setFormData({ ...formData, og });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const data = {
            ...formData,
            og: JSON.stringify(formData.og)
        };
        try {
            if (data.id) {
                await axios.post(`${Helpers.apiUrl}seo/update/${formData.id}`, data);
            } else {
                await axios.post(`${Helpers.apiUrl}seo/store`, data);
            }
            setIsButtonLoading(false);
            setListSection(true);
            setFormData({
                id: '',
                title: '',
                description: '',
                keywords: '',
                canonical: '',
                og: '',
                page_name: '',
                schema_markup : ''
            });
            setUpdateMode(false);
            fetchSeoData();
        } catch (error) {
            console.error('Error updating or storing SEO content:', error);
            setIsButtonLoading(false);
        }
    };

    const handleEdit = (seo) => {
        setFormData({
            id: seo.id || '',
            title: seo.title || '',
            description: seo.description || '',
            keywords: seo.keywords || '',
            canonical: seo.canonical || '',
            og: seo.og || '',
            og: JSON.parse(seo.og),
            page_name: seo.page_name || '',
            schema_markup: seo.schema_markup || '',
        });
        setUpdateMode(true);
        setListSection(false);
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}seo/delete/${id}`);
            fetchSeoData();
        } catch (error) {
            console.error('Error deleting SEO content:', error);
        }
    };
    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            keywords: '',
            og: '',
            canonical: '',
            schema_markup: '',
        });
    };

    return (
        <div>
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                <div className="card mb-5 mb-xl-8 bg-slate-200" style={{ marginTop: "-4%" }}>
                    <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold fs-3 mb-1">SEO</span>
                        </h3>
                        <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Achievements" style={{ color: "white" }} >
                            <button className="bg-[#FF7A50] hover:bg-hover text-white dark:text-black font-bold py-2 px-6 rounded-xl  duration-300" onClick={() => { setListSection(false); setUpdateMode(false); resetForm() }}>
                                <i className="fa-light fa-plus"></i> New SEO
                            </button>
                        </div>
                    </div>
                    {listSection ? (
                        <div className="card-body py-3 m-5 rounded bg-gray-100">
                            <div className="table-responsive">
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr className="fw-bold text-muted">
                                            <th className="min-w-10px">#</th>
                                            <th className="min-w-100px">Page Name</th>
                                            <th className="min-w-100px text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {seoList.map((seo, index) => (
                                            <tr key={seo.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6">{seo.page_name}</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-end flex-shrink-0">
                                                        <button className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" onClick={() => handleEdit(seo)}>
                                                            <i className="fas fa-pencil-alt"></i>
                                                        </button>
                                                        <button className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" onClick={() => handleDelete(seo.id)}>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <SEOForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            isButtonLoading={isButtonLoading}
                            updateMode={updateMode}
                            setListSection={setListSection}
                            handleFeatureChange={handleFeatureChange}
                            removeFeature={removeFeature}
                            addFeature={addFeature}
                            setFormData={setFormData}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SEOScreen