import React from 'react'
import { Outlet } from 'react-router-dom'
import { NAV_BAR_OPTIONS } from '../utils'
import { NavBar, Footer } from '../components'

const AdminLayout = () => {
    return (
        <div className=''>
            <NavBar navOptions={NAV_BAR_OPTIONS.ADMIN} />
            <div className='bg-slate-100 min-h-screen flex flex-col py-5'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AdminLayout

