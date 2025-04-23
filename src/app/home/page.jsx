// "use client";

// import Link from "next/link";
import Banner2 from "../Component/Banner2";
import Card from "../food-card/page"
// import { useEffect, useState } from "react";
// import Image from "next/image";


export default function home() {
  // const [cards, setCard] = useState([]);
  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((res) => res.json())
  //     .then((data) => setCard(data));
  // }, []);

  // const menuCard = cards.slice(0,6);


  return (
    <div className='min-h-screen'>
   
    <Banner2 />
    <Card />

    {/* <div className='w-11/12 mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
  
      {menuCard.map((card) => {
        return (
          <>
           <div className='font-bold text-start border p-4 bg-[#BA0120] text-white rounded-br-4xl rounded-tl-4xl'>
       
       <Image src={card.image} width={400} height={300} alt='food' className='w-[500px] h-[300px] rounded-br-4xl rounded-tl-4xl object-center'/>
       <h2>menuCard:{card.name}</h2>
     
 
       <div className='flex justify-end'>
         <Link href={`/home/${card.id}`}>
         <button className='btn rounded-bl-4xl rounded-tr-4xl text-[#BA0120]'>View Details</button>
         </Link>
       </div>
     </div>
          </>
        )
      })}
    </div> */}
    </div>
  )
}
