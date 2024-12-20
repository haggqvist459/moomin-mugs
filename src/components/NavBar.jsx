import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/logoImage.png';
import { ROUTES } from '../utils/constants';

const NavBar = ({ navOptions }) => {

    const [menuOptions, setMenuOptions] = useState([]);
    const location = useLocation(); // Get current route

    useEffect(() => {

        setMenuOptions(navOptions);

    });

    const isAdmin = location.pathname.startsWith(ROUTES.ADMIN); //Determine if in admin part of page 

    const linkClass = ({ isActive }) => isActive
        ? 'px-3 py-3 hover:text-white bg-slate-600 rounded-md' //active link classes 
        : 'px-3 py-3 hover:text-white hover:bg-slate-400 rounded-md' //inactive` link classes 


    const navBarOptions = menuOptions.map(
        option =>
        (<NavLink
            className={linkClass}
            key={option.id}
            to={option.route}
            end={option.route === ROUTES.ADMIN} // Apply end prop only to /admin 
        >{option.text}</NavLink>));




    return (
        <>
            <nav className='bg-slate-300'>
                <div className={`flex flex-row items-center mx-auto max-w-full px-5 py-3 sm:px-3 md:px-7 ${isAdmin
                        ? "justify-center sm:justify-between" // Center nav on phones; space it out on `sm` and larger
                        : "justify-between"
                    }`}>
                        <NavLink 
                            to={ROUTES.HOME} 
                            className={`${isAdmin ? "hidden sm:block" : ""}`}>
                            <img
                                className='h-16 w-auto rotate-12' // Hidden on phones; visible on `sm` and larger
                                src={logoImage}
                                alt="Mumin Mug logo"
                            />
                        </NavLink>
                    {/* Righthand side navigation links  */}
                    <div className='flex space-x-2'>
                        {navBarOptions}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar


/* 


            <nav className='bg-slate-300'>
                <div className='flex flex-row items-center justify-between  mx-auto max-w-full px-5 py-3 sm:px-3 md:px-7'>
                        <NavLink to={ROUTES.HOME} className="flex items-center py-3">
                            <img
                                className="h-16 w-auto rotate-12"
                                src={logoImage}
                                alt="Mumin Mug logo"
                            />
                        </NavLink>
                    <div className='flex space-x-2'>
                        {navBarOptions}
                    </div>
                </div>
            </nav>
 */