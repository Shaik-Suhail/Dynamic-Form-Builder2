export const validateJSON = (json: string): boolean => {
    try {
      JSON.parse(json);
      return true;
    } catch (e) {
      console.error('Invalid JSON:', e);
      return false;
    }
  };
  