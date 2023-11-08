import Link from 'next/link'
import React from 'react'

const FetchMembers = async () => {

    const res =await fetch("http://127.0.0.1:8000/api/members/",{
        cache:'no-cache'
    })

    const members =await res.json()

  return (
    <div>
        <h1> Members</h1>
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Home cell
              </th>
              <th scope="col" className="px-6 py-3">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {
              members.map(member => 
              <Link href={`/members/${member.id}`} key={member.id}>
              <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {member.first_name}
                </td>
                <td className="px-6 py-4">
                  {member.last_name}
                </td>
                <td className="px-6 py-4">
                  {member.gender}
                </td>
                <td className="px-6 py-4">
                  {member.phone_number}
                </td>
                <td className="px-6 py-4">
                  {member.email}
                </td>
                <td className="px-6 py-4">
                  {member.address}
                </td>
                <td className="px-6 py-4">
                  {member.homecell}
                </td>
                <td className="px-6 py-4">
                  {member.unit}
                </td>
              </tr>
              </Link>)
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FetchMembers