import React, { useEffect, useState, useRef } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { saveList, loadList, convertImageToString, ROUTES } from '../../utils';
import { FormField } from '../../components';


const EditMugDetailsPage = () => {

  const mug = useLoaderData();
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const [updatedMug, setUpdatedMug] = useState({
    'id': mug.id,
    'name': mug.name,
    'number': mug.number,
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
    setUpdatedMug({ ...updatedMug, imageUrl: base64Image });

  }

  const handleImageButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input
    }
  }

  const cancelForm = () => {
    return navigate(ROUTES.EDIT_PAGE);
  }


  const updateMug = (e) => {

    e.preventDefault();

    console.log("EditMugDetailsPage updateMug start")

    // setUpdatedMug with the updated values from the field 
    const previousMugList = loadList();

    console.log("EditMugDetailspage updateMug previousMugList: ", previousMugList);

    const updatedMugList = previousMugList.map((mug) => {
      return mug.id === updatedMug.id ? { ...mug, ...updatedMug } : mug
    });

    console.log("EditMugDetailsPage updateMug updatedMugList: ", updatedMugList);
    // update localstorage 
    saveList(updatedMugList);

    // go back to edit page 
    return navigate(ROUTES.EDIT_PAGE);
  }

  // Finalise form from add page and copy it in here
  // Use default values from the loaded mug and set the updated mug with the updated values

  return (
    <section className=''>
      <div className='container bg-white mx-auto md:w-2/4 w-11/12 pt-5 border shadow-md rounded-md'>
        <div className='px-5'>
          <form onSubmit={updateMug}>
            <div>
              <h2 className='text-2xl text-center font-bold mb-5'>Edit Mug Details</h2>
            </div>
            <div className=''>
              {/* Text fields and labels for: */}
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-2">
                <FormField
                  labelValue={"Name:"}
                  placeholder={"e.g. Moomintroll"}
                  id={"name"}
                  value={updatedMug.name}
                  onChange={(value) => { handleFieldChange('name', value) }}
                  required={false}
                />
                {/* Number */}
                <FormField
                  labelValue={"Number:"}
                  placeholder={"1"}
                  id={"number"}
                  value={updatedMug.number}
                  onChange={(value) => { handleFieldChange('number', value) }}
                  required={false}
                />
                {/* Year */}
                <FormField
                  labelValue={"Season:"}
                  placeholder={"1992"}
                  id={"year"}
                  value={updatedMug.year}
                  onChange={(value) => { handleFieldChange('year', value) }}
                  required={false}
                />
                {/* Season */}
                <FormField
                  labelValue={"Season:"}
                  placeholder={"Summer"}
                  id={"season"}
                  value={updatedMug.season}
                  onChange={(value) => { handleFieldChange('season', value) }}
                  required={false}
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
                  ref={fileInputRef}
                  accept='image/*'
                  alt='select image'
                  className='border rounded w-full'
                  placeholder='e.g. 2002 - 2010'
                  name='image'
                  style={{ display: 'none' }}
                  onChange={(e) => handlePhotoUpload(e)} />
                <button
                  type='button'
                  id='image'
                  className='w-full bg-slate-600 hover:bg-slate-400 text-white rounded font-bold py-1 mt-2 mb-1'
                  onClick={handleImageButtonClick}>Change Image</button>
              </div>
              <div className='flex space-x-2 mb-5'>
                <button className='w-1/2 bg-slate-300 hover:bg-slate-400 rounded font-bold' type='submit'>Save Changes</button>
                <button className='w-1/2 hover:bg-slate-400 rounded border-2 border-bg-300 font-bold' type='button' onClick={() => cancelForm()}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditMugDetailsPage