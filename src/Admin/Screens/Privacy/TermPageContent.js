import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Helpers from '../../../Config/Helpers';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Sidebar from '../../Components/Sidebar';
import Loader from '../../../layouts/Loader';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditorComponent from './CKEditorComponent';


function TermPageContent() {
    const [Term, setTerm] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isbuttonLoading, setIsbuttonLoading] = useState(false)
    const [listSection, setListSection] = useState(true);
    const [formData, setFormData] = useState({
        content: '',
    });
    const [updateMode, setUpdateMode] = useState(false);
    const [currentTermId, setCurrentTermId] = useState(null);

    const getTerm = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${Helpers.apiUrl}term/show`);
            setTerm(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log("error in fetching data", error);
        }
    };
    const resetForm = () => {
        setFormData({
            content: '',
        });
        setCurrentTermId(null);
    };

    useEffect(() => {
        getTerm();
    }, []);

    const handleInputChange = (value) => {
        setFormData({ ...formData, content: value });
    };


    const handleSubmit = async (e) => {
        setIsbuttonLoading(true)
        e.preventDefault();
        const form = new FormData();
        form.append('content', formData.content);

        try {
            const response = await axios.post(`${Helpers.apiUrl}term/store`, form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            Helpers.toast("success", "Added Successfuly")
            setIsbuttonLoading(false)
            getTerm();
            setListSection(true);
        } catch (error) {
            setIsbuttonLoading(false)
            console.log("error in adding Term", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}term/delete/${id}`);
            Helpers.toast("success", "Deleted Successfuly")
            getTerm();
        } catch (error) {
            console.log("error in deleting Term", error);
        }
    };

    const MySwal = withReactContent(Swal);

    const deleteTerm = (id) => {
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
    const handleEdit = (Term) => {
        setFormData({
            content: Term.content,
        });
        setCurrentTermId(Term.id);
        setUpdateMode(true);
        setListSection(false);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('content', formData.content);

        try {
            const response = await axios.post(`${Helpers.apiUrl}term/update/${currentTermId}`, form, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            Helpers.toast("success", "Updated Successfuly")
            getTerm();
            setUpdateMode(false);
            setListSection(true);
        } catch (error) {
            console.log("error in updating Term", error);
        }
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
                            <div className="card mb-5 mb-xl-8 bg-slate-200" style={{ marginTop: "-4%" }}>
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">Our Term</span>
                                    </h3>
                                    <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Term" style={{ color: "white" }} >
                                        <button className="bg-[#FF7A50]  text-white dark:text-black font-bold py-2 px-6 rounded-xl  duration-300" onClick={() => { setListSection(false); setUpdateMode(false); resetForm() }}>
                                            <i className="fa-light fa-plus"></i> New Term
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body py-3 m-5 rounded bg-gray-100">
                                    <div className="table-responsive">
                                        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            <thead>
                                                <tr className="fw-bold text-muted">
                                                    <th className="min-w-10px">#</th>
                                                    <th className="min-w-100px">Content</th>
                                                    <th className="min-w-100px text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Term.map((Term, index) => (
                                                    <tr key={Term.id}>
                                                        <td>{index + 1}</td>

                                                        <td>
                                                            <a href="#" className="text-gray-900 fw-bold text-hover-primary d-block fs-6" dangerouslySetInnerHTML={{ __html: Term.content }}></a>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-end flex-shrink-0">
                                                                <button onClick={() => handleEdit(Term)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                    <i className="fa-light fa-pencil"></i>
                                                                </button>
                                                                <button onClick={() => deleteTerm(Term.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                            <div className="card mb-5 mb-xl-8 bg-slate-200" style={{ marginTop: "-4%" }}>
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">{updateMode ? 'Update Term' : 'Add New Term'}</span>
                                    </h3>
                                    <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back" style={{ color: "white" }} >
                                        <button className="bg-[#FF7A50]  text-white dark:text-black font-bold py-2 px-6 rounded-xl  duration-300" onClick={() => setListSection(true)}>
                                            <i className="fa fa-arrow-left"></i> Back
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body py-3 m-5 rounded bg-gray-100">
                                    <form onSubmit={updateMode ? handleUpdate : handleSubmit}>

                                        <div className="mb-3">
                                            <label htmlFor="paragraph" className="form-label">Content</label>
                                            <CKEditorComponent
                                                value={formData.content}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='text-right'>
                                            <button type="submit" className="bg-[#FF7A50]  font-bold py-2 px-6 rounded-xl  duration-300" style={{ color: "white" }} >{isbuttonLoading ? 'Please wait ..' : 'Submit'}</button>
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

export default TermPageContent