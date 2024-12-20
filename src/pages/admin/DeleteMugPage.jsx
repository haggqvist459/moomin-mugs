import React, { useEffect, useState } from 'react'
import { loadList, saveList } from '../../utils';
import { FaRegTrashCan } from "react-icons/fa6";
import { AdminListItem } from '../../components';

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
    <section className=''>
      <div className='container md:w-2/4 w-11/12 bg-white mx-auto py-5 border shadow-md rounded-md'>
        <div className='flex flex-col items-center px-5'>
          <div>
            <h2 className='text-2xl font-bold mb-5'>Delete Mugs</h2>
          </div>
          {mugList.map((mug) => (
            <div className='flex row w-full mb-3 pb-1 justify-between items-center border-b' key={mug.id}>
              <AdminListItem mug={mug} />
              <div className=''>
                <FaRegTrashCan onClick={() => deleteMug(mug.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeleteMugPage