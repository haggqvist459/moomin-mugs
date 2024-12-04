import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Mug } from '../components';
import { API } from '../utils';

const HomePage = () => {

  const [mugs, setMugs] = useState([]);


  useEffect(() => {
    const fetchMugs = async () => {
      try {
        const res = await fetch(API.URL);
        const data = await res.json();
        setMugs(data);
        console.log("mugs: ", mugs)
      } catch (error) {
        console.log("Error fetching list of mugs: ", error)
      }
    }

    fetchMugs();

  },[])

  // console.log(mugsData);

  return (
    <div className='sm-flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10'>
        {mugs.map((mug) => (
          <Mug mug={mug} key={mug.id}/> 
        ))}
      </div>
    </div>
  )
}

export default HomePage



// grid size: 
// 3x wide on computer & tablet in landscape
// 2x wide on tablets portrait 
// 1x wide on phone 

