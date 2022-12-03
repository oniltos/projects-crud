import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectsPage from './pages/ProjectsPage';
import ProjectEditPage from './pages/ProjectEditPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ProjectCreatePage from './pages/ProjectCreatePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProjectsPage />} />
        <Route path='/projects/:projectId' element={<ProjectDetailsPage />} />
        <Route path='/projects/create' element={<ProjectCreatePage />} />
        <Route path='/projects/edit/:projectId' element={<ProjectEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
