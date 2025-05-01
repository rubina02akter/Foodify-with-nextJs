"use client";
import Image from "next/image";
import UseAuth from "../ContextApi/UseAuth"


export default function page() {
  
  const{cart} = UseAuth();
  console.log(cart);


  return (
    <div className='min-h-screen'>
         <div>
          {
            cart.map(data=>{
              return (
                <>
                <h2>{data.name}</h2>
                <Image src={data.image} alt='cart data' height={300} width={300}/>
                </>
              )
            })
          }
         </div>
      </div>
  )
}
