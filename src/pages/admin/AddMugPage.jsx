import React, { useEffect, useState } from 'react'
import { convertImageToString, saveList, loadList } from '../../utils';
import { v4 as uuid } from 'uuid';


const AddMugPage = () => {

  const [mugList, setMugList] = useState([]);
  const [newMug, setNewMug] = useState({
    'id': '',
    'name': '',
    'year': '',
    'season': '',
    'description': '',
    'imageUrl': '',
  })

  useEffect(() => {

    // Load mugs from localStorage
    const storedMugs = loadList();
    // Check loaded result 
    console.log("HomePage useEffect storedMugs: ", storedMugs);
    // Update state
    setMugList(storedMugs);

  }, []);


  const handlePhotoUpload = async (e) => {

    const file = e.target.files[0];
    // console.log('file: ', file)
    const base64Image = await convertImageToString(file);
    setNewMug({ ...newMug, imageUrl: base64Image });

  }



  const submitForm = (e) => {
    e.preventDefault();

    // Assign an ID to the mug 
    const mugWithId = { ...newMug, id: uuid()}

    // Create an array to save into localStorage 
    const updatedMugList = [...mugList, mugWithId];

    console.log('Before saving:', mugList);
    console.log('After adding new mug:', updatedMugList);

    // update state 
    setMugList(updatedMugList);

    // save into localstorage, the new array. 
    saveList(updatedMugList);

    // Clear the state and reset the form 
    setNewMug({
      'id': '',
      'name': '',
      'year': '',
      'season': '',
      'description': '',
      'imageUrl': '',
    })

    // Clear the image upload field 
    e.target.reset();

  }


  return (
    <section className='bg-slate-50 w-full min-h-screen pt-5'>
      <div className='container bg-white mx-auto w-2/4 pt-5 border shadow-md rounded-md'>
        <div className='px-5'>
          <form onSubmit={submitForm}>
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
                  value={newMug.name}
                  onChange={(e) => setNewMug({ ...newMug, name: e.target.value })}
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
                  onChange={(e) => setNewMug({ ...newMug, year: e.target.value })} />
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
                  onChange={(e) => setNewMug({ ...newMug, season: e.target.value })}
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
                  value={newMug.description}
                  onChange={(e) => setNewMug({ ...newMug, description: e.target.value })} />
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
                  required
                  onChange={(e) => handlePhotoUpload(e)} />
              </div>
              <div>
                <button className='w-full bg-slate-300 hover:bg-slate-400 rounded font-bold py-1 mb-5' type='submit'>Add Mug</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddMugPage

// same form can be used with edit mug, just add existing values
// finish styling 

/*

Replaced turquoise Moomintroll mug made between 2013 - 2018. Set consists of mug, bowl and plate. Currently in production.


*/

    // Save the list to state, with the new mug
    // if (mugList.length === 0) {
    //   // New arrary in case its the first mug in the list 
    //   setMugList([newMug]);
    // } else {
    //   // If the list has mugs in it already, add the new one at the end of the list. 
      
    // }

        // update the list of mugs state with the new mug 

    // clear all the text fields and the file uploader to prepare for the next mug 