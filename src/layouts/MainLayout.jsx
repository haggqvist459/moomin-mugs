import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Outlet/>
  )
}

export default MainLayout

// Main layout to hold header with navbar, and footer
// And all the other components wrapped between them
// Outlet = whatever child element, or page, as defined in App.jsx, in createBrowserRouter