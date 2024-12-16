import React, { useEffect, useState } from 'react'
import { loadList, ROUTES, saveList } from '../../utils';
import { Link } from 'react-router-dom';

const EditMugPage = () => {

  const [mugList, setMugList] = useState([]);

  useEffect(() => {

    // Load mugs from localStorage
    const storedMugs = loadList();
    // Check loaded result 
    console.log("EditMugPage useEffect storedMugs: ", storedMugs);
    // Update state
    setMugList(storedMugs);
  }, [])

  return (
    <section className='bg-slate-50 w-full min-h-screen pt-5'>
      <div className='container w-2/4 bg-white mx-auto py-5 border shadow-md rounded-md flex justify-center'>
        <div className='flex flex-col items-center px-5'>
          <div>
            <h2 className='text-2xl text-center font-bold mb-5'>Edit Mug Details</h2>
          </div>
          {mugList.map((mug) => (
            <Link key={mug.id} to={ROUTES.EDIT_PAGE + mug.id}>
              <div className='flex row w-full mb-3 px-20'>
                <div className='flex row'>
                  <img
                    src={mug.imageUrl}
                    alt="Moomin Mug"
                    className='w-auto h-10' />
                  <h3 className=''>{mug.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EditMugPage