import React, { useState } from 'react';
import JsonEditor from './JsonEditor';
import DynamicForm from './DynamicForm';

const MainLayout: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<Record<string, any>>({});

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r">
        <JsonEditor onJsonChange={setJsonSchema} />
      </div>
      <div className="w-1/2 p-4">
        {Object.keys(jsonSchema).length > 0 ? (
          <DynamicForm schema={jsonSchema} />
        ) : (
          <p className="text-gray-500">Edit JSON to see the form preview.</p>
        )}
      </div>
    </div>
  );
};
export {}; // This can be an empty export

export default MainLayout;
