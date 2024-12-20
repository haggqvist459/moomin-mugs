import React from 'react'

const AdminListItem = ({ mug }) => {

  return (
      <div className='flex row items-center'>
        <img
          src={mug.imageUrl}
          alt="Moomin Mug"
          className='w-auto h-10' />
        <h3 className='font-semibold px-5'>{mug.name}</h3>
      </div>
  )
}

export default AdminListItem