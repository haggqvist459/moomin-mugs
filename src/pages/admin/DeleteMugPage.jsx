import React, { useEffect, useState } from 'react'
import { loadList } from '../../utils';

const DeleteMugPage = () => {

  const [mugList, setMugList] = useState([]);

  useEffect(() => {

    // Load mugs from localStorage
    const storedMugs = loadList();
    // Check loaded result 
    console.log("DeleteMugPage useEffect storedMugs: ", storedMugs);
    // Update state
    setMugList(storedMugs);
  }, [])

  const deleteMug = (id) => {
    // Filter mugList array to remove the mug with the ID 

    // Save the new list of mugs into localstorage

    // Update the state to reload the UI 


  }

  return (
    <div className='flex w-3/4 justify-center border-2 border-slate-300'>
      {mugList.map((mug) => (
        <div className='' key={mug.id}>
          {/* single column list, small image + name and a bin button on the right */}
          <div className=''>
            <img 
              src={mug.imageUrl} 
              alt="Moomin Mug"
              className='w-auto h-40' />
            <h3 className=''>{mug.name}</h3>
          </div>
          <div className=''>
            {/* delete button */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DeleteMugPage