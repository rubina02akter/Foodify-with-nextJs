
import Image from "next/image";
import Link from "next/link";

export default async function card({ card }) {
  const { id} = card;
  const data = await fetch("/data.json");
  const result = await data.json();
  const menuDetails = result.find((user) => user.id === parseInt(id));

  return (
    <div>
      <div className='font-bold text-start border p-4 bg-[#BA0120] text-white rounded-br-4xl rounded-tl-4xl'>
       
        <Image src={menuDetails.image} width={400} height={300} alt='food' className='w-[500px] h-[300px] rounded-br-4xl rounded-tl-4xl object-center'/>
        <h2>MenuDetails:{menuDetails.name}</h2>
      
  
        <div className='flex justify-end'>
          <Link href={`/home/${id}`}>
          <button className='btn rounded-bl-4xl rounded-tr-4xl text-[#BA0120]'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}