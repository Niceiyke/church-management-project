import React from 'react'

function TopDashBoardNav() {
    return (
        <div className='w-full h-48 bg-gray-100 flex'>
            <div className='flex justify-center flex-col text-center  border-2 w-1/4'>
                <h2>Attendance</h2>
                <h3>4000</h3>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black w-1/4'>
                <h2>Finance</h2>
                <h3>#3,000,000</h3>
            </div>
            <div className='flex justify-center flex-col text-center border-2 w-1/4'>
                <h2>Attendance</h2>
                <h3>4000</h3>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black w-1/4'>
                <h2>Finance</h2>
                <h3>#3,000,000</h3>
            </div>

        </div>
    )
}



export default TopDashBoardNav 