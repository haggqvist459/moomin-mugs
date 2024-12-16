import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { saveList, loadList, convertImageToString, ROUTES } from '../../utils';


const EditMugDetailsPage = () => {

  const mug = useLoaderData();

  const [updatedMug, setUpdatedMug] = useState({
    'id': mug.id,
    'name': mug.name,
    'year': mug.year,
    'season': mug.season,
    'description': mug.description,
    'imageUrl': mug.imageUrl,
  })


  useEffect(() => {

    console.log("EditMugDetailsPage useEffect ran once");

  }, [])


  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    // console.log('file: ', file)
    const base64Image = await convertImageToString(file);
    setNewMug({ ...newMug, imageUrl: base64Image });

  }

  const updateMug = (e) => {

    e.preventDefault();

    console.log("EditMugDetailsPage updateMug start")

    // setUpdatedMug with the updated values from the field 
    const previousMugList = loadList();

    console.log("EditMugDetailspage updateMug previousMugList: ", previousMugList);

    const newMugList = previousMugList.map((mug) => {
      mug.id === updatedMug.id ? { ...mug, ...updatedMug } : mug
    });

    console.log("EditMugDetailsPage updateMug newMugList: ", newMugList)
    // update localstorage 
    // saveList(newMugList)

    // go back to edit page 
    // useNavigate(ROUTES.ADMIN);
  }



  // Finalise form from add page and copy it in here
  // Use default values from the loaded mug and set the updated mug with the updated values

  return (
    <section className='bg-slate-50 w-full min-h-screen pt-5'>
      <div className='container bg-white mx-auto w-2/4 pt-5 border shadow-md rounded-md'>
        <div className='px-5'>
          <form onSubmit={updateMug}>
            <div>
              <h2 className='text-2xl text-center font-bold mb-5 pt-3'>Add Mug</h2>
            </div>
            <div className=''>
              {/* Text fields and labels for: */}
              {/* Name */}
              <div className='mb-2'>
                <label htmlFor='name' className='font-bold mb-1'>Name: </label>
                <input
                  type='text'
                  className='border rounded w-full px-2'
                  placeholder='e.g. Ski Jump'
                  name='name'
                  id='name'
                  required
                  value={updatedMug.name}
                  onChange={(e) => setUpdatedMug({ ...updatedMug, name: e.target.value })}
                />
              </div>
              {/* Year */}
              <div className='mb-2'>
                <label htmlFor='year' className='font-bold mb-1'>Year: </label>
                <input
                  type='text'
                  className='border rounded w-full px-2'
                  placeholder='2002 - 2010'
                  name='year'
                  id='year'
                  required
                  value={updatedMug.year}
                  onChange={(e) => setUpdatedMug({ ...updatedMug, year: e.target.value })} />
              </div>
              {/* Season */}
              <div className='mb-2'>
                <label htmlFor='season' className='font-bold mb-1'>Season: </label>
                <input
                  type='text'
                  className='border rounded w-full px-2'
                  placeholder='Summer'
                  name='season'
                  id='season'
                  value={updatedMug.season}
                  onChange={(e) => setUpdatedMug({ ...updatedMug, season: e.target.value })}
                />
              </div>
              {/* Description */}
              <div className='mb-2'>
                <label htmlFor='name' className='font-bold mb-1'>Description: </label>
                <textarea
                  type='text'
                  className='border rounded w-full px-2'
                  placeholder='For example, where it can be bought'
                  name='description'
                  id='description'
                  rows="4"
                  required
                  value={updatedMug.description}
                  onChange={(e) => setUpdatedMug({ ...updatedMug, description: e.target.value })} />
              </div>
              {/* image selector */}
              <div className='mb-2'>
                <label htmlFor='name' className='font-bold mb-1'>Image: </label>
                <input
                  type='file'
                  accept='image/*'
                  alt='select image'
                  className='border rounded w-full'
                  placeholder='e.g. 2002 - 2010'
                  name='image'
                  id='image'
                  onChange={(e) => handlePhotoUpload(e)} />
              </div>
              <div>
                <button className='w-full bg-slate-300 hover:bg-slate-400 rounded font-bold py-1 mb-5' type='submit'>Update Mug</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditMugDetailsPage