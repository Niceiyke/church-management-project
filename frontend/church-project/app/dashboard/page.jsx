import Sidebar from '@/components/Sidebar'
import TopDashBoardNav from '@/components/TopDashBoardNav'
import React from 'react'
import Services from '../services/page'

const Dashboard = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/profiles/", {
    cache: 'no-store'
  })
  const members = await res.json()


  return (


    <div className='flex gap-4 mr-4'>

      <Sidebar />
      <div className='w-full'>
        <TopDashBoardNav />
        <Services />
      </div>


    </div>



  )
}

export default Dashboard 