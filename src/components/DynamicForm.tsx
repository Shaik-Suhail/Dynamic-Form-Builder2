import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface DynamicFormProps {
  schema: Record<string, any>; // This will represent the dynamic schema for your form
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Record<string, any>>(); // Type the useForm hook

  // Submit handler for the form
  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {  // Data will be of type Record<string, any>
    console.log(data); // Data will contain the form field values
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      {Object.keys(schema.fields).map((fieldKey) => {
        const field = schema.fields[fieldKey]; // Dynamically retrieve the field from schema
        return (
          <div key={fieldKey} className="flex flex-col">
            <label className="font-bold mb-2">{fieldKey}</label>
            <input
              {...register(fieldKey, { required: field.required })} // Register field dynamically
              type={field.type}
              className="border border-gray-300 p-2 rounded"
            />
            {errors[fieldKey] && <p className="text-red-500">This field is required</p>}
          </div>
        );
      })}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
