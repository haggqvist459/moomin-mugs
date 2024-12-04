import React from 'react'
import { useLoaderData } from 'react-router-dom'

const DetailsPage = () => {

  const mug = useLoaderData();

  return (
    <div className='flex flex-1 justify-center'>
      <div className='w-96 h-96 mx-2 mt-20 flex-end relative'>
        {mug.imageURL == 'n/a'
          ? <></>
          : <img
            className='h-auto max-w-full absolute bottom-0 left-0'
            alt="Moomin Mug"
            src={mug.imageURL} />}
      </div>
      <div className='w-96 h-96 mx-2 mt-20 flex flex-col justify-end'>
        <div className='flex flex-1 flex-col justify-end'>
          <div className=''>
            <h4 className='font-bold'>{mug.name}</h4>
            <h5 className='font-bold'>{mug.year} {mug.season}</h5>
          </div>
          <div className=''>
            <p>{mug.description}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailsPage


// image
// year 
// name
// id 
// season

/* 

<div className='w-96 h-96'>
        {mug.imageURL == 'n/a'
          ? <></>
          : <img
            className='w-96 h-80'
            alt="Moomin Mug"
            src={mug.imageURL} />}
      </div>





*/