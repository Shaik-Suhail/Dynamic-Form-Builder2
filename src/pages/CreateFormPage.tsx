import React, { useState } from 'react';
import JsonEditor from '../components/JsonEditor';
import DynamicForm from '../components/DynamicForm';
import { validateJSON } from '../utils/validateJSON';

const CreateFormPage: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleJSONChange = (newJSON: string) => {
    setJsonSchema(newJSON);
    setIsValid(validateJSON(newJSON));
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <JsonEditor value={jsonSchema} onChange={handleJSONChange} />
        {!isValid && <p className="text-red-500">Invalid JSON</p>}
      </div>
      <div className="w-full md:w-1/2 p-4">
        {isValid ? <DynamicForm schema={JSON.parse(jsonSchema)} /> : <p>Fix JSON to preview the form</p>}
      </div>
    </div>
  );
};

export default CreateFormPage;
