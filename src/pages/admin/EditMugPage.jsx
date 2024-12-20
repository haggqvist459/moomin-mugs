import React, { useEffect, useState } from 'react'
import { loadList, ROUTES } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';
import { AdminListItem } from '../../components';
import { FaRegPenToSquare } from "react-icons/fa6";

const EditMugPage = () => {

  const [mugList, setMugList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    // Load mugs from localStorage
    const storedMugs = loadList();
    // Check loaded result 
    console.log("EditMugPage useEffect storedMugs: ", storedMugs);
    // Update state
    setMugList(storedMugs);
  }, [])


  return (
    <section className=''>
      <div className='container md:w-2/4 w-11/12 bg-white mx-auto py-5 border shadow-md rounded-md'>
        <div className='flex flex-col items-center px-5'>
          <div>
            <h2 className='text-2xl font-bold mb-5'>Edit Mug Details</h2>
          </div>
          {mugList.map((mug) => (
            <div className='flex row w-full mb-3 pb-1 justify-between items-center border-b' key={mug.id}>
              <AdminListItem mug={mug} />
              <div className=''>
                <FaRegPenToSquare onClick={() => navigate(ROUTES.EDIT_PAGE + mug.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EditMugPage