import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Helpers from '../../../Config/Helpers';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Sidebar from '../../Components/Sidebar';

function StatSectionContent() {
    const [stat, setStat] = useState([]);
    const [formData, setFormData] = useState({
        total_task: '',
        task_completed: '',
        remaining_task: '',
        heading: '',
        content: [{ subheading: '', desc: '' }],
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentStatId, setCurrentStatId] = useState(null);
    const [listSection, setListSection] = useState(true);

    useEffect(() => {
        fetchStat();
    }, []);

    const fetchStat = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}stat/show`);
            setStat(response.data.data);
        } catch (error) {
            console.error('Error fetching stat', error);
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
        const content = [...formData.content];
        content[index][name] = value;
        setFormData({ ...formData, content });
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}stat/delete/${id}`);
            fetchStat();
            // alert('Stat deleted successfully');
        } catch (error) {
            console.error('Error deleting Stat', error);
        }
    };
    const MySwal = withReactContent(Swal);

    const deletePlan = (id) => {
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

    const addFeature = () => {
        setFormData({
            ...formData,
            content: [...formData.content, { subheading: '', desc: '' }]
        });
    };

    const removeFeature = (index) => {
        const content = [...formData.content];
        content.splice(index, 1);
        setFormData({ ...formData, content });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            content: JSON.stringify(formData.content)
        };
        try {
            if (isEditing) {
                await axios.post(`${Helpers.apiUrl}stat/update/${currentStatId}`, data);
            } else {
                await axios.post(`${Helpers.apiUrl}stat/store`, data);
            }
            fetchStat();
            resetForm();
            setListSection(true);
            Helpers.toast("success", 'Stat Saved Successfully');
        } catch (error) {
            console.error('Error saving stat', error);
        }
    };

    const resetForm = () => {
        setFormData({
            total_task: '',
            task_completed: '',
            remaining_task: '',
            heading: '',
            content: [{ subheading: '', desc: '' }],
        });
        setIsEditing(false);
        setCurrentStatId(null);
    };

    const handleEdit = (stat) => {
        setFormData({
            total_task: stat.total_task,
            task_completed: stat.task_completed,
            remaining_task: stat.remaining_task,
            heading: stat.heading,
            content: JSON.parse(stat.content),
        });
        setIsEditing(true);
        setCurrentStatId(stat.id);
        setListSection(false);
    };

    return (
        <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
            <Sidebar />
            {listSection ? (
                <div className="card mb-5 mb-xl-8 bg-slate-200" style={{ marginTop: "-4%" }}>
                    <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold fs-3 mb-1">Stat</span>
                        </h3>
                        <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a stat">
                            <button className="bg-[#FF7A50]  dark:text-black font-bold py-2 px-6 rounded-xl  duration-300" style={{color:"white"}}  onClick={() => { resetForm(); setListSection(false); }}>
                                <i className="fa-light fa-plus"></i> New Stat
                            </button>
                        </div>
                    </div>
                    <div className="card-body py-3 m-3 rounded bg-gray-100">
                        <div className="table-responsive">
                            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                <thead>
                                    <tr className="fw-bold text-muted">
                                        <th className="min-w-10px">#</th>
                                        <th className="min-w-150px">Total Task</th>
                                        <th className="min-w-150px">Completed Task</th>
                                        <th className="min-w-150px">Remaining Task</th>
                                        <th className="min-w-150px">Heading</th>
                                        <th className="min-w-100px text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stat.map((stat, index) => (
                                        <tr key={stat.id}>
                                            <td>{index + 1}</td>
                                            <td>{stat.total_task}</td>
                                            <td>{stat.task_completed}</td>
                                            <td>{stat.remaining_task}</td>
                                            <td>{stat.heading}</td>
                                            <td className="text-end">
                                                <button onClick={() => handleEdit(stat)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                    <i className="fa-light fa-pencil"></i>
                                                </button>
                                                <button onClick={() => deletePlan(stat.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                <div className="card mb-5 mb-xl-8 bg-slate-200" style={{ marginTop: "-4%" }}>
                    <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bold fs-3 mb-1">{isEditing ? 'Update Stat' : 'Add New Stat'}</span>
                        </h3>
                        <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back">
                            <button className="bg-[#FF7A50]   dark:text-black font-bold py-2 px-6 rounded-xl  duration-300" onClick={() => setListSection(true)} style={{color:"white"}} >
                                <i className="fa fa-arrow-left"></i> Back
                            </button>
                            
                        </div>
                    </div>
                    <div className="card-body py-3 m-5 bg-gray-100 rounded">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="total_task" className="form-label">Total Task</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="total_task"
                                    name="total_task"
                                    value={formData.total_task}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter Total Task'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="task_completed" className="form-label">Completed Task</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="task_completed"
                                    name="task_completed"
                                    value={formData.task_completed}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter Completed Task'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="remaining_task" className="form-label">Remaining Task</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="remaining_task"
                                    name="remaining_task"
                                    value={formData.remaining_task}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter Remaining Task'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="heading" className="form-label">Heading</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="heading"
                                    name="heading"
                                    value={formData.heading}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter Heading'
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Content</label>
                                {formData.content.map((item, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input
                                            type="text"
                                            name="subheading"
                                            value={item.subheading}
                                            onChange={(e) => handleFeatureChange(index, e)}
                                            className="form-control mr-2"
                                            placeholder="Subheading"
                                        />
                                        <input
                                            type="text"
                                            name="desc"
                                            value={item.desc}
                                            onChange={(e) => handleFeatureChange(index, e)}
                                            className="form-control mr-2"
                                            placeholder="Description"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeFeature(index)}
                                            className="bg-orange-500  p-2 rounded"
                                            style={{color:"white"}} 
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={addFeature}
                                    className="bg-orange-500  p-2 rounded"
                                    style={{color:"white"}} 
                                >
                                    Add Submenu
                                </button>
                            </div>
                            <div className='text-right'>

                            <button type="submit" className="bg-[#FF7A50]   dark:text-black font-bold py-2 px-6 rounded-xl  duration-300 text-right" style={{color:"white"}} >{isEditing ? 'Update Stat' : 'Add Stat'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StatSectionContent;
