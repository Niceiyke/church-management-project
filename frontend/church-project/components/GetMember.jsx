import React from 'react'

const GetMember = async({id}) => {

    const res = await fetch(`http://127.0.0.1:8000/api/member/${id}/`)

    const member =await res.json()
  return (
    <>
        <h3>{member.first_name}</h3>
        <h3>{member.last_name}</h3>
    </>
  )
}

export default GetMember