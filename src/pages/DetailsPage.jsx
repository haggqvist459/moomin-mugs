import React from 'react'
import { useLoaderData } from 'react-router-dom';


const DetailsPage = () => {

  const mug = useLoaderData();

  return (
    <section className='w-full pt-5'>
      <div className='container bg-white mx-auto w-11/12 md:w-2/4 border shadow-md rounded-md'>
        <div className="ml-5 mt-2">
          <h3 className="font-bold text-l md:text-xl leading-tight">#{mug.number} {mug.name}</h3>
          <h4 className="font-semibold md:text-l text-gray-500">{mug.year} {mug.season}</h4>
        </div>
        <div className="mt-2 mb-5 px-5 flex flex-col md:flex-row">
          <div className='md:w-2/4'>
            {mug.imageUrl !== 'n/a' && (
              <img
                className="w-full h-auto object-contain mx-auto mb-2"
                alt={`Moomin Mug: ${mug.name}`}
                src={mug.imageUrl}
              />
            )}
          </div>
          <div className='md:ml-3 md:w-2/4'>
            <h5 className='font-semibold text-l'>About the mug:</h5>
            <p>{mug.description}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DetailsPage

/* 




*/