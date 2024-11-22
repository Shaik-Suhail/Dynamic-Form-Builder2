import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateFormPage from './pages/CreateFormPage';
import FormViewPage from './pages/FormViewPage';
import FormListPage from './pages/FormListPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreateFormPage />} />
        <Route path="/form/:formName" element={<FormViewPage />} />
        <Route path="/form/:formName/list" element={<FormListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
