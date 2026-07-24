import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes/routes";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import JobTitlesPage from './pages/JobTitlesPage/JobTitlesPage';
import './App.css';

function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.JOBS} element={<JobTitlesPage />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
      </>
  )
}

export default App
