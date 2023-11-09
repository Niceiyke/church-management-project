"use client"

import { useRouter } from 'next/navigation'


function MoreButton({page,id,buttonText}) {
    const route =useRouter()

    const handleClick =()=>{
        

        route.push(`/${page}/${id}`)
        console.log('pushed')
    }

  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}

export default MoreButton