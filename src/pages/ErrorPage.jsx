import React from 'react'
import moomin from '../assets/images/moomintroll.jpg';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils';

const ErrorPage = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className='container bg-white mx-auto w-11/12 md:w-2/4 border shadow-md rounded-md flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>Error! Page not found!</h1>
        <NavLink to={ROUTES.HOME} className='underline text-semibold'>Return to Home</NavLink>
        <img
            className='w-2/4'
            src={moomin}
            alt="moomin" />
      </div>
    </section>
  )
}

export default ErrorPage

