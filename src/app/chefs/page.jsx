'use client';

import Image from "next/image";
import { useState,useEffect } from "react";

export default function page() {

  const[chefs,setChefs] = useState([])
  useEffect(() => {
    fetch("/chefs.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);


  return (
    <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto my-12'>
      {
        chefs.map(chef=>(
          <div className='border rounded-3xl p-6'>
            <Image src={chef.image} alt='' width={100} height={150} />
            <h2>{chef.name}</h2>
            <p>{chef.description}</p>
          </div>

        ))
      }
    </div>
  )
}
