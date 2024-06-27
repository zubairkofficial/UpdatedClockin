import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Helpers from '../../../Config/Helpers';
import Sidebar from '../../Components/Sidebar';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
function FooterSection() {
    const [footer, setFooter] = useState([]);
    const [formData, setFormData] = useState({
        menu: '',
        submenu: [{ name: '', link: '' }],
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentPlanId, setCurrentPlanId] = useState(null);
    const [listSection, setListSection] = useState(true);

    useEffect(() => {
        fetchFooter();
    }, []);

    const fetchFooter = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}footer/show`);
            setFooter(response.data.data);
        } catch (error) {
            console.error('Error fetching footer', error);
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
        const submenu = [...formData.submenu];
        submenu[index][name] = value;
        setFormData({ ...formData, submenu });
    };

    const addFeature = () => {
        setFormData({
            ...formData,
            submenu: [...formData.submenu, { name: '', link: '' }]
        });
    };

    const removeFeature = (index) => {
        const submenu = [...formData.submenu];
        submenu.splice(index, 1);
        setFormData({ ...formData, submenu });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            submenu: JSON.stringify(formData.submenu)
        };
        try {
            if (isEditing) {
                await axios.post(`${Helpers.apiUrl}footer/update/${currentPlanId}`, data);
            } else {
                await axios.post(`${Helpers.apiUrl}footer/store`, data);
            }
            fetchFooter();
            resetForm();
            setListSection(true);
            Helpers.toast("success", 'Footer Saved Successfully');
        } catch (error) {
            console.error('Error saving plan', error);
        }
    };

    const handleEdit = (footer) => {
        setFormData({
            menu: footer.menu,
            submenu: JSON.parse(footer.submenu)
        });
        setCurrentPlanId(footer.id);
        setIsEditing(true);
        setListSection(false);
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}footer/delete/${id}`);
            fetchFooter();
            Helpers.toast("success",'Footer deleted successfully');
        } catch (error) {
            console.error('Error deleting plan', error);
        }
    };
    const MySwal = withReactContent(Swal);

    const deleteFooter = (id) => {
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

    const resetForm = () => {
        setFormData({
            menu: '',
            submenu: [{ name: '', link: '' }]
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
                                <span className="card-label fw-bold fs-3 mb-1">Footer</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Footer">
                                <button className="bg-[#FF7A50] hover:bg-hover  dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300" style={{color:"white"}}  onClick={() => { resetForm(); setListSection(false); }}>
                                    <i className="fa-light fa-plus"></i> New Footer
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3 m-3 rounded bg-gray-100">
                            <div className="table-responsive">
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr className="fw-bold text-muted">
                                        <th className="min-w-10px">#</th>
                                            <th className="min-w-150px">Menu</th>
                                            <th className="min-w-150px">Submenu</th>
                                            <th className="min-w-100px text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {footer.map((footer,index) => (
                                            <tr key={footer.id}>
                                            <td>{index+1}</td>
                                                <td>{footer.menu}</td>
                                                <td>
                                                    {JSON.parse(footer.submenu).map((item, index) => (
                                                        <div key={index} className="flex items-center mb-2">
                                                            <span className="mr-2">{item.name}</span>
                                                            {/* {item.link} */}
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="text-end">
                                                    <button onClick={() => handleEdit(footer)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <i className="fa-light fa-pencil"></i>
                                                    </button>
                                                    <button onClick={() => deleteFooter(footer.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                                <span className="card-label fw-bold fs-3 mb-1">{isEditing ? 'Update Footer' : 'Add New Footer'}</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back">
                                <button className="bg-[#FF7A50] hover:bg-hover  dark:text-black font-bold py-2 px-6 rounded-xl transition duration-300" style={{color:"white"}}  onClick={() => setListSection(true)}>
                                    <i className="fa fa-arrow-left"></i> Back
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3 m-5 bg-gray-100 rounded">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="menu" className="form-label">Menu</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="menu"
                                        name="menu"
                                        value={formData.menu}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Submenu</label>
                                    {formData.submenu.map((item, index) => (
                                        <div key={index} className="flex items-center mb-2">
                                            <input
                                                type="text"
                                                name="name"
                                                value={item.name}
                                                onChange={(e) => handleFeatureChange(index, e)}
                                                className="form-control mr-2"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="text"
                                                name="link"
                                                value={item.link}
                                                onChange={(e) => handleFeatureChange(index, e)}
                                                className="form-control mr-2"
                                                placeholder="Link"
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
                                <button type="submit" className="bg-[#FF7A50] hover:bg-hover  font-bold py-2 px-6 rounded-xl transition duration-300" style={{color:"white"}} >{isEditing ? 'Update Footer' : 'Add Footer'}</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FooterSection;
