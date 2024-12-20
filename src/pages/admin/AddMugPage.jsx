import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { convertImageToString, saveList, loadList, ROUTES } from '../../utils';
import { FormField } from '../../components';


const AddMugPage = () => {

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const [mugList, setMugList] = useState([]);
  const [newMug, setNewMug] = useState({
    'id': '',
    'name': '',
    'number': '',
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

  const handleFieldChange = (field, value) => {
    setNewMug((prev) => ({...prev, [field]: value}))
  }

  const handlePhotoUpload = async (e) => {

    const file = e.target.files[0];
    // console.log('file: ', file)
    const base64Image = await convertImageToString(file);
    setNewMug({ ...newMug, imageUrl: base64Image });

  }

  const handleImageButtonClick = () => {
    document.getElementById('image').click();
  }

  const cancelForm = () => {
    return navigate(ROUTES.HOME);
  }

  const submitForm = (e) => {
    e.preventDefault();
    const fileInput = fileInputRef.current;

    if (!fileInput || !fileInput.files.length) {
      alert('Please select an image file!');
      return;
    }

    
  // Check if the file input exists
  if (!fileInput) {
    alert('File input element not found!');
    return;
  }

  // Check if a file is selected
  if (!fileInput.files || !fileInput.files.length) {
    alert('Please select an image file!');
    return;
  }

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
    <section className=''>
      <div className='container bg-white mx-auto md:w-2/4 w-11/12 pt-5 border shadow-md rounded-md'>
        <div className='px-5'>
          <form onSubmit={submitForm}>
            <div>
              <h2 className='text-2xl text-center font-bold mb-5'>Add Mug</h2>
            </div>
            <div className=''>
              {/* Text fields and labels for: */}
              {/* Name & number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-2">
                {/* Name */}
                <FormField 
                  labelValue={"Name:"}
                  placeholder={"e.g. Moomintroll"}
                  id={"name"}
                  value={newMug.name}
                  onChange={(value) => {handleFieldChange('name', value)}}
                  required
                />
                {/* Number */}
                <FormField 
                  labelValue={"Number:"}
                  placeholder={"1"}
                  id={"number"}
                  value={newMug.number}
                  onChange={(value) => {handleFieldChange('number', value)}}
                  required
                />
                {/* Year */}
                <FormField 
                  labelValue={"Season:"}
                  placeholder={"1992"}
                  id={"year"}
                  value={newMug.year}
                  onChange={(value) => {handleFieldChange('year', value)}}
                  required={false}
                />
                {/* Season */}
                <FormField 
                  labelValue={"Season:"}
                  placeholder={"Summer"}
                  id={"season"}
                  value={newMug.season}
                  onChange={(value) => {handleFieldChange('season', value)}}
                  required={false}
                />
              </div>
              {/* Description */}
              <div className='mb-2'>
                <label htmlFor='name' className='font-bold mb-1'>Description: </label>
                <textarea
                  type='text'
                  className='border rounded w-full px-1'
                  placeholder='Bottom stamp information, etc'
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
                  ref={fileInputRef}
                  style={{display: 'none'}}
                  accept='image/*'
                  alt='select image'
                  className='border rounded w-full'
                  placeholder='e.g. 2002 - 2010'
                  name='image'
                  id='image'
                  onChange={(e) => handlePhotoUpload(e)} />
                  <button
                    type='button'
                    id='image'
                    className='w-full bg-slate-600 hover:bg-slate-400 text-white rounded font-bold py-1 mt-2 mb-1'
                    onClick={handleImageButtonClick}>Add Image</button>
              </div>
              <div className='flex space-x-2 mb-5'>
                <button className='w-1/2 bg-slate-300 hover:bg-slate-400 rounded font-bold' type='submit'>Add Mug</button>
                <button className='w-1/2 hover:bg-slate-400 rounded border-2 border-bg-300 font-bold' type='button' onClick={() => cancelForm()}>Cancel</button>
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


/* 








<div className="grid grid-cols-[auto_1fr_auto_1fr] gap-4 items-center mb-4">

  <label htmlFor="year" className="font-bold">Year:</label>
  <input
    type="text"
    className="border rounded w-full px-1"
    placeholder="2002 - 2010"
    name="year"
    id="year"
    required
    value={newMug.year}
    onChange={(e) => setNewMug({ ...newMug, year: e.target.value })}
  />

  <label htmlFor="season" className="font-bold">Season:</label>
  <input
    type="text"
    className="border rounded w-full px-1"
    placeholder="Summer"
    name="season"
    id="season"
    value={newMug.season}
    onChange={(e) => setNewMug({ ...newMug, season: e.target.value })}
  />
</div>


*/


/*

              <div className='mb-2 flex flex-col md:flex-row'>
                <label htmlFor='name' className='font-bold mb-1 mr-1'>Name: </label>
                <input
                  type='text'
                  className='border rounded w-full md:max-w-lg px-1 md:mr-2'
                  placeholder='e.g. Ski Jump'
                  name='name'
                  id='name'
                  required
                  value={newMug.name}
                  onChange={(e) => setNewMug({ ...newMug, name: e.target.value })}
                />
                <label htmlFor='number' className='font-bold mb-1 mr-1'>Number: </label>
                <input
                  type='text'
                  className='border rounded w-full md:max-w-lg px-1 md:mr-2'
                  placeholder='# '
                  name='number'
                  id='number'
                  required
                  value={newMug.number}
                  onChange={(e) => setNewMug({ ...newMug, number: e.target.value })}
                />
              </div>


              <div className='mb-2 flex flex-col md:flex-row'>
                <label htmlFor='year' className='font-bold mb-1 mr-1'>Year: </label>
                <input
                  type='text'
                  className='border rounded w-full md:max-w-lg px-1 md:mr-2'
                  placeholder='2002 - 2010'
                  name='year'
                  id='year'
                  required
                  value={newMug.year}
                  onChange={(e) => setNewMug({ ...newMug, year: e.target.value })} />
                <label htmlFor='season' className='font-bold mb-1 mr-1'>Season: </label>
                <input
                  type='text'
                  className='border rounded w-fullmd:max-w-lg px-1 md:mr-2'
                  placeholder='Summer'
                  name='season'
                  id='season'
                  value={newMug.season}
                  onChange={(e) => setNewMug({ ...newMug, season: e.target.value })}
                />
              </div>

NAME: 
                              <div className="flex flex-col">
                  <label htmlFor="name" className="font-bold mb-1">Name:</label>
                  <input
                    type="text"
                    className="border rounded w-full px-2"
                    placeholder="e.g. Ski Jump"
                    name="name"
                    id="name"
                    required
                    value={newMug.name}
                    onChange={(e) => setNewMug({ ...newMug, name: e.target.value })}
                  />
                                  </div>
*/