import React from 'react'
import { Navbar } from './ui'
import { Outlet } from "react-router-dom";

export const App = () => {

  return (
    <>
      <Navbar/>

      <div className="container">
        <Outlet />
      </div>

    </>
  )
}
