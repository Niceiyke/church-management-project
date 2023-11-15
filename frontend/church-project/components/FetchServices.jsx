import React from 'react'
import MoreButton from './MoreButton'
import CurrencyFormatter from '@/utils/CurrencyFormatter'

async function FetchServices() {

    const res = await fetch("http://127.0.0.1:8000/api/services/", {
        cache: 'no-cache'
    })

    const services = await res.json()

    return (

        <div className="overflow-x-auto w-full">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Service
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Attendance
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Income
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Detail
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {
                        services.map(service =>

                            <tr className="" key={service.id} >
                                <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                    {service.service_type.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {service.service_date}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    {service.total_attendance.males + service.total_attendance.females + service.total_attendance.children}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <CurrencyFormatter amount={service.total_income.offering + service.total_income.tithe + service.total_income.thanksgiving + service.total_income.projects} />
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    <MoreButton page='services' id={service.id} buttonText='View' />
                                </td>

                            </tr>

                        )
                    }

                </tbody>
            </table>
        </div>

    )
}

export default FetchServices