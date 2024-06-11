import React from 'react';

function EditModal({ isOpen, onClose, section, content, handleChange, handleSubmit }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Edit Content</h2>
                <textarea
                    className="w-full border p-2 rounded"
                    value={content}
                    onChange={(e) => handleChange(e, section)}
                />
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        className="bg-gray-500 text-white py-2 px-4 rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={() => handleSubmit(content, section)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;
