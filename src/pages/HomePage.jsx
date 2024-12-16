import React, { useEffect, useState } from 'react'
import { Mug } from '../components';
import { loadList } from '../utils';

const HomePage = () => {

  const [mugList, setMugList] = useState([]);


  useEffect(() => {

    // Load mugs from localStorage
    const storedMugs = loadList();
    // Check loaded result 
    console.log("HomePage useEffect storedMugs: ", storedMugs);
    // Update state
    setMugList(storedMugs);

  }, [])



  return (
    <section className='bg-slate-50 w-full min-h-screen pt-5'>
      <div className='container bg-white mx-auto py-5 border shadow-md rounded-md'>
        <div className='px-5 sm-flex'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10'>
            {/* Display a message in case there are no mugs stored. */}
            {/* Perhaps a link to add mug page */}
            {mugList.map((mug) => (
              <Mug id={mug.id} mug={mug} key={mug.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage



// grid size: 
// 3x wide on computer & tablet in landscape
// 2x wide on tablets portrait 
// 1x wide on phone 

/*

if (loadedList === undefined) {
          // If the list is undefined and empty, save a new list into localstorage 
          // Use the empty array  
          saveList(mugList)
        } else {
          if (!Array.isArray(loadedList)) {
            loadedList = [loadedList]; // Convert single object to an array
            console.log("loadedList array: ", loadedList)
          }
          setMugList(loadedList);
          console.log("HomePage useEffect mugList: ", mugList);
        }



*/