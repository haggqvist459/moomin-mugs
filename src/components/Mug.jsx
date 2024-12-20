import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../utils/constants'


const Mug = ({ mug }) => {

  useEffect(() => {

    console.log("Mug useEffect data: ", mug.name)
    console.log("Mug useEffect data: ", mug.id)

  }, [])

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full max-w-sm h-full bg-white border shadow-md rounded-md px-3 py-2">
      <Link to={ROUTES.DETAILS_PAGE + mug.id} className="contents">
        <div className="row-start-1 row-end-2">
          <h3 className="font-bold text-l md:text-xl leading-tight">#{mug.number} {mug.name}</h3>
          <h4 className="font-semibold md:text-l text-gray-500">{mug.year} {mug.season}</h4>
        </div>

        <div className="row-start-2 row-end-3"></div>

        <div className="row-start-3 row-end-4 mt-2 mb-2">
          {mug.imageUrl !== 'n/a' && (
            <img
              className="w-full h-auto object-contain mx-auto"
              alt={`Moomin Mug: ${mug.name}`}
              src={mug.imageUrl}
            />
          )}
        </div>
      </Link>
    </div>
  )
}

export default Mug


/*
 - Remove "n/a" or unknown from being displayed
 - Add moomin image in case of missing mug image 
 - 

Old component 
    <div className=""> 
      <Link to={ROUTES.DETAILS_PAGE + mug.id}>
          <div className='mb-2'>
            <h3 className='font-bold text-xl'>#{mug.number} {mug.name}</h3>
            <h4 className='font-semibold'>{mug.year}  {mug.season}</h4>
          </div>
          <div className=""> 
            {mug.imageUrl !== 'n/a' && (
              <img
                className="w-full h-full object-contain"
                alt={`Moomin Mug: ${mug.name}`}
                src={mug.imageUrl}
              />
            )}
          </div>
      </Link>
    </div>

*/

