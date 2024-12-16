import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/images/logoImage.png';
import { ROUTES } from '../utils/constants';

const NavBar = ({ navOptions }) => {

    const [menuOptions, setMenuOptions] = useState([]);

    useEffect(() => {

        setMenuOptions(navOptions);

    });

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
                <div className='flex flex-row items-center justify-between  mx-auto max-w-full px-10 sm:px-3 md:px-7'>
                    <NavLink to={ROUTES.HOME} className='flex items-center py-3'>
                        <img
                            className='h-16 w-auto rotate-12'
                            src={logoImage}
                            alt='Mumin Mug logo'
                        />
                        <h1 className='px-3'>Moomin Mugs</h1>
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