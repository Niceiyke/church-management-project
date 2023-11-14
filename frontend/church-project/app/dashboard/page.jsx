import Sidebar from '@/components/Sidebar'
import TopDashBoardNav from '@/components/TopDashBoardNav'
import React from 'react'

import FetchServices from '@/components/FetchServices'

const Dashboard = async () => {

  return (


    <div className='flex '>

      <Sidebar />
      <div className='w-full'>
        <TopDashBoardNav />
        <FetchServices />
      </div>


    </div>



  )
}

export default Dashboard 