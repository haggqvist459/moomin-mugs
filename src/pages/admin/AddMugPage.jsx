import React, { useState } from 'react'

const AddMugPage = () => {

  const [season, setSeason] = useState('')

  const [newMug, setNewMug] = useState({
    'id': '',
    'name': '',
    'year': '',
    'season': '',
    'description': '',
    'imageUrl': '',
  })

  const convertImagetoString = (file) => {
    // convert selected image to a base64 URl string 
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        console.log("fileReader result: ", fileReader.result )
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    })
  }

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    console.log('file: ', file)
    const base64Image = await convertImagetoString(file)
    setNewMug({...newMug, imageUrl: base64Image});
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(newMug);
    // Submit the mug to the json file 
    // Navigate back to admin page or home page?
  }


  return (
    // add border shadow instead of slate border
    <div className='container mx-auto w-2/4 mt-5 border-2 rounded border-slate-300'>
      <div className='px-5'>
        <form onSubmit={submitForm}>
          <div>
            <h2 className='text-2xl text-center font-bold mb-5 mt-3'>Add Mug</h2>
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
                value={newMug.name}
                // onChange={(e) => setName(e.target.value)} 
                onChange={(e) => setNewMug({...newMug, name: e.target.value})}
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
                value={newMug.year}
                onChange={(e) => setNewMug({...newMug, year: e.target.value})} />
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
                value={newMug.season}
                onChange={(e) => setNewMug({...newMug, season: e.target.value})} 
                />
            </div>
            {/* Description */}
            <div className='mb-2'>
              <label htmlFor='name' className='font-bold mb-1'>Description: </label>
              <textarea
                type='text'
                className='border rounded w-full px-2'
                placeholder='Add a description for the mug, for example background information'
                name='description'
                id='description'
                rows="4"
                required
                value={newMug.description}
                onChange={(e) => setNewMug({...newMug, description: e.target.value})} />
            </div>
            {/* image selector */}
            <div className='mb-2'>
              <label htmlFor='name' className='font-bold mb-1'>Image: </label>
              <input
                type='file'
                accept='image/*'
                alt='select image'
                className='border rounded w-full px-2'
                placeholder='e.g. 2002 - 2010'
                name='image'
                id='image'
                required
                onChange={(e) => handlePhotoUpload(e)} />
            </div>
            <div>
              <button type='submit'>Add Mug</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMugPage

// same form can be used with edit mug, just add existing values
// finish styling 