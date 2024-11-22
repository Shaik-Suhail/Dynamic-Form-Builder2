import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicForm from '../components/DynamicForm';
import { getFormSchema, saveFormSubmission } from '../utils/formStorage';

const FormViewPage: React.FC = () => {
  const { formName } = useParams<{ formName: string }>();
  const schema = getFormSchema(formName || '');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (data: Record<string, any>) => {
    saveFormSubmission(formName || '', data);
    setSubmitted(true);
  };

  if (!formName || !schema) {
    return <p className="text-red-500">Form not found or form name is missing in the URL.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{formName}</h1>
      {submitted ? (
        <p className="text-green-500">Submission successful!</p>
      ) : (
        <DynamicForm schema={schema} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default FormViewPage;
