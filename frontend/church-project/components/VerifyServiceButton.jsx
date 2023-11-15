"use client"
const handleVerify = async (id)=>{
    console.log('verified',id)
  }

function VerifyServiceButton( {id}) {
  return (
    <button type='button' className='w-full rounded-md p-4 bg-gray-800 mt-4 text-white' onClick={()=>handleVerify(id)}>Verify Service</button>
  )
}

export default VerifyServiceButton