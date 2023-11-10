import NewConvertsForm from '@/components/RegisterNewConverts'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function NewMember() {
  return (
    <div className='flex gap-4'>
      <Sidebar/>
      <NewConvertsForm/>
    </div>
    
  )
}

export default NewMember