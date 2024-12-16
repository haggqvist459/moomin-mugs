import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils/constants'


const Mug = ({ mug }) => {

  useEffect(() => {

    console.log("Mug useEffect data: ", mug.name)
    console.log("Mug useEffect data: ", mug.id)

  }, [])

  return (
    <div className="flex flex-col w-96 h-96">
      <Link to={ROUTES.DETAILS_PAGE + mug.id}>
        {mug.imageUrl == 'n/a'
          ? <></>
          : <img
            className='w-auto h-80'
            alt="Moomin Mug"
            src={mug.imageUrl} />}
      </Link>
      <div className='flex flex-1 items-end ml-10'>
        <h3 className='px-2'>{mug.name}</h3>
        <h4>{mug.year}  {mug.season}</h4>
      </div>
    </div>
  )
}

export default Mug


/*
 - Remove "n/a" or unknown from being displayed
 - Add mumin image in case of missing mug image 
 - 

*/

