import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Mug } from '../components';
import { API, loadList, LOCALSTORAGE_KEY, saveList } from '../utils';

const HomePage = () => {

  const [mugs, setMugs] = useState([]);
  const [mugList, setMugList] = useState([]);


  useEffect(() => {
    
    const storedMugs = JSON.parse(localStorage.getItem(loadList())) || [];
    setMugList(storedMugs)


    const fetchMugs = async () => {
      try {
        const res = await fetch(API.URL);
        const data = await res.json();
        setMugs(data);
        // console.log("mugs: ", mugs)
      } catch (error) {
        console.log("Error fetching list of mugs: ", error)
      }
    }

    fetchMugs();

  }, [])

  // console.log(mugsData);

  return (
    <div className='sm-flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10'>
        {mugs.map((mug) => (
          <Mug mug={mug} key={mug.id} />
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