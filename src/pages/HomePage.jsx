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
    <section className="w-11/12 mx-auto">
      <div className="container mx-auto py-5">
        <div className="px-5">
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 items-stretch'>
            {mugList.map((mug) => (
                <Mug key={mug.id} id={mug.id} mug={mug} />
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

