import React from 'react'
import { Outlet } from 'react-router-dom'
import { NAV_BAR_OPTIONS } from '../utils'
import { NavBar, Footer } from '../components'

const AdminLayout = () => {
    return (
        <>
            <div className='flex flex-col h-screen justify-between'>
                <NavBar navOptions={NAV_BAR_OPTIONS.ADMIN} />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default AdminLayout

/* 

    <div className='mb-auto flex justify-center'>
    
    </div>
    <div className='h-10'>
    
    </div>
*/