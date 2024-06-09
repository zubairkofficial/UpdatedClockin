import React, { useState } from 'react'
import Helpers from '../../../Config/Helpers';
import axios from 'axios';
import Sidebar from '../../Components/Sidebar';

function PlanSection() {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        employee: '',
        tasks: '',
        planFeatures: [{ feature: '', included: false }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
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
            const response = await axios.post( `${Helpers.apiUrl}plans/store`, data);
            console.log(response);
            alert('Plan added successfully');
        } catch (error) {
            console.error('Error adding plan', error);
        }
    };
  return (
    <div>
         <div id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
         <Sidebar />
         <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">Add New Plan</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Employee</label>
                    <input
                        type="text"
                        name="employee"
                        value={formData.employee}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Tasks</label>
                    <input
                        type="text"
                        name="tasks"
                        value={formData.tasks}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Plan Features</label>
                    {formData.planFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                name="feature"
                                value={feature.feature}
                                onChange={(e) => handleFeatureChange(index, e)}
                                className="mt-1 p-2 w-full border rounded mr-2"
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
                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
         </div>
    </div>
  )
}

export default PlanSection