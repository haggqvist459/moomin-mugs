import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, Footer } from '../components'
import { NAV_BAR_OPTIONS } from '../utils'

const MainLayout = () => {

    return (
        <>
            <div className='flex flex-col h-screen justify-between'>
                <NavBar navOptions={NAV_BAR_OPTIONS.HOME}  />
                <div className='mb-auto flex justify-center mt-2'>
                    <Outlet />
                </div>
                <div className='h-10'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainLayout

// Main layout to hold header with navbar, and footer
// And all the other components wrapped between them
// Outlet = whatever child element, or page, as defined in App.jsx, in createBrowserRouter