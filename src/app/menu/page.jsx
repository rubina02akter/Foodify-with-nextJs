import Image from 'next/image';
import Data from '../../../public/data.json';
import Link from 'next/link';
export default function page() {

//
  return (
    <div className='p-0 my-6'>
     <div className='grid grid-cols-3 gap-4'>
      {
        Data.map(d=>(
        
          <div className='font-thin text-start border p-4 bg-[#BA0120] text-white rounded-br-4xl rounded-tl-4xl '>
          <div> 
           
            <Image src={d.image} width={500} height={100} alt='food' className='h-[200px] rounded-br-4xl rounded-tl-4xl object-cover overflow-hidden'/>
            <h2>Name:{d.name}</h2>
          
          <h2>Title: {d.title}</h2>
          <p>Price: {d.price}$</p>
          <div className='flex justify-end'>
              <Link href={`/food-card/${d.id}`}>
              <button className='btn rounded-br-4xl rounded-tl-4xl text-[#BA0120]'>View Details</button>
              </Link>
            </div>
          </div>
         
        </div>
       
        ))
      }
     </div>
    </div>
  )
}
