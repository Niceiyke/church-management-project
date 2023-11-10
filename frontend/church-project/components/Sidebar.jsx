import Link from "next/link"

function Sidebar() {
  return (
    <div className="flex flex-col bg-gray-300 h-screen w-[15%]">
        <Link href='/' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Home</Link>
        <Link href='/dashboard' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Dashboard</Link>
        <Link href='/members' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Members</Link>
        <Link href='/new-converts' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>New Converts</Link>
        <Link href='/members/register' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Add New Member</Link>
        <Link href='/new-converts/register' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Add New Convert</Link>
        

    </div>
  )
}

export default Sidebar