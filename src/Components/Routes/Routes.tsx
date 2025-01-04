import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Authentication/Login';
import ForgetPassword from '../Authentication/ForgetPassword';
import ResetPassword from '../Authentication/ResetPassword';

import AdminDashboard from '../AdminFlow/AdminDashBoard';
const MainRoutes = () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    return (
        <Routes>
            {/* <Route path='/' element={<Navigate to='/admin/dashboard' />} /> */}
            <Route path='/admin/*' element={<AdminDashboard />} />
            <Route path='/' element={<Login />} />
            <Route path='/forgotpassword' element={<ForgetPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />


        </Routes>
    );
};

export default MainRoutes;
