import FetchMembers from '@/components/FetchMembers'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Members() {
  return (
    <div className='flex gap-4'>

      <Sidebar/>

      <FetchMembers/> 

    </div>
    
  )
}

export default Members