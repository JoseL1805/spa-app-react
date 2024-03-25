import React, { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
    const  { state }  = useContext(AuthContext);
    const  { pathname, search } = useLocation()

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath)

    console.log('re render')
    return (state.logged) ? children : <Navigate to='/login'/>
}
