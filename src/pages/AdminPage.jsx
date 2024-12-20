import React from 'react'
import { exportLocalStorageToFile, importLocalStorageFromFile } from '../utils'

const AdminPage = () => {

  const handleButtonClick = () => {
    document.getElementById('inputBackup').click(); // Trigger the file input click
  };

  return (
    <section className=''>
      <div className='container bg-white mx-auto md:w-2/4 w-11/12 pt-5 border shadow-md rounded-md'>
        <h2 className='text-2xl text-center font-bold mb-5'>Import Data</h2>
        <div className='px-5 mb-2'>
          <p>Import a .txt file with backup data.</p>
          <p>Data must be in JSON format, using the same structure as existing data. </p>
          <input
            id='inputBackup'
            type='file'
            accept='.txt'
            style={{display: 'none'}}
            onChange={(e) => importLocalStorageFromFile(e)}
          />
          <button 
            id='inputBackup'
            type='button'
            className='w-full bg-slate-300 hover:bg-slate-400 rounded font-bold py-1 mt-2 mb-5'
            onClick={handleButtonClick}>Import Data</button>
        </div>
        <h2 className='text-2xl text-center font-bold mb-5'>Export Data</h2>
        <div className='px-5'>
          <p>Exports all data into a .txt file</p>
          <p>Data exported into JSON format, in the same structure as existing data.</p>
          <p>To ensure it can be imported again, do not edit file content.</p>
          <button className='w-full bg-slate-300 hover:bg-slate-400 rounded font-bold py-1 mt-2 mb-5' onClick={() => exportLocalStorageToFile()}>Export Data</button>
        </div>
      </div>
    </section>
  )
}

export default AdminPage

// Import / export JSON file with backup of mugs 
// Perhaps display text field with the JSON in plain text 
// 
