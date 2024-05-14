import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import Home from '../components/user/feature/Home'

import Signup from '../components/user/feature/Signup'

import ForgotPassword from '../components/user/feature/ForgotPassword'

const AllRoutes = () => {
  return (
        <>
            <Routes>
                
                  <Route path='' element={<Home />} />
                 
                  <Route path='forgot-password' element={<ForgotPassword />} />
                 
                  <Route path='signup' element={<Signup />} />


            </Routes>
        </>
  )
}





export default AllRoutes