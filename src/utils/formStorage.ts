// Interface for JSON Schema
interface JsonSchema {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  }
  
  // Interface for a Form
  export interface Form {
    id: string;
    name: string;
    jsonSchema: JsonSchema; // JSON schema of the form
  }
  
  // Utility function to get data from localStorage
  const getLocalStorageData = (key: string): any => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error retrieving key "${key}":`, error);
      return null;
    }
  };
  
  // Utility function to save data to localStorage
  const setLocalStorageData = (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving key "${key}":`, error);
    }
  };
  
  // Function to save a form to localStorage
  export const saveFormToLocalStorage = (form: Form): void => {
    try {
      const existingForms = getFormsFromLocalStorage();
      // Ensure ID uniqueness
      if (existingForms.find((existingForm) => existingForm.id === form.id)) {
        console.warn(`Form with ID "${form.id}" already exists.`);
        return;
      }
      existingForms.push(form);
      setLocalStorageData("forms", existingForms);
    } catch (error) {
      console.error("Error saving form to localStorage:", error);
    }
  };
  
  // Function to get all forms from localStorage
  export const getFormsFromLocalStorage = (): Form[] => {
    return getLocalStorageData("forms") || [];
  };
  
  // Function to remove a form from localStorage by ID
  export const removeFormFromLocalStorage = (formId: string): void => {
    try {
      const existingForms = getFormsFromLocalStorage();
      const updatedForms = existingForms.filter((form) => form.id !== formId);
      setLocalStorageData("forms", updatedForms);
    } catch (error) {
      console.error("Error removing form from localStorage:", error);
    }
  };
  
  // Function to get a single form by ID from localStorage
  export const getFormByIdFromLocalStorage = (formId: string): Form | undefined => {
    try {
      const existingForms = getFormsFromLocalStorage();
      return existingForms.find((form) => form.id === formId);
    } catch (error) {
      console.error("Error getting form by ID from localStorage:", error);
      return undefined;
    }
  };
  
  // Function to update a form in localStorage
  export const updateFormInLocalStorage = (formId: string, updatedForm: Partial<Form>): void => {
    try {
      const existingForms = getFormsFromLocalStorage();
      const index = existingForms.findIndex((form) => form.id === formId);
      if (index !== -1) {
        existingForms[index] = { ...existingForms[index], ...updatedForm };
        setLocalStorageData("forms", existingForms);
      } else {
        console.warn(`Form with ID "${formId}" not found.`);
      }
    } catch (error) {
      console.error("Error updating form in localStorage:", error);
    }
  };
  
  // Function to get form submissions by form name
  export const getFormSubmissions = (formName: string): any[] => {
    return getLocalStorageData(`submissions_${formName}`) || [];
  };
  
  // Function to save form submissions
  export const saveFormSubmission = (formName: string, submission: any): void => {
    try {
      const submissions = getFormSubmissions(formName);
      submissions.push(submission);
      setLocalStorageData(`submissions_${formName}`, submissions);
    } catch (error) {
      console.error("Error saving form submission:", error);
    }
  };
  
  // Function to validate JSON schema
  export const validateJsonSchema = (schema: JsonSchema): boolean => {
    try {
      if (!schema.type || !schema.properties) {
        console.error("Invalid schema format.");
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error validating schema:", error);
      return false;
    }
  };
  