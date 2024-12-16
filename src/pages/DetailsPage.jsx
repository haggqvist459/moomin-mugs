import React from 'react'
import { useLoaderData } from 'react-router-dom';


const DetailsPage = () => {

  const mug = useLoaderData();

  return (
    <section className='bg-slate-50 w-full min-h-screen pt-5'>
      <div className='container bg-white mx-auto w-2/4 border shadow-md rounded-md'>
        <div className='flex flex-1 justify-center'>
          <div className='w-96 h-96 mx-2 flex-end relative'>
            {/* Add some standard image in case there is no image url or if url is broken */}
            {mug.imageUrl == 'n/a'
              ? <></>
              : <img
                className='h-auto max-w-full absolute bottom-0 left-0'
                alt="Moomin Mug"
                src={mug.imageUrl} />}
          </div>
          <div className='w-96 h-96 mx-2 flex flex-col justify-end'>
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
      </div>
    </section>
  )
}

export default DetailsPage

/* 




*/