import React from 'react'
import { Outlet } from 'react-router-dom'
import { NAV_BAR_OPTIONS } from '../utils'
import { NavBar, Footer } from '../components'

const AdminLayout = () => {
    return (
        <>
            <div className='flex flex-col h-screen justify-between'>
                <NavBar navOptions={NAV_BAR_OPTIONS.ADMIN} />
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

export default AdminLayout