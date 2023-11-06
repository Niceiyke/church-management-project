import React from 'react'

const Dashboard = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/profiles/", {
    cache: 'no-store'
  })
  const members = await res.json()


  return (


    <>
      <h1>Members</h1>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
                Last Name
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                Home cell
              </th>
              <th scope="col" class="px-6 py-3">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {
              members.map(member => <tr key={member.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {member.user.first_name}
                </td>
                <td class="px-6 py-4">
                  {member.user.last_name}
                </td>
                <td class="px-6 py-4">
                  {member.gender}
                </td>
                <td class="px-6 py-4">
                  {member.user.phone_number}
                </td>
                <td class="px-6 py-4">
                  {member.user.email}
                </td>
                <td class="px-6 py-4">
                  {member.user.address}
                </td>
                <td class="px-6 py-4">
                  {member.homecell}
                </td>
                <td class="px-6 py-4">
                  {member.unit}
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </>



  )
}

export default Dashboard 