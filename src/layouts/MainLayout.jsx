import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Footer } from '../components'
import { NAV_BAR_OPTIONS } from '../utils'

const MainLayout = () => {

  return (
    <div>
      <NavBar navOptions={NAV_BAR_OPTIONS.HOME} />
      <div className='bg-slate-100 min-h-screen flex flex-col py-5'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout

// Main layout to hold header with navbar, and footer
// And all the other components wrapped between them
// Outlet = whatever child element, or page, as defined in App.jsx, in createBrowserRouter
