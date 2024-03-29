import MembersRegistrationForm from '@/components/RegisterMember'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function NewMember() {
  return (
    <div className='flex gap-4'>
      <Sidebar/>
      <MembersRegistrationForm/>
    </div>
    
  )
}

export default NewMember