import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import SideBar from './components/SideBar';

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Activity from './pages/Activity';
import Report from './pages/Report';
import Setting from './pages/Setting';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex">
        <SideBar />
        <main className="main-content">
            <Routes>
              <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/Login" element={<LoginForm />} />
              <Route path="/Register" element={<RegisterForm />} />
              <Route path="/Activity" element={<Activity />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Setting" element={<Setting />} />
            </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;

