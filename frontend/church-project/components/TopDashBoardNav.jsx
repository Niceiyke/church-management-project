import CurrencyFormatter from '@/utils/CurrencyFormatter'
import React from 'react'

async function TopDashBoardNav() {
    
    const response = await fetch("http://127.0.0.1:8000/api/total-income", { cache: "no-cache" })

    const total_income = await response.json()

    const res = await fetch("http://127.0.0.1:8000/api/total-attendance", { cache: "no-cache" })

    const total_attendance = await res.json()


    return (
        <div className='bg-gray-100 block md:flex flex-wrap'>
            <div className='flex justify-center flex-col text-center  border-2 md:w-2/4 '>
                <h3 className='mb-4'>Attendance</h3>
                <h4>{total_attendance.total_attendance}</h4>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black md:w-2/4'>
                <h3 className='mb-4'>Total Income</h3>
                <h4><CurrencyFormatter amount={total_income.total_income}/></h4>
            </div>
            <div className='flex justify-center flex-col text-center border-2 text-black md:w-2/4'>
                <h3 className='mb-4'>First Timers</h3>
                <h4>{total_attendance.total_first_timers}</h4>
            </div>
            <div className='flex justify-center flex-col text-center border-2 md:w-2/4'>
                <h3 className='mb-4'>New Converts</h3>
                <h4>{total_attendance.total_new_converts}</h4>
            </div>
  

        </div>
    )
}



export default TopDashBoardNav 