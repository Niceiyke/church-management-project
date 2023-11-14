import FetchServices from '@/components/FetchServices'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Services() {
    return (
    <div className='flex'>
        <Sidebar/>
        <FetchServices />
    </div>
    )
}

export default Services