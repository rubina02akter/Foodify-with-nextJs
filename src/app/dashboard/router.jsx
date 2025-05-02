import Link from "next/link";


export default function routerPage() {
  return (
   <div className='pt-20'>
     <div className=' bg-[#D4C3BE] min-h-screen pt-6 px-6'>
    <div className='grid grid-cols-1 gap-4 '>
        <Link href="/dashboard/profile" className="btn mr-2">
        My Profile
        </Link>
        <Link href="/dashboard/my-orders" className="btn mr-2">
       My orders
        </Link>
        <Link href="/dashboard/settings" className="btn mr-2">
       Settings
        </Link>
    </div>
    </div>
   </div>
  )
}
