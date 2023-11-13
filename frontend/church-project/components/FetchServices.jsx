import React from 'react'
import MoreButton from './MoreButton'

async function FetchServices() {

    const res = await fetch("http://127.0.0.1:8000/api/services/", {
        cache: 'no-cache'
    })

    const services = await res.json()

    return (
        <div className='w-full p-4'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Service
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Attendance
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Detail
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service =>

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={service.id} >
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {service.service_type.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {service.service_date}
                                    </td>

                                    <td className="px-6 py-4">
                                        {service.total_attendance.males + service.total_attendance.females + service.total_attendance.children}
                                    </td>

                                    <td className="px-6 py-4">
                                        <MoreButton page='services' id={service.id}  buttonText='View' />
                                    </td>

                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FetchServices