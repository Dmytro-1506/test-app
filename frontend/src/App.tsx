import { Route, Routes } from "react-router-dom";


import JobTitlesPage from './pages/JobTitlesPage/JobTitlesPage';
import './App.css';

function App() {

  return (
    <Routes>
        <Route path="/jobs" element={<JobTitlesPage/>} />
    </Routes>

  )
}

export default App
