import GetMember from '@/components/GetMember'
import React from 'react'

const MemberDetail = async ({params})=> {

  return (
    <div>
      <GetMember id={params.id}/>
    </div>
  )
}

export default MemberDetail

