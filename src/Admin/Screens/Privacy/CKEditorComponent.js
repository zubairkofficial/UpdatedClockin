import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent = ({ value, onChange }) => {
    const [editorData, setEditorData] = useState(value);

    useEffect(() => {
        setEditorData(value);
    }, [value]);

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
        onChange(data);
    };
    const editorConfiguration = {
        toolbar: [
            'heading', '|',
            'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
            '|', 'undo', 'redo'
        ]
    };
    return (
        <div className="form-control">
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                config={editorConfiguration}
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default CKEditorComponent;
