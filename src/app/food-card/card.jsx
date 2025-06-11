
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
    <div className='font-bold text-start border p-4 bg-[#BA0120] text-white rounded-br-4xl rounded-tl-4xl shadow-lg transition-transform duration-300 hover:scale-105'>
  <div className='space-y-4'>
    
    <Image 
      src={image} 
      width={500} 
      height={100} 
      alt={title} 
      className='w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-br-4xl rounded-tl-4xl object-cover overflow-hidden'
    />
    
    <h2 className={`${roboto.className} text-lg md:text-xl`}>Name: {name}</h2>
    <h2 className='text-base md:text-lg'>Title: {title}</h2>
    
    <div className='flex justify-end'>
      <Link href={`/food-card/${id}`}>
        <button className='btn rounded-br-4xl rounded-tl-4xl text-[#BA0120] bg-white hover:bg-gray-100 transition-colors duration-200 px-4 py-2 text-sm md:text-base'>
          View Details
        </button>
      </Link>
    </div>

  </div>
</div>

  );
}