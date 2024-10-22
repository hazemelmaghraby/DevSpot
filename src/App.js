import React from 'react';
import LoginForm from './components/Registeration/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Registeration/register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Registeration/Dashboard/Dashboard';
import ProfileConfig from './components/Registeration/register/ProfileConfig/ProfileConfig';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/profile-config" element={<ProfileConfig />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App;