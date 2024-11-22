export interface Field {
    type: 'text' | 'number' | 'email' | 'password';
    required: boolean;
  }
  
  export interface JsonSchema {
    fields: Record<string, Field>;
  }
  