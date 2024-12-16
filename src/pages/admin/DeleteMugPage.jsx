import React, { useEffect, useState } from 'react'
import { loadList, saveList } from '../../utils';
import { FaRegTrashCan } from "react-icons/fa6";

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

    console.log("DeleteMugPage deletemug mug id to delete: ", id);
    // Filter mugList array to remove the mug with the ID 
    const updatedMugList = mugList.filter(mug => mug.id !== id)
    console.log("DeleteMugPage deleteMug updatedMugList: ", updatedMugList);

    // Update the state to reload the UI 
    // Save the new list of mugs into localstorage

    setMugList(updatedMugList);
    saveList(updatedMugList);


  }

  return (
    <div className='flex w-2/4 flex-col items-center mt-5 border-2 border-slate-300'>
      {mugList.map((mug) => (
        <div className='flex row w-full mb-3 px-20 justify-between' key={mug.id}>
          {/* single column list, small image + name and a bin button on the right */}
          <div className='flex row'>
            <img
              src={mug.imageUrl}
              alt="Moomin Mug"
              className='w-auto h-10' />
            <h3 className=''>{mug.name}</h3>
          </div>
          <div className=''>
            {/* delete button */}
            <FaRegTrashCan onClick={() => deleteMug(mug.id)} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default DeleteMugPage