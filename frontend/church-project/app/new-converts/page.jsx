import FetchNewConverts from '@/components/FetchNewConverts'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function NewConvert() {
  return (
    <div className='flex gap-4'>
      <Sidebar/>
      
         <FetchNewConverts/>
    </div>
   
        
  )
}

export default NewConvert