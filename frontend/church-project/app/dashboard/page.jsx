import React from 'react'

const Dashboard = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/userprofiles/",{
  cache: 'no-store'
  })
  const members =await res.json()


  return (
    <>
    <h1>Members</h1>
    <ul>
    {members?.map(member =><li key={member.id}>{member.user.first_name}</li>)}
    </ul>
    </>
  )
}

export default Dashboard 