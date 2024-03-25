import React from 'react'
import { RouterProvider } from "react-router-dom";
import { router } from './routes';
import { AuthProvider } from '../auth';

export const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}
