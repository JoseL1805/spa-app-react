import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
    const { state } = useContext( AuthContext)
    return (state.logged ?  <Navigate to='/marvel'/> : children)
}
