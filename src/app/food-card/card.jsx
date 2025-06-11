
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: "200",
  subsets: ["latin"],
});

export default function card({ card }) {
  const { id,name, title,image } = card;
  console.log(card);
  return (
    <div className='font-bold text-start border p-4 bg-[#BA0120] text-white rounded-br-4xl rounded-tl-4xl '>
      <div> 
       
        <Image src={image} width={500} height={100} alt= {title} className='h-[300px] rounded-br-4xl rounded-tl-4xl object-cover overflow-hidden'/>
        <h2 className={roboto.className}>Name:{name}</h2>
      
      <h2>Title: {title}</h2> 
      <div className='flex justify-end'>
          <Link href={`/food-card/${id}`}>
          <button className='btn rounded-br-4xl rounded-tl-4xl text-[#BA0120]'>View Details</button>
          </Link>
        </div>
      </div>
     
    </div>
  );
}