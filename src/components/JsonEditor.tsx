import React, { useState } from 'react';
import JSONEditor from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

interface JsonEditorProps {
  onJsonChange: (json: any) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onJsonChange }) => {
  // Removed unnecessary 'json' state
  const handleJsonChange = (event: any) => {
    try {
      const parsed = event.jsObject; // This is the parsed JSON object
      onJsonChange(parsed); // Pass it directly to the parent
    } catch (e) {
      console.error('Invalid JSON');
    }
  };

  return (
    <div className="w-full h-full p-4">
      <JSONEditor
        placeholder={{
          fields: {
            name: { type: 'text', required: true },
            age: { type: 'number' },
          },
        }}
        locale={locale}
        onChange={handleJsonChange}
        height="100%"
        width="100%"
        style={{ borderRadius: '0.5rem' }}
      />
    </div>
  );
};

export default JsonEditor;
