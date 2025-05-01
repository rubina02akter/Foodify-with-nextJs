"use client";

import UseAuth from "@/app/ContextApi/UseAuth";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function page() {
  const { id } = useParams();

  const [info, setInfo] = useState([]);
  const{cart,setCart} = UseAuth();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const findInfo = data.find(
          (cardDetail) => parseInt(cardDetail.id) === parseInt(id)
        );
        setInfo(findInfo);
      });
  }, []);
const { name, image, title } = info;

//handleCart
const handleCart=(count)=>{
   setCart([...cart,count])
}



  

  return (
    <div className="p-4 font-bold min-h-screen">
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <Image src={image} width={500} height={500} alt="food" />
      </div>
      <button onClick={()=>handleCart(info)} className='btn'>Add to cart</button>
    </div>
  );
}
