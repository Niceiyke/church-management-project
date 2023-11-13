import React from 'react'

async function TopDashBoardNav() {
    const res = await fetch("http://127.0.0.1:8000/api/total-attendance",{cache:"no-cache"})

    const total =await res.json()

    return (
        <div className='w-full h-48 bg-gray-100 flex'>
            <div className='flex justify-center flex-col text-center  border-2 w-1/4'>
                <h2 className='mb-4'>Attendance</h2>
                <h4>{total.total_attendance}</h4>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black w-1/4'>
                <h2 className='mb-4'>First Timers</h2>
                <h3>{total.total_first_timers}</h3>
            </div>
            <div className='flex justify-center flex-col text-center border-2 w-1/4'>
                <h2 className='mb-4'>New Converts</h2>
                <h3>{total.total_new_converts}</h3>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black w-1/4'>
                <h2 className='mb-4'>Finance</h2>
                <h3>#3,000,000</h3>
            </div>

        </div>
    )
}



export default TopDashBoardNav 