import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">Dynamic Form Builder</Link>
      <div>
        <Link to="/create" className="mr-4">Create Form</Link>
        <Link to="/form/Feedback Form">Feedback Form</Link>
      </div>
    </nav>
  );
};
export {}; 
export default Navbar;
 // This can be an empty export
