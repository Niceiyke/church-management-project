import React from 'react'

async function TopDashBoardNav() {
    const res = await fetch("http://127.0.0.1:8000/api/total-attendance", { cache: "no-cache" })

    const total = await res.json()

    return (
        <div className='w-full h-48 bg-gray-100 flex'>
            <div className='flex justify-center flex-col text-center  border-2 w-1/4'>
                <h3 className='mb-4'>Attendance</h3>
                <h4>{total.total_attendance}</h4>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black w-1/4'>
                <h3 className='mb-4'>First Timers</h3>
                <h4>{total.total_first_timers}</h4>
            </div>
            <div className='flex justify-center flex-col text-center border-2 w-1/4'>
                <h3 className='mb-4'>New Converts</h3>
                <h4>{total.total_new_converts}</h4>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black w-1/4'>
                <h3 className='mb-4'>Income</h3>
                <h4>#3,000,000</h4>
            </div>

        </div>
    )
}



export default TopDashBoardNav 