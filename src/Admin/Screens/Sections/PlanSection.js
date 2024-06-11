import React, { useEffect, useState } from 'react'
import Helpers from '../../../Config/Helpers';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar';
const PlanSection = () => {
    const [plans, setPlans] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        employee: '',
        tasks: '',
        planFeatures: [{ feature: '', included: false }],
        plan_type: '',
        offline_mode: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [currentPlanId, setCurrentPlanId] = useState(null);
    const [listSection, setListSection] = useState(true);

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const response = await axios.get(`${Helpers.apiUrl}plans/show`);
            setPlans(response.data.data);
        } catch (error) {
            console.error('Error fetching plans', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? (checked ? '1' : '0') : value 
        });
    };

    const handleFeatureChange = (index, e) => {
        const { name, value, type, checked } = e.target;
        const planFeatures = [...formData.planFeatures];
        planFeatures[index][name] = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, planFeatures });
    };

    const addFeature = () => {
        setFormData({
            ...formData,
            planFeatures: [...formData.planFeatures, { feature: '', included: false }]
        });
    };

    const removeFeature = (index) => {
        const planFeatures = [...formData.planFeatures];
        planFeatures.splice(index, 1);
        setFormData({ ...formData, planFeatures });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            ...formData,
            plan_feature: JSON.stringify(formData.planFeatures)
        };
        try {
            if (isEditing) {
                await axios.post(`${Helpers.apiUrl}plans/update/${currentPlanId}`, data);
            } else {
                await axios.post(`${Helpers.apiUrl}plans/store`, data);
            }
            fetchPlans();
            resetForm();
            setListSection(true);
            Helpers.toast("success", 'Plan Saved Successfuly')
        } catch (error) {
            console.error('Error saving plan', error);
        }
    };

    const handleEdit = (plan) => {
        setFormData({
            name: plan.name,
            price: plan.price,
            employee: plan.employee,
            tasks: plan.tasks,
            plan_type: plan.plan_type,
            offline_mode: plan.offline_mode,
            planFeatures: JSON.parse(plan.plan_feature)
        });
        setCurrentPlanId(plan.id);
        setIsEditing(true);
        setListSection(false);
    };

    const handleDelete = async (id) => {
        try {
            await axios.get(`${Helpers.apiUrl}plans/delete/${id}`);
            fetchPlans();
            alert('Plan deleted successfully');
        } catch (error) {
            console.error('Error deleting plan', error);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            price: '',
            employee: '',
            tasks: '',
            planFeatures: [{ feature: '', included: false }]
        });
        setIsEditing(false);
        setCurrentPlanId(null);
    };

    return (
        <div>
            <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
                <Sidebar />
                {listSection ? (
                    <div className="card mb-5 mb-xl-8 bg-slate-200">
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label fw-bold fs-3 mb-1">Plans</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Plan">
                                <button className="btn btn-sm btn-light btn-active-primary" onClick={() => { resetForm(); setListSection(false); }}>
                                    <i className="fa-light fa-plus"></i> New Plan
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3">
                            <div className="table-responsive">
                                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr className="fw-bold text-muted">
                                            <th className="min-w-150px">Name</th>
                                            <th className="min-w-150px">Price</th>
                                            <th className="min-w-150px">Employee</th>
                                            <th className="min-w-150px">Tasks</th>
                                            <th className="min-w-150px">Plan Type</th>
                                            <th className="min-w-150px">Features</th>
                                            <th className="min-w-100px text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plans.map(plan => (
                                            <tr key={plan.id}>
                                                <td>{plan.name}</td>
                                                <td>{plan.price}</td>
                                                <td>{plan.employee}</td>
                                                <td>{plan.tasks}</td>
                                                <td>{plan.plan_type}</td>
                                                <td>
                                                    {JSON.parse(plan.plan_feature).map((feature, index) => (
                                                        <div key={index} className="flex items-center mb-2">
                                                            <span className="mr-2">{feature.feature}</span>
                                                            {feature.included ? <span className="text-green-500">Included</span> : <span className="text-red-500"> Not Included</span>}
                                                        </div>
                                                    ))}
                                                </td>
                                                <td className="text-end">
                                                    <button onClick={() => handleEdit(plan)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <i className="fa-light fa-pencil"></i>
                                                    </button>
                                                    <button onClick={() => handleDelete(plan.id)} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
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
                                <span className="card-label fw-bold fs-3 mb-1">{isEditing ? 'Update Plan' : 'Add New Plan'}</span>
                            </h3>
                            <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to go back">
                                <button className="btn btn-sm btn-light btn-active-primary" onClick={() => setListSection(true)}>
                                    <i className="fa fa-arrow-left"></i> Back
                                </button>
                            </div>
                        </div>
                        <div className="card-body py-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="plan_type" className="form-label">Plan Type</label>
                                    <div>
                                        <input
                                            type="radio"
                                            id="plan_type_subscription"
                                            name="plan_type"
                                            value="subscription"
                                            checked={formData.plan_type === 'subscription'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="plan_type_subscription" className="mr-4 ml-4">Subscription</label>
                                        <input
                                            type="radio"
                                            id="plan_type_one_time_payment"
                                            name="plan_type"
                                            value="one time payment"
                                            checked={formData.plan_type === 'one time payment'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="plan_type_one_time_payment" className='ml-4'>One Time Payment</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="employee" className="form-label">Employee</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employee"
                                        name="employee"
                                        value={formData.employee}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tasks" className="form-label">Tasks</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="tasks"
                                        name="tasks"
                                        value={formData.tasks}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Plan Features</label>
                                    {formData.planFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-center mb-2">
                                            <input
                                                type="text"
                                                name="feature"
                                                value={feature.feature}
                                                onChange={(e) => handleFeatureChange(index, e)}
                                                className="form-control mr-2"
                                                placeholder="Feature"
                                            />
                                            <input
                                                type="checkbox"
                                                name="included"
                                                checked={feature.included}
                                                onChange={(e) => handleFeatureChange(index, e)}
                                                className="mr-2"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(index)}
                                                className="bg-red-500 text-white p-2 rounded"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="bg-blue-500 text-white p-2 rounded"
                                    >
                                        Add Feature
                                    </button>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="offline_mode" className="form-label">Offline Mode</label>
                                    <input
                                        type="checkbox"
                                        id="offline_mode"
                                        name="offline_mode"
                                        checked={formData.offline_mode} 
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">{isEditing ? 'Update Plan' : 'Add Plan'}</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanSection;