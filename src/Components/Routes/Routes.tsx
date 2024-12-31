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
            {/* {token && role === "customer" ? (
                <>
                    <Route path='/' element={<Navigate to='/dashboard/rent' />} />
                    <Route path='/dashboard/rent' element={<Rent />} />
                    <Route path='/dashboard/buy' element={<Buy />} />
                    <Route path='/dashboard/:id' element={<PreviewCard value={false} />} />
                    <Route path='/dashboard/faq' element={<FAQ />} />
                    <Route path='/searchfilter' element={<CustomerSearchFilter />} />
                    <Route path='/profile/*' element={<Profile />} />
                    <Route path='/applicantdetails/:id' element={<Apply />} />
                </>
            ) : token && role === "seller" ? (
                <>
                    <Route path='/' element={<Navigate to='/seller/dashboard' />} />
                    <Route path='/seller/*' element={<DashBoard />} />
                </>
            ) : token && role === "admin" ? (
                <>
                  <Route path='/' element={<Navigate to='/admin/dashboard' />} />
                    <Route path='/admin/*' element={<AdminDashboard />} />
                </>
            ) : (
                <>
                    <Route path='/admin/*' element={<Navigate to='/' />} />
                    <Route path='/seller/*' element={<Navigate to='/' />} />
                    <Route path='/dashboard/rent' element={<Navigate to='/' />} />
                    <Route path='/dashboard/buy' element={<Navigate to='/' />} />
                    <Route path='/dashboard/:id' element={<Navigate to='/' />} />
                    <Route path='/dashboard/faq' element={<Navigate to='/' />} />
                    <Route path='/searchfilter' element={<Navigate to='/' />} />
                    <Route path='/profile/*' element={<Navigate to='/' />} />
                    <Route path='/applicantdetails/:id' element={<Navigate to='/' />} />
                    <Route path='/' element={<LandingPage value={true} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/forgotpassword' element={<ForgetPassword />} />
                    <Route path='/resetpassword' element={<ResetPassword />} />
                </>
            )} */}
                    {/* <Route path='/' element={<Navigate to='/admin/dashboard' />} /> */}
                    {/* <Route path='/admin/*' element={<AdminDashboard />} /> */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/forgotpassword' element={<ForgetPassword />} />
                    <Route path='/resetpassword' element={<ResetPassword />} />
                   
        </Routes>
    );
};

export default MainRoutes;
