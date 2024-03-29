import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from './pages/RegisterPage.jsx';
import SubjectPage from './pages/SubjectPage.jsx';
import PLOPage from './pages/PLOPage.jsx';
import LTPage from './pages/LTPage.jsx';
import CreateSubject from './pages/CreateSubject.jsx';
import EditSubject from './pages/EditSubject.jsx';
import CreatePLO from './pages/CreatePLO.jsx';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/subject" element={<SubjectPage />} />
      <Route path="/plo" element={<PLOPage />} />
      <Route path="/lt" element={<LTPage />} />
      <Route path="/createSubject" element={<CreateSubject />} />
      <Route path="/editSubject" element={<EditSubject />} />
      <Route path="/createPLO" element={<CreatePLO />} />
      </Route>
      
    </Routes>

  )
}

export default App
